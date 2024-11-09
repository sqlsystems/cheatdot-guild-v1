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
