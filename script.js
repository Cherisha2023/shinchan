function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can add more complex validation here if needed

    // Display details on the next page
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    return true;
}
