// ==UserScript==
// @name         JetBra
// @namespace    novice88
// @version      5.0
// @license MIT
// @description  Add a button on the plugin homepage and click to get the plugin activation code
// @author       novice.li
// @match        https://plugins.jetbrains.com/*
// @grant        GM_setClipboard
// @grant        GM_addStyle
// @grant        window.onurlchange
// ==/UserScript==

const pemEncodedKey = `-----BEGIN PRIVATE KEY-----
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
17M9lCizO9o9dONdHsHfNQi6y9Jcnw==
-----END PRIVATE KEY-----`;


const pemEncodedCrt = `-----BEGIN CERTIFICATE-----
MIIEtTCCAp2gAwIBAgIUDyuccmylba71lZQAQic5TJiAhwwwDQYJKoZIhvcNAQEL
BQAwGDEWMBQGA1UEAwwNSmV0UHJvZmlsZSBDQTAeFw0yMzA5MjkxNDA2MTJaFw0z
MzA5MjcxNDA2MTJaMBExDzANBgNVBAMMBk5vdmljZTCCAiIwDQYJKoZIhvcNAQEB
BQADggIPADCCAgoCggIBALenqcGP2ZxGkYqmKA9c4Hzf8+YD1smvmOxKjd+bmTLr
utM/hXv1cj1rW3/lqyDtdDk7K6W8/TDq1CRrEt+Do6l30DxhAiC34aH8DmGwgq77
xEoLimvH5LpePxflF+tbB1RZtFgFDOIYLdSQaKFH2JDgVKxhLiV3S6jniPhkCtWW
rTs+E6vq4N15Bm3NnM5AJILqjtUbOjNfaxVq6RrOoTc0R3Fqqo6yvxo/+JYa2UnH
IC+r2dbKuDLMUrtgnydEUdJNX0zH9FtcdELvr48uc9mY038TWUsZUK1pnQbxA2bP
yA4qnYJ9IvUgO6LtLXvGFm137YQMS1N41AHDBOrwoNI8UoDX+qI3rM96biFOFvn7
Edky7rByzybt3H+zxdojfjvpL1E0NO98BT9zfufHAaAxZtlmDOu5LDJe3CGurnyR
MRExbtc+Qjl1mUh6tG4lakAwdsoxry0GdG72yaYyb9it53kaFks/T/s7Z7bRJzVF
zQDV1Y4bzUtk43vKm2vztBVlQkBkZY5f2Jbe5Ig3b8swQzBnOT0mrL5SPUhwmQ6I
xkEWztj55OEujBMmRr92oESuq9ZYMaeLidKWVR3/++HA8BRZaRGEKtSHZCbFEFdi
hDxxJv9Xh6NuT/ewJ6HYp+0NQpFnUnJ72n8wV+tudpam7aKcdzVmz7cNwOhG2Ls7
AgMBAAEwDQYJKoZIhvcNAQELBQADggIBAIdeaQfKni7tXtcywC3zJvGzaaj242pS
WB1y40HW8jub0uHjTLsBPX27iA/5rb+rNXtUWX/f2K+DU4IgaIiiHhkDrMsw7piv
azqwA9h7/uA0A5nepmTYf/HY4W6P2stbeqInNsFRZXS7Jg4Q5LgEtHKo/H8USjtV
w9apmE3BCElkXRuelXMsSllpR/JEVv/8NPLmnHSY02q4KMVW2ozXtaAxSYQmZswy
P1YnBcnRukoI4igobpcKQXwGoQCIUlec8LbFXYM9V2eNCwgABqd4r67m7QJq31Y/
1TJysQdMH+hoPFy9rqNCxSq3ptpuzcYAk6qVf58PrrYH/6bHwiYPAayvvdzNPOhM
9OCwomfcazhK3y7HyS8aBLntTQYFf7vYzZxPMDybYTvJM+ClCNnVD7Q9fttIJ6eM
XFsXb8YK1uGNjQW8Y4WHk1MCHuD9ZumWu/CtAhBn6tllTQWwNMaPOQvKf1kr1Kt5
etrONY+B6O+Oi75SZbDuGz7PIF9nMPy4WB/8XgKdVFtKJ7/zLIPHgY8IKgbx/VTz
6uBhYo8wOf3xzzweMnn06UcfV3JGNvtMuV4vlkZNNxXeifsgzHugCvJX0nybhfBh
fIqVyfK6t0eKJqrvp54XFEtJGR+lf3pBfTdcOI6QFEPKGZKoQz8Ck+BC/WBDtbjc
/uYKczZ8DKZu
-----END CERTIFICATE-----`;

