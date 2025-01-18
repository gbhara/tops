// 8. Handling Promises with Async/Await
// Assignment:
// Use async/await syntax to handle API requests.
// Instructions:
// 1. Create a function that fetches data from the JSONPlaceholder API using async/await.
// 2. Log the user data to the console and handle any errors.

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