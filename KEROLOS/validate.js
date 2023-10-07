function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginMessage = document.getElementById('loginMessage');

    if (username === '123' && password === '123') {
        window.location.href = 'work.html';
    } else if (username === '' || password === '') {
        loginMessage.innerText = 'Please enter both username and password.';
    } else {
        loginMessage.innerText = 'Invalid username or password. Please try again.';
    }
}