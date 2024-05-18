let login = document.getElementById("login");
if(login != undefined){
    login.addEventListener("submit", e => {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
    
        let email_err = document.getElementById("email-err");
        let password_err = document.getElementById("password-err");
    
        email_err.innerText = "";
        password_err.innerText = "";
    
        if(email == ""){
            email_err.innerText = "Email is required!";
        }else{
            if(password == ""){
                password_err.innerText = "Password is required!";
            }else{
                if(password.length < 8){
                    password_err.innerText = "Your password length must be more than 8!";
                }else{
                    let users = JSON.parse(localStorage.getItem("users"));
    
                    let email_res = users.find(item => item.email == email);
                    let password_res = email_res.password;
    
                    if(email_res == undefined){
                        email_err.innerText = "Email is invalid!";
                    }else{
                        if(password_res != password){
                            password_err.innerText = "Password is invalid!";
                        }else{
                            sessionStorage.setItem("c_user_username", email_res.username);
                            alert("Thank you for logging in!");
                            location.href = "../page/home.html";
                        }
                    }
                }
            }
        }
    })
}