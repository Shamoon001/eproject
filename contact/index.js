document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    const formData = {
        username: username,
        email: email,
        feedback: feedback
    };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    document.getElementById('message').textContent = 'Form submitted successfully!';
    document.getElementById('contactForm').reset();
});
document.querySelector('.blog-btn').addEventListener('click', function() {
    window.location.href = "https://yourbloglink.com";  
});