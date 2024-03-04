document.getElementById('SignupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    var username = document.getElementById('SignupUsername').value;
    var password = document.getElementById('NewPassword').value;
    var verifyPassword = document.getElementById('VerifyPassword').value;

    // Validate password fields
    if (password !== verifyPassword) {
        alert('Passwords do not match. Please try again.');
        return; // Exit the function early if passwords don't match
    }

    // Create user object
    var userData = {
        username: username,
        password: password
    };

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Optionally, redirect the user to another page
    window.location.href = 'login.html';
});