document.addEventListener('DOMContentLoaded', function () {

  const modal = document.getElementById('contact-modal');
  const contactLink = document.getElementById('contact-link');
  const closeModal = document.getElementById('close-modal');

  contactLink.addEventListener('click', function () {
    modal.style.display = 'block';
  });


  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    modal.style.display = 'block';
  });
});


document.addEventListener('DOMContentLoaded', function () {

  const contactForm = document.getElementById('contact-form');


  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const agreement = document.getElementById('agreement').checked;


    if (name === '' || surname === '' || email === '' || !agreement) {
      document.getElementById('modal-alert').classList.remove('d-none');
      document.getElementById('modal-alert').classList.remove('d-block');
    } else {

      const formData = {
        name: name,
        surname: surname,
        email: email,
        accept: agreement
      };

      document.getElementById('contact-modal').style.display = "none";


      console.log(JSON.stringify(formData));
    }
  });
});

