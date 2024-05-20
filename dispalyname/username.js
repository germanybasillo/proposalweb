


let c_user_username = document.getElementById("c-user-username");
if(c_user_username != undefined && sessionStorage.getItem("c_user_username") != null){
    c_user_username.innerHTML = `Welcome <b>${sessionStorage.getItem("c_user_username")}</b>`;
}