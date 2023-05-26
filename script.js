// var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

// let tableElem = document.querySelector('#table-data');
// let tbodyElem = tableElem.querySelector('tbody');
// let rowInd = tbodyElem.querySelector('tr.data-row')
// tbodyElem.replaceChildren();

// let user;
// fetch(url)
// .then(resp => resp.json())
// .then(data => {
// 	user = data;
// 	loadUser();
// })

// function showDetail() {
// 	for(let i=0; i<user.length; i++) {
// 		if(user[i].id === Number(this.querySelector('.column1').textContent)) {
// 			let infoCnt = document.querySelector('#info-content');
// 			let detailDiv = infoCnt.children;
// 			detailDiv[0].innerHTML = `<b>User selected:</b> ${user[i].firstName} ${user[i].lastName}`;
// 			detailDiv[1].querySelector('textarea').textContent = user[i].description;
// 			detailDiv[2].innerHTML = `<b>Address:</b> ${user[i].address.streetAddress}`;
// 			detailDiv[3].innerHTML = `<b>City:</b> ${user[i].address.city}`;
// 			detailDiv[4].innerHTML = `<b>State:</b> ${user[i].address.state}`;
// 			detailDiv[5].innerHTML = `<b>Zip:</b> ${user[i].address.zip}`;
// 			infoCnt.style.display = "block";
// 		}
// 	}
// 	let allRow = tbodyElem.querySelectorAll('tr');
// 	for(let i=0; i<allRow.length; i++) {
// 		allRow[i].classList.remove('active');
// 	}
// 	this.classList.add('active');
// }

// function loadUser() {
// 	for(let i=0; i<user.length; i++) {
// 		let rowIndCln = rowInd.cloneNode(true);
// 		rowIndCln.querySelector('.column1').textContent = user[i].id;
// 		rowIndCln.querySelector('.column2').textContent = user[i].firstName;
// 		rowIndCln.querySelector('.column3').textContent = user[i].lastName;
// 		rowIndCln.querySelector('.column4').textContent = user[i].email;
// 		rowIndCln.querySelector('.column5').textContent = user[i].phone;
// 		rowIndCln.addEventListener("click", showDetail);
// 		tableElem.querySelector('tbody').append(rowIndCln);
// 	}
// }

// document.querySelector('#table-section > form input').addEventListener("keyup", (e) => {
// 	let allRow = tbodyElem.querySelectorAll('tr');
// 	for(let i=0; i<allRow.length; i++) {
// 		if(allRow[i].textContent.toLowerCase().includes(e.target.value.toLowerCase())){
// 			allRow[i].style.display = "block";
// 		}
// 		else {
// 			allRow[i].style.display = "none";
// 		}
// 	}
// })
// Same URL for fetching data
var url =
 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

// Same class and ID names for elements
let tableElem = document.querySelector('#table-data');
let tbodyElem = tableElem.querySelector('tbody');
let rowInd = tbodyElem.querySelector('tr.data-row');
tbodyElem.replaceChildren();

let user;

// Fetch data from URL
fetch(url)
 .then((resp) => resp.json())
 .then((data) => {
  user = data.slice(0, 5);
  loadUser();
 });

function showDetail() {
 const selectedUserId = Number(this.querySelector('.column1').textContent);
 const selectedUser = user.find((u) => u.id === selectedUserId);

 let infoCnt = document.querySelector('#info-content');
 let detailDiv = infoCnt.children;
 detailDiv[0].innerHTML = `<b>User selected:</b> ${selectedUser.firstName} ${selectedUser.lastName}`;
 detailDiv[1].querySelector('textarea').textContent = selectedUser.description;
 detailDiv[2].innerHTML = `<b>Address:</b> ${selectedUser.address.streetAddress}`;
 detailDiv[3].innerHTML = `<b>City:</b> ${selectedUser.address.city}`;
 detailDiv[4].innerHTML = `<b>State:</b> ${selectedUser.address.state}`;
 detailDiv[5].innerHTML = `<b>Zip:</b> ${selectedUser.address.zip}`;
 infoCnt.style.display = 'block';

 let allRow = tbodyElem.querySelectorAll('tr');
 allRow.forEach((row) => row.classList.remove('active'));
 this.classList.add('active');
}

function loadUser() {
 for (let i = 0; i < user.length; i++) {
  let rowIndCln = rowInd.cloneNode(true);
  rowIndCln.querySelector('.column1').textContent = user[i].id;
  rowIndCln.querySelector('.column2').textContent = user[i].firstName;
  rowIndCln.querySelector('.column3').textContent = user[i].lastName;
  rowIndCln.querySelector('.column4').textContent = user[i].email;
  rowIndCln.querySelector('.column5').textContent = user[i].phone;
  rowIndCln.addEventListener('click', showDetail);
  tableElem.querySelector('tbody').append(rowIndCln);
 }
}

document
 .querySelector('#table-section > form input')
 .addEventListener('keyup', (e) => {
  let allRow = tbodyElem.querySelectorAll('tr');
  let searchText = e.target.value.toLowerCase();
  allRow.forEach((row) => {
   let rowText = row.textContent.toLowerCase();
   row.style.display = rowText.includes(searchText) ? 'block' : 'none';
  });
 });
