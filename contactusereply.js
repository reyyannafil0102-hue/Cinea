document.addEventListener('DOMContentLoaded', function () {

  emailjs.init('QnDc7cJMFhCBZyRad');

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    emailjs.sendForm('service_qlwpckb', 'template_f5efwct', this)
      .then(() => {
        alert('Pesan terkirim! Terima kasih.');
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Gagal mengirim. Coba lagi.');
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      });
  });

});
