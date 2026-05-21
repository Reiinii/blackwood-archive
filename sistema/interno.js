function checkPassword(){

    const password =
    document.getElementById(
    "passwordInput").value;

    const error =
    document.getElementById(
    "errorText");

    const system =
    document.getElementById(
    "systemBox");

    const login =
    document.getElementById(
    "loginBox");

    if(password === "2214"){

        login.style.display = "none";

        system.classList.remove("hidden");

    }

    else{

        error.style.display = "block";
    }
}