function injectStyles() {
    GM_addStyle(`
        .jetbra-button {
            background-color: #04AA6D; border: none; color: white; padding: 8px 24px;
            text-align: center; text-decoration: none; display: inline-block;
            border-radius: 16px; box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
            transition-duration: 0.4s;
            margin-left:5px
        }
        .jetbra-button:hover { background-color: #057e47; color: white; }
    `);
}


async function findElementWithRetry(cssSelector) {
    const maxAttempts = 50;
    for (let attempts = 0; attempts < maxAttempts; attempts++) {
        const element = document.querySelector(cssSelector);
        if (element) {
            return element;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error(`Element with selector '${cssSelector}' not found after ${maxAttempts} attempts.`);
}

function pem2base64(pem) {
    return pem.split('\n').reduce((base64, line) => line.includes("--") ? base64 : base64 + line, '');
}

function arrayBufferToBase64(buffer) {
    return btoa([...new Uint8Array(buffer)].map(b => String.fromCharCode(b)).join(''));
}

function base64ToArrayBuffer(base64) {
    return Uint8Array.from(atob(base64), c => c.charCodeAt(0)).buffer;
}

function genLicenseId() {
    const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({length: 10}, () => {
        let idx = Math.floor(Math.random() * CHARSET.length);
        return CHARSET[idx];
    }).join('');
}

function buildLicensePartJson(productCode, licenseId, twoYears) {
    let formattedDateTwoYears = '2099-08-01';
    if (twoYears) {
        let futureDateTwoYears = new Date();
        futureDateTwoYears.setFullYear(futureDateTwoYears.getFullYear() + 2);
        formattedDateTwoYears = futureDateTwoYears.toISOString().split('T')[0];
    }

    let fallbackDate = formattedDateTwoYears;
    let paidUpTo = formattedDateTwoYears;

    return JSON.stringify({
        "licenseId": licenseId,
        "licenseeName": "reborn",
        "assigneeName": "reborn",
        "assigneeEmail": "",
        "licenseRestriction": "",
        "checkConcurrentUse": false,
        "products": [{
            code: productCode,
            fallbackDate: fallbackDate,
            paidUpTo: paidUpTo
        }],
        "metadata": "0120230102PPAA013009",
        "hash": "41472961/0:1563609451",
        "gracePeriodDays": 7,
        "autoProlongated": true,
        "isAutoProlongated": true
    });
}

async function addButton() {
    injectStyles();

    let url = window.location.href
    if (!url.startsWith('https://plugins.jetbrains.com/plugin/')) {
        return;
    }

    let pluginId = url.split('/')[4].split('-')[0]
    console.log('pluginId: ' + pluginId);

    let pluginDetail = await fetch('https://plugins.jetbrains.com/api/plugins/' + pluginId).then(r => r.json());

    const parentElement = await findElementWithRetry('.plugin-header__controls-panel > div:first-child');

    if (parentElement.querySelector('.jetbra-button')) {
        return;
    }
    let newElement = document.createElement('div');
    newElement.classList.toggle('wt-col-inline');
    newElement.innerHTML =
        `<div class="customize-btn" style="display: flex; flex-direction: column;white-space: nowrap;">
            <div class="generate-plugin-code" style="display: flex;height: 40px;">
                <button class="jetbra-button" type="button" id="permanentLicense">Generate Code</button>
            </div>
        </div>`;

    parentElement.appendChild(newElement)

    newElement.addEventListener('click', async (e) => {
        let productCode = pluginDetail?.purchaseInfo?.productCode;
        if (productCode === undefined) {
            window.alert('该插件不是市场付费插件！');
            return;
        }
        let licenseId = genLicenseId()
        let licensePartJson = buildLicensePartJson(productCode, licenseId, e.target.id === "twoYearsLicense")

        let privateKey = await window.crypto.subtle.importKey("pkcs8", base64ToArrayBuffer(pem2base64(pemEncodedKey)), {
            name: "RSASSA-PKCS1-v1_5", hash: "SHA-1",
        }, true, ["sign"]);

        let licensePartBase64 = btoa(unescape(encodeURIComponent(licensePartJson)));
        let sigResultsBase64 = arrayBufferToBase64(await window.crypto.subtle.sign("RSASSA-PKCS1-v1_5", privateKey, new TextEncoder().encode(licensePartJson)));
        let cert_base64 = pem2base64(pemEncodedCrt);

        GM_setClipboard(`${licenseId}-${licensePartBase64}-${sigResultsBase64}-${cert_base64}`, 'text');
        window.alert('激活码已经拷贝到你的剪切板！');
    })
}

addButton();
if (window.onurlchange === null) {
    window.addEventListener('urlchange', (ignore) => {
        addButton();
    });
}