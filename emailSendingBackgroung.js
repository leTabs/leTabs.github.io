// Replace this with your own EmailJS API key
const USER_ID = 'Sf9SJ3S_xjcXMZaK0G9FP';

// Replace these with your own EmailJS service and template IDs
const SERVICE_ID = 'service_7uycg9w';
const TEMPLATE_ID = 'template_yx55kup';

const form = document.getElementById('email-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the user's input
    const name = form.name.value;
    const sub = form.sub.value;
    const email = form.mail.value;
    const message = form.message.value;

    // Send the email using EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        subject: sub,
        reply_to: email,
        message: message
    }, USER_ID)
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your email was sent successfully!');
    }, (error) => {
        console.log('FAILED...', error);
        alert('Oops! There was a problem sending your email.');
    });
});
