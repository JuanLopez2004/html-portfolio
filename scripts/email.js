var form = document.getElementById("contactForm");
        
form.addEventListener("submit", function(e) {
e.preventDefault(); 
            
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;
            
var data = {
    name: name,
    email: email,
    subject: subject,
    message: message
    };
            
document.getElementById("status").textContent = "Sending...";
            
fetch("https://formspree.io/f/xqawvrrb", 
    {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
            })
            .then(function(response) {
                if (response.ok) 
                {
                    document.getElementById("status").textContent = "Message sent successfully!";
                    document.getElementById("status").style.color = "#4CAF50";
                    form.reset(); 
                } 
                else 
                {
                    document.getElementById("status").textContent = "Error sending message. Try again.";
                    document.getElementById("status").style.color = "#f44336";
                }
            })
            .catch(function(error) 
            {
                document.getElementById("status").textContent = "Error: " + error.message;
                document.getElementById("status").style.color = "#f44336";
            });
        });