<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

  (function() {
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
  })();

  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('status');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      phone: form.phone.value,
      message: form.message.value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
      .then(function(response) {
        statusDiv.innerText = 'Message sent successfully!';
        form.reset();
      }, function(error) {
        statusDiv.innerText = 'Failed to send message. Please try again.';
        console.error(error);
      });
  });

