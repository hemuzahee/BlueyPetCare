document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    if (!name) {
        nameError.style.display = 'block';
        nameError.textContent = 'Name is required';
        isValid = false;
    }

    if (!email) {
        emailError.style.display = 'block';
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.style.display = 'block';
        emailError.textContent = 'Email is invalid';
        isValid = false;
    }

    if (!message) {
        messageError.style.display = 'block';
        messageError.textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        console.log('Form data:', { name, email, message });
        // Here you can handle form submission, e.g., send data to a server
        alert('Form submitted successfully!');
    }
});
