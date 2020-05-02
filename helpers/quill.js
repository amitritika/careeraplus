export const QuillModules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block']
    ]
};

export const QuillModulesShort = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    ]
};

export const QuillFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'video',
    'code-block'
];

export const QuillFormatsShort = [ 
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote'
];