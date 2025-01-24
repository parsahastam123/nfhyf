function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add('active');
}

function openPopup(category) {
    document.getElementById('popup-title').innerText = category;
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

function uploadFile() {
    const password = document.getElementById('upload-password').value;
    if (password !== '1289') {
        alert('کد دسترسی اشتباه است!');
        return;
    }

    const fileInput = document.getElementById('upload-file');
    const filesDiv = document.getElementById('uploaded-files');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileLink = document.createElement('a');
        fileLink.href = URL.createObjectURL(file);
        fileLink.innerText = file.name;
        fileLink.download = file.name;
        filesDiv.appendChild(fileLink);

        alert('فایل با موفقیت آپلود شد!');
    }
}

document.getElementById('loginForm') ? .addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ورود موفقیت‌آمیز بود!');
});