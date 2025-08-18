// ==UserScript==
// @name         MyJBLS
// @namespace    https://jbls.ide-soft.com
// @version      2024-04-17
// @description  tampermonkey magic script  for jetbrains, generate activation code for jetbrains plugin,use tampermonkey https://chromewebstore.google.com/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/dhdgffkkebhmkfjojejmpbldmpobfkfo to install this script
// @author       anonymous
// @match        https://plugins.jetbrains.com/
// @match        https://plugins.jetbrains.com/*
// @grant        GM_setClipboard
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        window.onurlchange
// @run-at       document-end
// @license MIT
// ==/UserScript==
(function () {
    const maxAttempts = 50;
    const retryInterval = 100;
    const backendBaseUrl = "https://jbls.ide-soft.com";
    const codes = ["YTD", "QDGO", "MF", "DG", "PS", "QA", "IIE", "YTWE", "FLS", "DLE", "RFU", "PPS", "PCWMP", "II", "TCC", "RSU", "PCC", "RC", "PCE", "FLIJ", "TBA", "DL", "SPP", "QDCLD", "SPA", "DMCLP", "PSW", "GW", "PSI", "IIU", "DMU", "PWS", "HB", "WS", "PCP", "KT", "DCCLT", "RSCLT", "WRS", "RSC", "RRD", "TC", "IIC", "QDPY", "DPK", "DC", "PDB", "DPPS", "QDPHP", "GO", "HCC", "RDCPPP", "QDJVMC", "CL", "DM", "CWML", "FLL", "RR", "QDJS", "RS", "RM", "DS", "MPS", "DPN", "US", "CLN", "DPCLT", "RSV", "MPSIIP", "DB", "QDANDC", "AC", "QDJVM", "PRB", "RD", "CWMR", "SP", "RS0", "DP", "RSF", "PGO", "QDPYC", "PPC", "PC", "EHS", "RSCHB", "FL", "QDNET", "JCD"];

    async function findElementWithRetry(cssSelector, timeout = 5000) {
        const maxAttempts = timeout / retryInterval;
        for (let attempts = 0; attempts < maxAttempts; attempts++) {
            const element = document.querySelector(cssSelector);
            if (element) {
                return element;
            }
            await new Promise((resolve) => setTimeout(resolve, retryInterval));
        }
        throw new Error(
            `Element with selector '${cssSelector}' not found after ${maxAttempts} attempts.`
        );
    }

    async function addButton() {
        ("use strict");
        GM_addStyle(`
        .jetbra-button {
            margin: 10px 0 0 10px;
        }
    `);

        const url = window.location.href;
        if (!url.startsWith("https://plugins.jetbrains.com/plugin/")) {
            return;
        }

        const pluginId = url.split("/")[4].split("-")[0];

        const pluginDetail = await fetch(
            `https://plugins.jetbrains.com/api/plugins/${pluginId}`
        ).then((r) => r.json());
        const parentElement = await findElementWithRetry(
            ".plugin-header__controls-panel > div:first-child"
        );

        if (
            parentElement.querySelector(".refill-button") ||
            !pluginDetail.purchaseInfo
        ) {
            return;
        }
        const originalButton = await findElementWithRetry(
            '.plugin-header__controls-panel  button[data-test="button"]'
        );
        const buttonClasses = originalButton.className;
        if(document.getElementsByClassName("jetbra-button").length>0){
            return;
        }
        const newButton = document.createElement("button");
        newButton.setAttribute("type", "button");
        newButton.className = `${buttonClasses} jetbra-button`;
        newButton.textContent = "Generate Code";

        originalButton.parentNode.insertBefore(
            newButton,
            originalButton.nextSibling
        );
        newButton.addEventListener("click", async () => {
            let ls = window.localStorage;
            let licenseeName = ls.getItem("licenseeName");
            if (!licenseeName) {
                licenseeName =
                    window.prompt("Please enter the licensee name:") || "SuperMan";
                ls.setItem("licenseeName", licenseeName);
            }

            if (!pluginDetail.purchaseInfo) {
                window.alert("This plugin is not a paid plugin in the market");
                return;
            }

            codes.push(pluginDetail.purchaseInfo.productCode);
            const currentDate = new Date();
            currentDate.setFullYear(currentDate.getFullYear() + 1);
            const paidUpTo = currentDate.toISOString().slice(0, 10);

            const data = {
                licenseeName,
                codes,
                paidUpTo
            };
            try {
                GM_xmlhttpRequest({
                    method: "POST",
                    url: backendBaseUrl + "/api/generateLicense",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    data: JSON.stringify(data),
                    onload: function (response) {
                        const data = JSON.parse(response.responseText);
                        if (data.error || !data.license) {
                            console.log(response.responseText);
                            window.alert(`${data.error} will jump to the oauth page,then go back try again.`);
                            setTimeout(() => {
                                window.open(backendBaseUrl + "/oauth2/authorize", "_blank");
                            }, 1000);
                            return;
                        }
                        let license = data.license;
                        GM_setClipboard(license, "text");
                        window.alert("The activation code has been copied to your clipboard");
                    },
                });
            } catch (error) {
                console.error("Error generating license:", error);
                window.alert("An error occurred while generating the license.");
            }
        });
    }
    window.onload = function() {
        addButton();
    };

    if (!window.onurlchange) {
        window.addEventListener("urlchange", () => {
            addButton();
        });
    }
})();