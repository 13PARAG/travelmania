// const stateSelect = document.getElementById('state-select');
// const searchState = document.getElementById('search-state');

// const statePages = {
//   maharashtra: 'maharashtra_info.html',
//   'rajasthan': 'rajasthan_info.html',
//   'goa': 'goa_info.html',
//   'west bengal': 'west_bengal_info.html',
//   'himachal pradesh': 'himachal_pradesh_info.html',
//   'uttar pradesh': 'uttar_pradesh_info.html',
//   'andhra pradesh': 'andhra_pradesh_info.html',
//   'kerala': 'kerala_info.html',
//   'tamil nadu': 'tamil_nadu_info.html',
//   'karnataka': 'karnataka_info.html',
//   // Add more states with their respective HTML pages
// };

// stateSelect.addEventListener('change', function() {
//   const selectedState = stateSelect.value;
//   if (selectedState) {
//     window.open(statePages[selectedState], '_blank');
//   }
// });

// searchState.addEventListener('input', function() {
//   const searchValue = searchState.value.toLowerCase();
//   Array.from(stateSelect.options).forEach(option => {
//     option.style.display = option.textContent.toLowerCase().includes(searchValue) ? 'block' : 'none';
//   });
// });

// function updateClock() {
//   const now = new Date();
//   const hours = now.getHours() % 12 || 12;
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');
//   const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

//   document.getElementById('hours').textContent = hours;
//   document.getElementById('minutes').textContent = minutes;
//   document.getElementById('seconds').textContent = seconds;
//   document.getElementById('date').textContent = now.toLocaleDateString();
//   document.getElementById('ampm').textContent = ampm;
// }

// setInterval(updateClock, 1000);

// function openTourPage() {
//   const date1 = document.getElementById("tour-date-1").value;
//   const date2 = document.getElementById("tour-date-2").value;

//   const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])$/;

//   if (!dateRegex.test(date1) || !dateRegex.test(date2)) {
//     alert("Please enter valid dates in the format 'dd/mm'.");
//     return;
//   }

//   const [day1, month1] = date1.split('/').map(Number);
//   const [day2, month2] = date2.split('/').map(Number);

//   const date1Obj = new Date(2022, month1 - 1, day1);
//   const date2Obj = new Date(2022, month2 - 1, day2);

//   const [month1, month2] = [date1Obj.getMonth() + 1, date2Obj.getMonth() + 1];

//   if (date1Obj > date2Obj) {
//     alert("The first date must be earlier than the second date.");
//     return;
//   }

//   if (
//     ((month1 >= 1 && month1 <= 3) || (month1 === 12 && month2 >= 1 && month2 <= 3)) &&
//     ((month2 >= 1 && month2 <= 3) || (month2 === 12 && month1 >= 1 && month1 <= 3))
//   ) {
//     window.open("jan_mar.html", "_blank");
//   } else if (
//     ((month1 >= 4 && month1 <= 6) || (month1 === 3 && month2 >= 4 && month2 <= 6)) &&
//     ((month2 >= 4 && month2 <= 6) || (month2 === 3 && month1 >= 4 && month1 <= 6))
//   ) {
//     window.open("apr_jun.html", "_blank");
//   } else if (
//     ((month1 >= 7 && month1 <= 9) || (month1 === 6 && month2 >= 7 && month2 <= 9)) &&
//     ((month2 >= 7 && month2 <= 9) || (month2 === 6 && month1 >= 7 && month1 <= 9))
//   ) {
//     window.open("jul_sep.html", "_blank");
//   } else if (
//     ((month1 >= 10 && month1 <= 12) || (month1 === 9 && month2 >= 10 && month2 <= 12)) &&
//     ((month2 >= 10 && month2 <= 12) || (month2 === 9 && month1 >= 10 && month1 <= 12))
//   ) {
//     window.open("oct_dec.html", "_blank");
//   } else if (
//     ((month1 >= 3 && month1 <= 4) || (month1 === 5 && month2 >= 3 && month2 <= 4)) &&
//     ((month2 >= 3 && month2 <= 4) || (month2 === 5 && month1 >= 3 && month1 <= 4))
//   ) {
//     window.open("mar_apr.html", "_blank");
//   } else if (
//     ((month1 >= 6 && month1 <= 7) || (month1 === 8 && month2 >= 6 && month2 <= 7)) &&
//     ((month2 >= 6 && month2 <= 7) || (month2 === 8 && month1 >= 6 && month1 <= 7))
//   ) {
//     window.open("jun_jul.html", "_blank");
//   } else if (
//     ((month1 >= 9 && month1 <= 10) || (month1 === 11 && month2 >= 9 && month2 <= 10)) &&
//     ((month2 >= 9 && month2 <= 10) || (month2 === 11 && month1 >= 9 && month1 <= 10))
//   ) {
//     window.open("sep_oct.html", "_blank");
//   } else if (
//     (month1 === 12 || (month1 === 1 && month2 === 12)) &&
//     (month2 === 12 || (month2 === 1 && month1 === 12))
//   ) {
//     window.open("dec_jan.html", "_blank");
//   } else {
//     alert("Please select dates within the specified ranges.");
//   }
// }






























