const quill = new Quill('#content', {
    theme: 'snow'
});

const content = document.getElementById('content');
if (localStorage.getItem('content') == null) {
    localStorage.setItem('content', '')
    content.innerText = 'Get started here!'
} else {
    content.innerText = localStorage.getItem('content')
}

setInterval(() => {
    localStorage.setItem('content', content.innerText)
}, 1000)