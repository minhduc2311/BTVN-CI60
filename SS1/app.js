function confirm() {
  let userName = document.getElementById("username").value;
  let passWord = document.getElementById("password").value;

  if (userName == "") {
    alert("Input your username");
  } else if (passWord == "") {
    alert("Input your password");
  } else {
    alert("Sign in sucessfully");
  }
}