const stateSelect = document.getElementById('state-select');
const searchState = document.getElementById('search-state');

const statePages = {
  'maharashtra': 'maharashtra_info.html',
  'rajasthan': 'rajasthan_info.html',
  'goa': 'goa_info.html',
  'west bengal': 'west_bengal_info.html',
  'himachal pradesh': 'himachal_pradesh_info.html',
  //'uttar pradesh': 'uttar_pradesh_info.html',
 // 'andhra pradesh': 'andhra_pradesh_info.html',
  'kerala': 'kerala_info.html',
  //'tamil nadu': 'tamil_nadu_info.html',
  //'karnataka': 'karnataka_info.html',
  // Add more states with their respective HTML pages
};

stateSelect.addEventListener('change', function() {
  const selectedState = stateSelect.value;
  if (selectedState) {
    window.open(statePages[selectedState], '_blank');
  }
});

searchState.addEventListener('input', function() {
  const searchValue = searchState.value.toLowerCase();
  Array.from(stateSelect.options).forEach(option => {
    option.style.display = option.textContent.toLowerCase().includes(searchValue) ? 'block' : 'none';
  });
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('date').textContent = now.toLocaleDateString();
  document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);

function openTourPage() {
  const date1 = document.getElementById("tour-date-1").value;
  const date2 = document.getElementById("tour-date-2").value;

  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])$/;

  if (!dateRegex.test(date1) || !dateRegex.test(date2)) {
    alert("Please enter valid dates in the format 'dd/mm'.");
    return;
  }

  const [day1, month1Value] = date1.split('/').map(Number);
  const [day2, month2Value] = date2.split('/').map(Number);

  const date1Obj = new Date(2022, month1Value - 1, day1);
  const date2Obj = new Date(2022, month2Value - 1, day2);

  const [month1, month2] = [date1Obj.getMonth() + 1, date2Obj.getMonth() + 1];

  if (date1Obj > date2Obj) {
    alert("The first date must be earlier than the second date.");
    return;
  }

  if (
    ((month1 >= 1 && month1 <= 3) || (month1 === 12 && month2 >= 1 && month2 <= 3)) &&
    ((month2 >= 1 && month2 <= 3) || (month2 === 12 && month1 >= 1 && month1 <= 3))
  ) {
    window.open("jan_mar.html", "_blank");
  } else if (
    ((month1 >= 4 && month1 <= 6) || (month1 === 3 && month2 >= 4 && month2 <= 6)) &&
    ((month2 >= 4 && month2 <= 6) || (month2 === 3 && month1 >= 4 && month1 <= 6))
  ) {
    window.open("apr_jun.html", "_blank");
  } else if (
    ((month1 >= 7 && month1 <= 9) || (month1 === 6 && month2 >= 7 && month2 <= 9)) &&
    ((month2 >= 7 && month2 <= 9) || (month2 === 6 && month1 >= 7 && month1 <= 9))
  ) {
    window.open("jul_sep.html", "_blank");
  } else if (
    ((month1 >= 10 && month1 <= 12) || (month1 === 9 && month2 >= 10 && month2 <= 12)) &&
    ((month2 >= 10 && month2 <= 12) || (month2 === 9 && month1 >= 10 && month1 <= 12))
  ) {
    window.open("oct_dec.html", "_blank");
  } else if (
    ((month1 >= 3 && month1 <= 4) || (month1 === 5 && month2 >= 3 && month2 <= 4)) &&
    ((month2 >= 3 && month2 <= 4) || (month2 === 5 && month1 >= 3 && month1 <= 4))
  ) {
    window.open("mar_apr.html", "_blank");
  } else if (
    ((month1 >= 6 && month1 <= 7) || (month1 === 8 && month2 >= 6 && month2 <= 7)) &&
    ((month2 >= 6 && month2 <= 7) || (month2 === 8 && month1 >= 6 && month1 <= 7))
  ) {
    window.open("jun_jul.html", "_blank");
  } else if (
    ((month1 >= 9 && month1 <= 10) || (month1 === 11 && month2 >= 9 && month2 <= 10)) &&
    ((month2 >= 9 && month2 <= 10) || (month2 === 11 && month1 >= 9 && month1 <= 10))
  ) {
    window.open("sep_oct.html", "_blank");
  } else if (
    (month1 === 12 || (month1 === 1 && month2 === 12)) &&
    (month2 === 12 || (month2 === 1 && month1 === 12))
  ) {
    window.open("dec_jan.html", "_blank");
  } else {
    alert("Please select dates within the specified ranges.");
  }
}