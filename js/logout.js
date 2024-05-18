

let log_out = document.getElementById("log-out-btn");
if(log_out != undefined){
  log_out.addEventListener("click", () => {
    if(window.confirm("Are you sure you want to logout? Click OK to proceed, or Cancel to stay logged in.")){
      sessionStorage.removeItem("c_user_username");
      location.href = "../landing/landing.html";
    }
  });
}