let today = new Date().getDate();

document.querySelectorAll('td').forEach(cell => {
   cell.innerText == today ? cell.classList.add('today') : ''
})