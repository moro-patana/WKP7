// Create an array object
const books = [
	{
		title: 'The fault in our star',
		author: `John green`,
		genre: 'romance',
		pages: 1800,
		read: true,
	},
	{
		title: 'Little women',
		author: `Jonh Green`,
		genre: 'Girls',
		pages: 900,
		read: true,
	},
	{
		title: 'Twilight',
		author: `JR`,
		genre: 'Romance',
		pages: 2000,
		read: false,
    },
]; 
console.log(books);


// Grab elements
const postForm = document.querySelector(`.post-form`);
const bookTitle = document.querySelector(`#title`);
const bookAuthor = document.querySelector(`#author`);
const bookGenre = document.querySelector(`#genre-select`);
const bookPages = document.querySelector(`#pages`);
const bookStatus = document.querySelector(`#status-select`);

const table = document.getElementsByTagName(`table`);
const tableHead = document.getElementsByTagName(`thead`);
const tableBody = document.querySelector(`.table-body`);
const tableRow = document.querySelector(`.list`);
const addButton = document.querySelector(`.add`);

//Make a copy of books oject
   let filteredBooks = [...books];

// Map the copy of books object and create an html
   const html = filteredBooks
   .map(book => {
	   return `
	   <tr class="list">
		 <td>${book.title}</td>
		 <td>${book.author}</td>
		 <td>${book.genre}</td>
		 <td>${book.pages}</td>
		 <td>
		 <input type="checkbox">
		 </td>
		 <td>
		   <button class="delete"><img src="https://bit.ly/3asZXGT" alt="delete icon"><span>Delete</span></button>
		 </td>
	   </tr>
   `;
})
// Join them 
	   .join(``);

	   tableBody.innerHTML = html;

const handleCheck = e => {
	const inputCheckbox = document.querySelector(input[type="checkbox"]);
	if (inputCheckbox.checked) {
		book.read = true;
	}
}
// Listen to the add button
 
addButton.addEventListener(`click`, ($event) => {
		$event.preventDefault();
// Create new table row
		const newRowHTML = 
		`
		<tr class="list">
			<td>${bookTitle.value}</td>
			<td>${bookAuthor.value}</td>
			<td>${bookGenre.value}</td>
			<td>${bookPages.value}</td>
			<td>
			<input type="checkbox">
			</td>
			<td>
			<button value="title" class="delete"><img src="https://bit.ly/3asZXGT" alt="delete icon"><span>Delete</span></button>
			</td>
		</tr>`;

// Insert it into the table body
	tableBody.insertAdjacentHTML('beforeend', newRowHTML);
	
});  


// Remove list
 const deleteList = list => {
	 list.remove();
 }
 const handleBtnClick = event => {
	if (event.target.matches(`button.delete`)) {
	  const list = event.target.closest(`.list`);
	  deleteList(list);
  
  }
  };
   




