// 4. Error Handling
// Assignment:
// Implement error handling for your API requests.
// Instructions:
// 1. Use the Fetch API to make a request to a public API (like JSONPlaceholder).
// 2. Implement .catch() to handle any errors during the fetch operation.
// 3. Display a user-friendly message if an error occurs.
// 1. Fetch Data from a Public API
// Assignment:
// Make a GET request to a public API and display the data.
// Instructions:
// 1. Use the Fetch API to get data from the JSONPlaceholder API (e.g., /posts).
// 2. Parse the JSON response and log the title of each post to the console.
const api="https://jsonplaceholder.typicode.com/posts"
const fetchapi=async()=>{
    try{
    const response=await fetch(api)
    const data=await response.json()
    data.forEach(element => {
        console.log(element.title)
        
    });

    }
    catch(error){
        console.log("error loading data",error)
    }
}
fetchapi()
