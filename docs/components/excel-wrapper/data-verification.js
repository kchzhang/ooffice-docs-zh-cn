
const DataValidationType = {
    /**
     * custom formula
     */
    CUSTOM: "custom",
    LIST: "list",
    LIST_MULTIPLE: "listMultiple",
    NONE: "none",
    TEXT_LENGTH: "textLength",
    DATE: "date",
    TIME: "time",
    /**
     * integer number
     */
    WHOLE: "whole",
    /**
     * decimal number
     */
    DECIMAL: "decimal",
    CHECKBOX: "checkbox"
}

const DataValidationOperator = {
    BETWEEN: "between",
    EQUAL: "equal",
    GREATER_THAN: "greaterThan",
    GREATER_THAN_OR_EQUAL: "greaterThanOrEqual",
    LESS_THAN: "lessThan",
    LESS_THAN_OR_EQUAL: "lessThanOrEqual",
    NOT_BETWEEN: "notBetween",
    NOT_EQUAL: "notEqual"
}

export const dataValidationMap = {
    'dropdown': DataValidationType.LIST,
    'dropdown_multiple': DataValidationType.LIST_MULTIPLE,
    'checkbox': DataValidationType.CHECKBOX,
    'number': DataValidationType.WHOLE,
    'number_integer': DataValidationType.WHOLE,
    'number_decimal': DataValidationType.DECIMAL,
    // 'text_content': DataValidationType,
    'text_length': DataValidationType.TEXT_LENGTH,
    'date': DataValidationType.DATE,
    // 'validity': DataValidationType,
}

export const dataValidationOperatorMap = {
    'bw': DataValidationOperator.BETWEEN,
    'nb': DataValidationOperator.NOT_BETWEEN,
    'eq': DataValidationOperator.EQUAL,
    'ne': DataValidationOperator.NOT_EQUAL,
    'gt': DataValidationOperator.GREATER_THAN,
    'lt': DataValidationOperator.LESS_THAN,
    'gte': DataValidationOperator.GREATER_THAN_OR_EQUAL,
    'lte': DataValidationOperator.LESS_THAN_OR_EQUAL,

    'bf': DataValidationOperator.LESS_THAN,
    'nbf': DataValidationOperator.GREATER_THAN_OR_EQUAL,
    'af': DataValidationOperator.GREATER_THAN,
    'naf': DataValidationOperator.LESS_THAN_OR_EQUAL,
}
export function dataVerification(workbookData, worksheetData, luckyJson, sheet) {
    if (sheet.dataVerification) {

        const dataValidation = [];

        for (const key in sheet.dataVerification) {

            const cell = sheet.dataVerification[key];

            let originType = '';
            if (cell.type === 'dropdown' && cell.type2 === true) {
                originType = 'dropdown_multiple';
            } else {
                originType = cell.type;
            }

            const type = dataValidationMap[originType];

            if (!type) {
                continue;
            }

            const [rowIndex, columnIndex] = key.split("_");
            const row = parseInt(rowIndex);
            const column = parseInt(columnIndex);

            const validationItem = {
                uid: Tools.generateRandomId(6),
                type,
                ranges: [{
                    startRow: row,
                    endRow: row,
                    startColumn: column,
                    endColumn: column,
                }],
            };

            switch (originType) {
                case 'number':
                case 'number_integer':
                case 'number_decimal':
                case 'text_length':
                case 'date':
                    validationItem.operator = dataValidationOperatorMap['' + cell.type2 || 'eq'];

                    if (cell.type2 === 'bw' || cell.type2 === 'nb') {
                        validationItem.formula1 = '' + cell.value1;
                        validationItem.formula2 = '' + cell.value2;
                    } else {
                        validationItem.formula1 = '' + cell.value1;
                    }

                    break;

                case 'dropdown':
                case 'dropdown_multiple':
                    validationItem.formula1 = '' + cell.value1;
                    break;
            }

            validationItem.prompt = cell.hintText;

            dataValidation.push(validationItem);
        }


        return dataValidation;
    }
}