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

const addNewList = [];
const postForm = document.querySelector(`.post-form`);
const bookTitle = document.querySelector(`#title`);
const bookAuthor = document.querySelector(`#author`);
const bookGenre = document.querySelector(`#genre-select`);
const bookPages = document.querySelector(`#pages`);
const bookStatus = document.querySelector(`#staus-select`);

const table = document.getElementsByTagName(`table`);
const tableHead = document.getElementsByTagName(`thead`);
const tableBody = document.querySelector(`.table-body`);
const tableRow = document.querySelector(`tr`);
const addButton = document.querySelector(`.add`);


const loadBookList = () => {
   let filteredBooks = [...books];
   const html = filteredBooks
   .map(book => {
	   return `
	   <tr>
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
	   .join(``);

	   tableBody.innerHTML = html;

 
	   addButton.addEventListener(`click`, ($event) => {
		$event.preventDefault();
		const newRowHTML = 
		`
		<tr>
			<td>${bookTitle.value}</td>
			<td>${bookAuthor.value}</td>
			<td>${bookGenre.value}</td>
			<td>${bookPages.value}</td>
			<td>
			<input type="checkbox">
			</td>
			<td>
			<button class="delete"><img src="https://bit.ly/3asZXGT" alt="delete icon"><span>Delete</span></button>
			</td>
		</tr>`;

	
	tableBody.insertAdjacentHTML('beforeend', newRowHTML);
	
});  
  
 
}
loadBookList();

// Event listeners
// addButton.addEventListener(`click`, handleListClick);

