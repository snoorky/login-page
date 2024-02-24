const loginForm = document.getElementById('login');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        if (!validationEmail(email)) {
            document.getElementById('email').classList.add('error');
            document.getElementById('errorEmail').style.display = 'block';
        } else {
            document.getElementById('email').classList.remove('error');
            document.getElementById('errorEmail').style.display = 'none';
        }
    
        if (!validationPassword(password)) {
            document.getElementById('password').classList.add('error');
            document.getElementById('errorPassword').style.display = 'block';
        } else {
            document.getElementById('password').classList.remove('error');
            document.getElementById('errorPassword').style.display = 'none';
        }
    
        if (email === "admin@admin.com" && password === "admin") {
            document.querySelector('.acceptBox').style.display = 'flex';
            document.querySelector('.errorBox').style.display = 'none';
            document.querySelector('.validation').style.bottom = '20px';
    
            setTimeout(function() {
                document.querySelector('.validation').style.bottom = '-100px';
            }, 3000);
        } else {
            document.querySelector('.acceptBox').style.display = 'none';
            document.querySelector('.errorBox').style.display = 'flex';
            document.querySelector('.validation').style.bottom = '20px';
    
            setTimeout(function() {
                document.querySelector('.validation').style.bottom = '-100px';
            }, 3000);
        }
    });
}

function validationEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validationPassword(password) {
    return password.length >= 4 && password.length <= 60;
}