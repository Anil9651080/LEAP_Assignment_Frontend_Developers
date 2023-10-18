const copyButton = document.getElementById('copy-button');
const saveButton = document.getElementById('save-button');
const lockButton = document.getElementById('lock-button');
const codeTextarea = document.getElementById('code');

copyButton.addEventListener('click', () => {
    codeTextarea.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
});

let isLocked = false;

lockButton.addEventListener('click', () => {
    isLocked = !isLocked;
    codeTextarea.readOnly = isLocked;
    lockButton.innerText = isLocked ? 'Unlock' : 'Lock';
});




