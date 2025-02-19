document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    const userResponse = confirm("Do you want to allow access to your phone?");
    
    if (userResponse) {
        window.location.href = "access.html"; // Redirect to the warning page
    } else {
        alert("Access denied.");
    }
});
