import { workbookProperty } from './workbook-property';
import { worksheetProperty } from './worksheet-property';
import { worksheetConfig } from './worksheet-config';
import { cellData } from './cell';

export function luckyToUniver(luckyJson = {}) {
    const workbookData = {};
    workbookData.styles = {};

    workbookProperty(workbookData, luckyJson);

    const sheets = luckyJson.data;
    const dataValidationData = {};

    if (Array.isArray(sheets)) {
        workbookData.sheets = {};
        for (let sheet of sheets) {
            const worksheetData = {};

            const { worksheetDataVerification } = worksheetProperty(workbookData, worksheetData, luckyJson, sheet);

            if (worksheetDataVerification && worksheetDataVerification.length > 0) {
                dataValidationData[worksheetData.id] = worksheetDataVerification;
            }

            worksheetConfig(workbookData, worksheetData, luckyJson, sheet);
            cellData(workbookData, worksheetData, luckyJson, sheet);

            workbookData.sheets[worksheetData.id] = worksheetData;
        }
    }

    workbookData.resources = [
        {
            name: 'SHEET_DATA_VALIDATION_PLUGIN',
            data: JSON.stringify(dataValidationData)
        }
    ]

    return workbookData
}