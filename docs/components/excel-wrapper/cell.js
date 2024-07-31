
const fontFamilyMap = {
    '0': 'Times New Roman',
    '1': 'Arial',
    '2': 'Tahoma',
    '3': 'Verdana',
    '4': 'Microsoft YaHei',
    '5': 'SimSun',
    '6': 'SimHei',
    '7': 'Kaiti',
    '8': 'FangSong',
    '9': 'NSimSun',
    '10': 'STXinwei',
    '11': 'STXingkai',
    '12': 'STLiti'
}


const CellValueType = {
    STRING: 1,
    NUMBER: 2,
    BOOLEAN: 3,
    FORCE_STRING: 4
}

const HorizontalAlign = {
    UNSPECIFIED: 0,//	The horizontal alignment is not specified. Do not use this.
    LEFT: 1,//	The text is explicitly aligned to the left of the cell.
    CENTER: 2,//	The text is explicitly aligned to the center of the cell.
    RIGHT: 3,//	The text is explicitly aligned to the right of the cell.
    JUSTIFIED: 4
}

const VerticalAlign = {
    UNSPECIFIED: 0,
    TOP: 1,//	The text is explicitly aligned to the top of the cell.
    MIDDLE: 2,//	The text is explicitly aligned to the middle of the cell.
    BOTTOM: 3
}
/**
 * An enumeration of the strategies used to handle cell text wrapping.
 */
const WrapStrategy = {
    UNSPECIFIED: 0,
    /**
     * Lines that are longer than the cell width will be written in the next cell over, so long as that cell is empty. If the next cell over is non-empty, this behaves the same as CLIP . The text will never wrap to the next line unless the user manually inserts a new line. Example:
     * | First sentence. |
     * | Manual newline that is very long. <- Text continues into next cell
     * | Next newline.   |
     */
    OVERFLOW: 1,
    /**
     * Lines that are longer than the cell width will be clipped. The text will never wrap to the next line unless the user manually inserts a new line. Example:
     * | First sentence. |
     * | Manual newline t| <- Text is clipped
     * | Next newline.   |
     */
    CLIP: 2,
    /**
     * Words that are longer than a line are wrapped at the character level rather than clipped. Example:
     * | Cell has a |
     * | loooooooooo| <- Word is broken.
     * | ong word.  |
     */
    WRAP: 3
}


function generateRandomId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


export function cellData(workbookData, worksheetData, luckyJson, sheet) {
    // cell data
    if (sheet.celldata) {
        if (!worksheetData.cellData) {
            worksheetData.cellData = {};
        }

        for (const cellItem of sheet.celldata) {
            const { r, c } = cellItem
            if (!worksheetData.cellData[r]) {
                worksheetData.cellData[r] = {};
            }
            if (!worksheetData.cellData[r][c]) {
                worksheetData.cellData[r][c] = {};
            }

            const cell = cellItem.v;
            const newCell = worksheetData.cellData[r][c];
            covertCell(newCell, cell);
        }
    }
}

export function covertCell(newCell, cell) {

    if (cell === null) return;

    if (typeof cell === 'string') {
        newCell.v = cell;
        return;
    }

    // rich text
    if (cell?.ct?.t === 'inlineStr') {
        const textRuns = [];
        let dataStream = '';
        const richTextList = cell.ct.s;

        if (!richTextList) {
            return;
        }

        let ed = 0;
        richTextList.forEach((inlineStrItem) => {

            const textStyle = {};
            covertInlineStyle(textStyle, inlineStrItem);

            const content = replaceNewlines(String(inlineStrItem.v)) || '';
            dataStream += content;

            let st = ed;
            ed = st + content.length;

            textRuns.push({
                st,
                ed,
                ts: textStyle,
            });
        });

        dataStream += '\r\n';

        newCell.p = {
            id: generateRandomId(6),
            body: {
                dataStream,
                textRuns,
            },
            documentStyle: {},
        };
    } else {
        // content
        if (cell.v !== undefined) {
            let v = cell.v;
            if (typeof v === 'boolean') {
                v = v ? 1 : 0;
                newCell.t = CellValueType.BOOLEAN
            }
            newCell.v = cell.v;
        } else if (cell.m !== undefined) {
            newCell.v = cell.m;
        }

        if (cell.f !== undefined) {
            newCell.f = cell.f;
        }

        const cellStyle = {};

        covertInlineStyle(cellStyle, cell);
        covertCellStyle(cellStyle, cell);

        newCell.s = Object.assign(newCell.s || {}, cellStyle);
    }
}

export function covertInlineStyle(textStyle, inlineStrItem) {

    // font family
    if (inlineStrItem.ff !== undefined) {
        textStyle.ff = fontFamilyMap[inlineStrItem.ff];
    }

    // font color
    if (inlineStrItem.fc !== undefined) {
        textStyle.cl = {
            rgb: inlineStrItem.fc,
        };
    }

    // font size
    if (inlineStrItem.fs !== undefined) {
        textStyle.fs = Number(inlineStrItem.fs);
    }

    // bold
    if (inlineStrItem.bl !== undefined) {
        textStyle.bl = inlineStrItem.bl;
    }

    // italic
    if (inlineStrItem.it !== undefined) {
        textStyle.it = inlineStrItem.it;
    }

    // strikethrough
    if (inlineStrItem.cl !== undefined) {
        textStyle.st = {
            s: inlineStrItem.cl,
        };
    }

    // underline
    if (inlineStrItem.un !== undefined) {
        textStyle.ul = {
            s: inlineStrItem.un,
        };
    }
}

export function covertCellStyle(cellStyle, cell) {

    // background color
    if (cell.bg) {
        cellStyle.bg = {
            rgb: cell.bg,
        };
    }

    // vertical align
    if (cell.vt) {
        switch (String(cell.vt)) {
            case '0':
                cellStyle.vt = VerticalAlign.MIDDLE;
                break;
            case '1':
                cellStyle.vt = VerticalAlign.TOP;
                break;
            case '2':
                cellStyle.vt = VerticalAlign.BOTTOM;
                break;

            default:
                break;
        }
    }

    // horizontal align
    if (cell.ht) {
        switch (String(cell.ht)) {
            case '0':
                cellStyle.ht = HorizontalAlign.CENTER;
                break;
            case '1':
                cellStyle.ht = HorizontalAlign.LEFT;
                break;
            case '2':
                cellStyle.ht = HorizontalAlign.RIGHT;
                break;

            default:
                break;
        }
    }

    // vertical text
    if (cell.tr) {
        switch (cell.tr) {
            case '0':
                cellStyle.tr = {
                    a: 0,
                    v: 0,
                };
                break;

            case '1':
                cellStyle.tr = {
                    a: -45,
                    v: 0,
                };
                break;

            case '2':
                cellStyle.tr = {
                    a: 45,
                    v: 0,
                };
                break;

            case '3':
                cellStyle.tr = {
                    a: 0,
                    v: 1,
                };
                break;

            case '4':
                cellStyle.tr = {
                    a: -90,
                    v: 0,
                };
                break;

            case '5':
                cellStyle.tr = {
                    a: 90,
                    v: 0,
                };
                break;

            default:
                break;
        }
    }

    // text wrap
    if (cell.tb) {
        switch (String(cell.tb)) {
            case '0':
                cellStyle.tb = WrapStrategy.CLIP;
                break;
            case '1':
                cellStyle.tb = WrapStrategy.OVERFLOW;
                break;
            case '2':
                cellStyle.tb = WrapStrategy.WRAP;
                break;

            default:
                break;
        }
    }
}

function replaceNewlines(input) {
    return input.replace(/\n/g, '\r');
}