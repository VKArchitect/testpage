document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded!');
});

document.querySelector('.send-message-button').addEventListener('click', () => {
    window.chrome.webview.postMessage('ButtonClicked');
});
