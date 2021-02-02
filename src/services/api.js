
const API = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';
// const API = "https://jsonplaceholder.typicode.com/";
export const  getBooks = () => {
  return fetch(`${API}`, {
     method: "get",
  headers: {
    'Content-Type': 'application/json'
    
  }
 })
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log("error: ", e));
};
