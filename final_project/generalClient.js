const axios = require('axios');

const baseURL = 'http://localhost:5000';

async function getBooks() {
  try {
    const response = await axios.get(`${baseURL}/`);
    console.log('--- Task 10: List of Books ---');
    console.log(response.data);
  } catch (error) {
    console.error('Error getting books:', error.message);
  }
}

async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${baseURL}/isbn/${isbn}`);
    console.log(`--- Task 11: Book details for ISBN ${isbn} ---`);
    console.log(response.data);
  } catch (error) {
    console.error('Error getting book by ISBN:', error.message);
  }
}

async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${baseURL}/author/${author}`);
    console.log(`--- Task 12: Books by author "${author}" ---`);
    console.log(response.data);
  } catch (error) {
    console.error('Error getting books by author:', error.message);
  }
}

async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${baseURL}/title/${title}`);
    console.log(`--- Task 13: Books with title "${title}" ---`);
    console.log(response.data);
  } catch (error) {
    console.error('Error getting books by title:', error.message);
  }
}

// Run the functions sequentially for demonstration
async function runTasks() {
  await getBooks();
  await getBookByISBN('1'); // replace '1' with an actual ISBN from your data
  await getBooksByAuthor('Jane Austen'); // replace with an author from your data
  await getBooksByTitle('Molloy, Malone Dies, The Unnamable, the trilogy'); // replace with a title from your data
}

runTasks();
