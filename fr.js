// const scriptURL = 'https://script.google.com/macros/s/AKfycbx0CZSJorypu1Tamh0YHWe3c2BNSL3EpeR8KF6Ko09gsj1Y3onnAuu66c_2XjhUFyaspw/exec'
//   const form = document.forms['submit-to-google-sheet']
//   const success = document.getElementById('success');

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => {
//         success.innerHTML= "feedback successfully submit" ;
//         setTimeout(function()
//         {
//           success.innerHTML="";
//         },5000)
        

//       }) 
//       .catch(error => console.error('Error!', error.message)) 
//   })







// const scriptURL = 'https://script.google.com/macros/s/AKfycbx0CZSJorypu1Tamh0YHWe3c2BNSL3EpeR8KF6Ko09gsj1Y3onnAuu66c_2XjhUFyaspw/exec'
// const form = document.forms['submit-to-google-sheet']
// const success = document.getElementById('success');

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//       success.innerHTML= "feedback successfully submit" ;
//       setTimeout(function() {
//         success.innerHTML="";
//       }, 1000)
//       form.reset(); // Reset the form after successful submission
//     })
//     .catch(error => console.error('Error!', error.message))
// })






const scriptURL = 'https://script.google.com/macros/s/AKfycbx0CZSJorypu1Tamh0YHWe3c2BNSL3EpeR8KF6Ko09gsj1Y3onnAuu66c_2XjhUFyaspw/exec';
const form = document.forms['submit-to-google-sheet'];
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Check if a rating is selected
  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  const ratingSelected = Array.from(ratingInputs).some(input => input.checked);

  if (!ratingSelected) {
    alert('Please select a rating before submitting.');
    return;
  }

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (response.ok) {
        // Display success message above the form
        success.textContent = "Feedback successfully submitted. Click OK to continue.";
        // Prompt user to acknowledge the success message
        setTimeout(() => {
          if (confirm("Feedback successfully submitted. Click OK to continue.")) {
            success.textContent = "";
            form.reset(); // Reset the form after user acknowledgment
          }
        }, 1000); // Adjusted setTimeout value to 3000 milliseconds (3 seconds)
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => console.error('Error!', error.message));
});












// const scriptURL = 'https://script.google.com/macros/s/AKfycbx0CZSJorypu1Tamh0YHWe3c2BNSL3EpeR8KF6Ko09gsj1Y3onnAuu66c_2XjhUFyaspw/exec';
// const form = document.forms['submit-to-google-sheet'];
// const success = document.getElementById('success');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   // Check if a rating is selected
//   const ratingInputs = document.querySelectorAll('input[name="rating"]');
//   const ratingSelected = Array.from(ratingInputs).some(input => input.checked);

//   if (!ratingSelected) {
//     alert('Rating is required. Please select a rating before submitting.');
//     return;
//   }

//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//       if (response.ok) {
//         success.textContent = "Feedback successfully submitted.";
//         success.style.display = "block"; // Display the success message
//         setTimeout(() => {
//           success.style.display = "none"; // Hide the success message after 3 seconds
//         }, 3000);
//         form.reset(); // Reset the form after successful submission
//       } else {
//         throw new Error('Network response was not ok.');
//       }
//     })
//     .catch(error => console.error('Error!', error.message));
// });