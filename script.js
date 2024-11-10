// Function to handle signup
async function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    try {
        const response = await fetch('https://<your-backend-id>.replit.app/signup', {  // Use your Replit backend URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            document.getElementById('signupMessage').textContent = data.message;
            document.getElementById('loginError').textContent = '';
        } else {
            document.getElementById('signupMessage').textContent = '';
            document.getElementById('loginError').textContent = data.message;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle login
async function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('https://<your-backend-id>.replit.app/login', {  // Use your Replit backend URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            document.getElementById('loginError').textContent = '';
            alert(data.message);  // Login successful
            // Redirect to dashboard or another page
            window.location.href = '/dashboard';  // Update URL accordingly
        } else {
            document.getElementById('loginError').textContent = data.message;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
