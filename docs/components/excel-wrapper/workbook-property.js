const LocaleType  = {
    EN_US : "enUS",
    ZH_CN : "zhCN",
    RU_RU : "ruRU",
    ZH_TW : "zhTW",
    VI_VN : "viVN"
}

export function workbookProperty(workbookData, luckyJson){
    
    if (luckyJson.lang !== undefined) {
        workbookData.locale =  LocaleType.ZH_CN;
    }
}