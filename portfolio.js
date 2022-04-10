let content = document.getElementById('content');

function changeBackground() {
    content.style.backgroundColor = '#F8D460';
}

content.addEventListener('mouseover', changeBackground);