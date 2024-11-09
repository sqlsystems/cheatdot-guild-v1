import axios from 'axios';

class Uploader {
    constructor(loader) {
        this.loader = loader;
    }

    getDateTime() {
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

        return String(10000 * year + 100 * month + day +
            ('0' + hours).slice(-2) + ('0' + minutes).slice(-2) + ('0' + seconds).slice(-2));
    }

    makeFilename(type) {
        var chars = "abcdefghiklmnopqrstuvwxyz",
            len = 8, clen = chars.length, rData = '', i, rnum;

        for (i = 0; i < len; i++) {
            rnum = Math.floor(Math.random() * clen);
            rData += chars.substring(rnum, rnum + 1);
        }

        if (type !== '') {
            rData += type.toLowerCase();
        }

        return this.getDateTime() + '_' + rData;
    }

    async upload() {
        const file = await this.loader.file;
        const formData = new FormData();

        const fileFormat = file.name.substring(file.name.lastIndexOf('.'));
        const randomName = this.makeFilename(fileFormat);

        formData.append('origname', file.name);
        formData.append('file', file, randomName);

        return axios.post('/v4/board/image_upload/upload.php', formData)
            .then(res => {
                if (res.data.url) {
                    return { default: res.data.url };
                }
                return Promise.reject(res.error);
            });
    }

    abort() {
    }
}

export function CustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new Uploader(loader);
    };
}
