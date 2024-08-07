document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('notifyForm');
  const emailInput = document.getElementById('emailInput');

  if (form && emailInput) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = emailInput.value;

      db.collection('emails').add({
        email: email
      })
      .then(() => {
        alert('Email saved successfully!');
        form.reset();
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        alert('Failed to save email.');
      });
    });
  } else {
    console.error('Form or email input not found.');
  }
});
