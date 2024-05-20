




let log_out = document.getElementById("log-out-btn");
let username = sessionStorage.getItem("c_user_username");

if(log_out != undefined && username != null){
  log_out.addEventListener("click", () => {
    if(window.confirm(`Are you sure you want to logout, ${username}?`)){
      sessionStorage.removeItem("c_user_username");
      location.href = "../landing/landing.html";
    }
  });
}