<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <style>
        .error {
            color: red;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <h2>Sign Up Form</h2>
    <form id="signupForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <button type="submit">Submit</button>
    </form>

    <div id="errorMessages"></div>

    <script>
        // API Client
        const apiClient = {
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
        };

        // Form validation
        function validateForm(name, email) {
            let errorMessages = [];

            if (!name.trim()) {
                errorMessages.push("Name is required.");
            }
            if (!email.trim()) {
                errorMessages.push("Email is required.");
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                errorMessages.push("Email is not valid.");
            }

            return errorMessages;
        }

        // Handle form submission
        document.getElementById("signupForm").addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const errorMessages = validateForm(name, email);

            const errorMessagesDiv = document.getElementById("errorMessages");
            errorMessagesDiv.innerHTML = "";

            if (errorMessages.length > 0) {
                errorMessages.forEach((message) => {
                    const errorMessageElement = document.createElement("p");
                    errorMessageElement.classList.add("error");
                    errorMessageElement.textContent = message;
                    errorMessagesDiv.appendChild(errorMessageElement);
                });
            } else {
                // If validation passes, make the POST request
                const userData = { name, email };
                await apiClient.post("https://jsonplaceholder.typicode.com/users", userData);
            }
        });
    </script>
</body>
</html>
