// const scriptURL = 'https://script.google.com/macros/s/AKfycbwuDJsEza0ZyvdAJ08M4YfNj_gZ-NcLCssBX-Gc6ny_ndEfWlMqSCt5dsjoZssvB0SC/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })



const scriptURL = 'https://script.google.com/macros/s/AKfycbwuDJsEza0ZyvdAJ08M4YfNj_gZ-NcLCssBX-Gc6ny_ndEfWlMqSCt5dsjoZssvB0SC/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (response.ok) {
        alert('Submitted successfully!');
        form.reset();
        setTimeout(() => 
          // Reset the form after 2 seconds
          
         2000);
      } else {
        alert('An error occurred. Please try again.');
      }
    })
    .catch(error => console.error('Error!', error.message));
});

