import CryptoJS from 'crypto-js';

export const encrypt = (value) => {
    const key = CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_SECRET_KEY);
    const iv =  CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_IV);

    const encrypted = CryptoJS.AES.encrypt(value, key, {iv:iv,mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});

    return encodeURIComponent(encrypted.ciphertext.toString(CryptoJS.enc.Base64));
}

export const decrypt = (value) => {
    const key = CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_SECRET_KEY);
    const iv =  CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_IV);

    const decipher = CryptoJS.AES.decrypt(decodeURIComponent(value), key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC,
    });

    return decipher.toString(CryptoJS.enc.Utf8);
}

export const formatAndSetNumber = (e, setData, field) => {
    let value = e.target.value.replace(/[^0-9]/g, '');

    setData(prevState => ({
        ...prevState,
        [field]: value
    }));

    e.target.value = formatNumberWithComma(value);
}

export const formatNumberWithComma = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat().format(value);
}

export function cleanXssTags(str, checkEntities=0, isRemoveTags=0, curStrLen=0, isTrimBoth=1) {
    if (isTrimBoth) {
        str = str.replace(/[\t\f\v\n\r]/g, '');
    }

    if (isRemoveTags) {
        str = str.replace(/<[^>]*>/g, "");
    }

    if (curStrLen) {
        str = str.substring(0, curStrLen);
    }

    let strLen = str.length;
    let i = 0;
    while (i <= strLen) {
        let result = str.replace(/<\/?(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|i(?:frame|layer)|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*>/i, '');

        if (checkEntities) {
            let entities = ['&colon;', '&lpar;', '&rpar;', '&NewLine;', '&Tab;'];
            result = replaceArray(result, entities, '');
        }

        result = result.replace(/(\W|^)(?:javascript|jar|applescript|vbscript|vbs|wscript|jscript|behavior|mocha|livescript|view-source)\s*:(?:.*?([\\/\\;()\'">]|$))/ig, '$1$2');

        if (result === str) break;

        str = result;
        i++;
    }

    return str;
}

export function cutStr(str, len, suffix="…") {
    let arrStr = Array.from(str);
    let strLen = arrStr.length;

    if (strLen >= len) {
        let sliceStr = arrStr.slice(0, len);
        str = sliceStr.join("");

        return str + (strLen > len ? suffix : '');
    } else {
        str = arrStr.join("");
        return str;
    }
}

export const getSearchString = (stx) => {
    const stxPattern = [
        /\.\/\//g,
        /\\\*/g,
        /\.{2,}/g,
        /[/'"%=*#()|+&!$~{}[]`;:\?,^\]+/g
    ];

    const stxReplace = ['', '', '.', ''];

    stxPattern.forEach((pattern, index) => {
        stx = stx.replace(pattern, stxReplace[index]);
    });

    return stx;
}
