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
fontSelect = document.querySelector('select').addEventListener('change', changeFont)




function changeFont () {
document.querySelector('textarea').className = ' '
document.querySelector('textarea').classList.add(document.querySelector('select').value+'-regular')
}



Array.from(archive).forEach(function (element) {
  element.addEventListener('click', function () {
    var _id = this.closest('li').querySelector('.messageID').innerText;
    var entry1 = this.closest('li').querySelector('.entry1').innerText;
    var date = this.closest('li').querySelector('.date').innerText;
    var subject = this.closest('li').querySelector('.title').innerText;
    var font =  this.closest('li').querySelector('.fontSelector').innerText;
// // fetch('/messages', {
// //   method: 'put' ,
// //   headers: { 'Content-Type': 'application/json' },
// //   body: JSON.stringify({
// //        '_id': _id
// //   })
// // })
//   .then(res=> {
//     if (res.ok)
//       return res.json()
//   })
//   .then(response => {
//     console.log(response)
//   })
    console.log(date)
    document.querySelector('form .calendar').value = date
    document.querySelector('form #journal').innerText = entry1
    document.querySelector('form .subject').value = subject
    document.querySelector('form .messageID').value = _id
    document.querySelector('select').value = font
    changeFont()
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
    const date = this.closest('li').querySelector('.date').innerText
    const entry1 = this.closest('li').querySelector('.entry1').innerText
    const _id = this.closest('li').querySelector('.messageID').innerText;

    fetch('/messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
       'entry1': entry1,
       'date': date,
       '_id' : _id
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
