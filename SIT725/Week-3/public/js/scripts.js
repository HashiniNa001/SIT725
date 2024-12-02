const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
    document.getElementById('contactForm').reset();
  });