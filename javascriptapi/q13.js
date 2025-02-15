const apiClient = {
    // GET method
    get: async function (url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("GET request successful:", data);
      } catch (error) {
        console.error("Error with GET request:", error);
      }
    },
  
    // POST method
    post: async function (url, data) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("POST request successful:", result);
      } catch (error) {
        console.error("Error with POST request:", error);
      }
    },
  
    // PUT method
    put: async function (url, data) {
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("PUT request successful:", result);
      } catch (error) {
        console.error("Error with PUT request:", error);
      }
    },
  
    // DELETE method
    delete: async function (url) {
      try {
        const response = await fetch(url, {
          method: "DELETE",
        });
        const result = await response.json();
        console.log("DELETE request successful:", result);
      } catch (error) {
        console.error("Error with DELETE request:", error);
      }
    },
  };
  
  // Testing the methods
  const testData = { title: "foo", body: "bar", userId: 1 };
  
  // Test GET
  apiClient.get("https://jsonplaceholder.typicode.com/posts/1");
  
  // Test POST
  apiClient.post("https://jsonplaceholder.typicode.com/posts", testData);
  
  // Test PUT
  apiClient.put("https://jsonplaceholder.typicode.com/posts/1", testData);
  
  // Test DELETE
  apiClient.delete("https://jsonplaceholder.typicode.com/posts/1");
  