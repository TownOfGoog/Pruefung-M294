



    document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault()
   
        const email = document.getElementById("emailInput").value
        const password = document.getElementById("passwordInput").value
        const login = {email: email, password: password}

        alert(JSON.stringify(login))

        fetch(`http://127.0.0.1:3000/auth/cookie/login`, {
            method: "POST",
             credentials: "include",
            headers: {
            'Content-Type':'application/json',
            },
            body: JSON.stringify(login)
        }).then(() => checkLoggedIn())
     })
   })







   
   function checkLoggedIn() {
   
   const elementWhenLoggedIn = document.getElementById("loggedIn")
   const elementWhenNotLoggedIn = document.getElementById("notLoggedIn")
   

   




   fetch(`http://127.0.0.1:3000/auth/cookie/status`, {
            credentials: "include"
        }).then(function(response) {
            console.log(response)
            if (response.status == 200) {
            elementWhenLoggedIn.classList.remove("hidden")
            elementWhenNotLoggedIn.classList.add("hidden")
            } else {
            elementWhenLoggedIn.classList.add("hidden")
            elementWhenNotLoggedIn.classList.remove("hidden")
            }
        })
   };
   