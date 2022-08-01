//Password Visibility 
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", toggleFunction)

function toggleFunction(){
    const passwordInput = document.getElementById("password")
    if(passwordInput.type === "password")  {
        passwordInput.type = "text"
    } else{
        passwordInput.type= "password"
    }
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
}