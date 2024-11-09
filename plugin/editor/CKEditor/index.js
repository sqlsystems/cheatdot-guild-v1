import React from 'react';
import '@ckeditor/ckeditor5-build-classic/build/translations/ko';
import { CKEditor as Editor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CustomUploadAdapterPlugin } from './Uploader';

export default function CKEditor({ onChange, name, value, placeholder }) {
    return (
        <Editor
            type=""
            name={name}
            editor={ClassicEditor}
            data={value}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
            }}
            config={{
                mediaEmbed: {
                    previewsInData: true,
                },
                language: 'ko',
                plugins: [...ClassicEditor.builtinPlugins, CustomUploadAdapterPlugin],
                ...(placeholder && { placeholder: placeholder })
            }}
        />
    );
}
