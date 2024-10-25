const correctPassword = "sharon";

function checkPassword() {
    const userInput = document.getElementById('passwordInput').value;
    const content = document.getElementById('content');
    
    if (userInput === correctPassword) {
        content.classList.remove('blurred');
        content.classList.add('unblurred');
    } else {
        alert('Incorrect password, try again');
    }
}