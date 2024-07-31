<template>
  <div ref="xspreadsheet" id="xspreadsheet"></div>
</template>

<script setup>
import luckyexcel from "./luckyexcel";
import { loadLink, seriesLoadScripts, fetchExcelFile } from "../util";

import { luckyToUniver } from "./lucky-to-univer";

loadLink("/univer-0.25/univer.css");

seriesLoadScripts(
  ["../univer-0.25/univer.full.umd.js", "../univer-0.25/zh-CN.js"],
  {},
  function () {
    var {
      UniverCore,
      UniverDesign,
      UniverEngineRender,
      UniverEngineFormula,
      UniverDocs,
      UniverDocsUi,
      UniverUi,
      UniverSheets,
      UniverSheetsUi,
      UniverSheetsNumfmt,
      UniverSheetsFormula,
      UniverFacade,
    } = window;

    var univer = new UniverCore.Univer({
      theme: UniverDesign.defaultTheme,
      locale: UniverCore.LocaleType.ZH_CN,
      locales: {
        [UniverCore.LocaleType.ZH_CN]: UniverUMD["zh-CN"],
      },
    });

    univer.registerPlugin(UniverEngineRender.UniverRenderEnginePlugin);
    univer.registerPlugin(UniverEngineFormula.UniverFormulaEnginePlugin);

    univer.registerPlugin(UniverUi.UniverUIPlugin, {
      header: true,
      container: "xspreadsheet",
      footer: true,
    });

    univer.registerPlugin(UniverDocs.UniverDocsPlugin, {
      hasScroll: false,
    });
    univer.registerPlugin(UniverDocsUi.UniverDocsUIPlugin);

    univer.registerPlugin(UniverSheets.UniverSheetsPlugin);
    univer.registerPlugin(UniverSheetsUi.UniverSheetsUIPlugin);
    univer.registerPlugin(UniverSheetsNumfmt.UniverSheetsNumfmtPlugin);
    univer.registerPlugin(UniverSheetsFormula.UniverSheetsFormulaPlugin);
    // univer.createUnit(UniverCore.UniverInstanceType.UNIVER_SHEET, {});

    // const univerAPI = UniverFacade.FUniver.newAPI(univer);


    luckyexcel.transformExcelToLuckyByUrl(
      "../11.xlsx",
      "11.xlsx",
      function (res) {
        const luckyJson = {
          ...res.info,
          data: res.sheets,
        };

        const univerData = luckyToUniver(luckyJson);
        univer.createUniverSheet(univerData);
      }
    );
  }
);
</script>

