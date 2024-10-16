// remember to change .ql-editor>* if you change this value
const defaultFontValue = '20px';

// thanks to https://stackoverflow.com/users/5551593/andrew in https://stackoverflow.com/questions/38623716/how-to-add-custom-font-sizes-to-quilljs-editor
const fontSizeArr = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px'];
var Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

// thanks to https://stackoverflow.com/questions/43728080/how-to-add-font-types-on-quill-js-with-toolbar-options
const fontFamilyArr = ["Sans Serif", "monospace", "Roboto Condensed", "Times New Roman", "Calibri", "Calibri Light", "Sans-Serif"];
let fonts = Quill.import("attributors/style/font");
fonts.whitelist = fontFamilyArr;
Quill.register(fonts, true);

const colorOptions = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'];

// thanks to https://stackoverflow.com/questions/42068335/quill-js-color-textbox
const modulesOptions = {
    container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': fontFamilyArr }],
        [{ 'size': fontSizeArr }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'color': colorOptions}, { 'background': colorOptions }, 'link'],
    ],
    // pretty cool custom key bindings
    // keyboard: {
    //     bindings: {
    //         tab: false,
    //         custom: {
    //             key: 13,
    //             shiftKey: true,
    //             handler: function () {  }
    //         }
    //     }
    // },
    handlers: {
        color: function (value) {
            if (value == 'custom-color') value = window.prompt('Enter Hex Color Code');
            this.quill.format('color', value);
        }
    }
};

// const formatsOptions = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'indent', 'align',
//     'link', 'image', 'background', 'color'
// ];

document.addEventListener("DOMContentLoaded", function () {
    var quill = new Quill('#content', {
        // formats: formatsOptions,
        modules: {
           toolbar: modulesOptions,
        },
        theme: 'snow'
    })
});

var template = '<p><br></p><p><strong style="font-size: 32px;">CHECK EVERYDAY:</strong></p><p><span style="font-size: 16px; font-family: &quot;Times New Roman&quot;;">🏅I will be better than ____________ (mention people you compete against! it really helps to motivate you)</span></p><p><strong style="font-size: 14px;">Remember to study in the morning</strong></p><p><br></p><p><strong style="font-size: 32px;">PRIORITIES FOR TODAY:</strong></p><ol><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span><br></li></ol><p><br></p><p><strong style="font-size: 32px;">DO LATER:</strong></p><ol><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span><br></li></ol><p><br></p><p><strong style="font-size: 32px;">TESTS COMING UP:</strong></p><ol><li data-list="ordered"><span class="ql-ui" contenteditable="false"></span><br></li></ol><p><br></p><p><strong style="font-size: 32px;">NOTES: (put any notes that help you study)</strong></p><p>Just <strong>put music</strong> and have fun studying!</p>';

window.onload = function () {
    const content = document.getElementsByClassName('ql-editor')[0];
    if (localStorage.getItem('mscontent') == null) {
        localStorage.setItem('mscontent', '')
        content.innerHTML = template
    } else {
        content.innerHTML = localStorage.getItem('mscontent')
    }

    setInterval(() => {
        localStorage.setItem('mscontent', content.innerHTML)
    }, 1000);
}

// const addToStreak = document.getElementById('addToStreak');
// const streak = document.getElementById('streak')

// if (localStorage.getItem('streak') == null) {
//     localStorage.setItem('streak', '0')
// }

// streak.innerHTML = `Streak: ${localStorage.getItem('streak')}`

// addToStreak.addEventListener('click', function () {
//     const d = new Date().toUTCString().slice(0, 16)
//     if (d == localStorage.getItem('lastUpdatedStreak')) {
//         alert('Already added to streak... Wait until tommorow.')
//         return
//     }
//     localStorage.setItem('streak', Number(localStorage.getItem('streak')) + 1)
//     localStorage.setItem('lastUpdatedStreak', d)
//     streak.innerHTML = `Streak: ${localStorage.getItem('streak')}`
// })