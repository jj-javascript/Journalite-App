// Things To Do
/*
- Figure out how to make the posts be differnt text boxes
- When you submit a journal entry figure out a way to make it go to the sidebar
- Maybe add a feature for lightening and darkening
- Is there a way to change the cursor to make it more journal like?
- Can I let the user organize their entries by tag?
- How do I get this to populate into my own MongoDB?


*/

var archive = document.getElementsByClassName("archive");
var trash = document.getElementsByClassName("fa-trash");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");



Array.from(archive).forEach(function (element) {
  element.addEventListener('click', function () {
    const date = this.closest('li').querySelector('.date').innerText
    window.location.href = `/profile?date=${encodeURIComponent(date)}`
  });
});


// Array.from(thumbDown).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('Journal_Entries', {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbDown': thumbDown
//       })
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });


Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[5].innerText
    // const date = this.parentNode.childNodes[3].innerText
    const entry1 = this.parentNode.childNodes[7].innerText
    fetch('/messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'msg': msg,
       'entry1': entry1,
       'date': date
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
