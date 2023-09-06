//function for visibility of password field
function togglePasswordVisibility() {
    //accessing elements
    var passwordField = document.getElementById("password");
    var passwordToggle = document.querySelector(".password-toggle");
    //checking field type is password
    if (passwordField.type === "password") {
      passwordField.type = "text";
      passwordToggle.style.backgroundImage = "url('images/page1/Group33536.png')";
      passwordField.classList.add("reveal");
    } else {
      passwordField.type = "password";
      passwordToggle.style.backgroundImage = "url('images/page1/Group33537.png')";
      passwordField.classList.remove("reveal");
    }
  }
  function toggleSignPasswordVisibility() {
    //accessing elements
    var passwordField = document.getElementById("s_password");
    var passwordToggle = document.querySelector("sign-password-toggle");
    //checking field type is password
    if (passwordField.type === "password") {
      passwordField.type = "text";
      passwordToggle.style.backgroundImage = "url('images/page1/Group33536.png')";
      passwordField.classList.add("reveal");
    } else {
      passwordField.type = "password";
      passwordToggle.style.backgroundImage = "url('images/page1/Group33537.png')";
      passwordField.classList.remove("reveal");
    }
  }
  
  //function for visibility of confirm password field
  function toggleCPasswordVisibility() {
    //accessing elements
    var passwordField = document.getElementById("c_password");
    var passwordToggle = document.querySelector(".cpassword-toggle");
    //checking field type is password
    if (passwordField.type === "password") {
      passwordField.type = "text";
      passwordToggle.style.backgroundImage = "url('images/page1/Group33536.png')";
      passwordField.classList.add("reveal");
    } else {
      passwordField.type = "password";
      passwordToggle.style.backgroundImage = "url('images/page1/Group33537.png')";
      passwordField.classList.remove("reveal");
    }
  }
  
  //function for toggling Add new Account and SignUp
  const addNewAc = document.getElementById("addNewAc");
  const signUpAcc = document.getElementById("SignUpAcc");
  
  // Function to show the Add New Account section
  function showAddNewAccount() {
      addNewAc.style.display = "block";
      signUpAcc.style.display = "none";
  }
  
  // Function to show the Old Account (Sign Up) section
  function showSignUpAccount() {
      addNewAc.style.display = "none";
      signUpAcc.style.display = "block";
  }
  
  // Initially, show the Add New Account section
  showAddNewAccount();
  
  // Add event listeners to your buttons or links
  const addNewAcButton = document.getElementById("NewUsr");
  const signUpAccButton = document.getElementById("ExUsr");
  
  addNewAcButton.addEventListener("click", showAddNewAccount);
  signUpAccButton.addEventListener("click", showSignUpAccount);
  
      // Add a click event listener to the button
  addNewAcButton.addEventListener("click", function() {
          // Scroll to the target element
          addNewAc.scrollIntoView({ behavior: "smooth" });
  });
  signUpAccButton.addEventListener("click", function() {
    // Scroll to the target element
    signUpAcc.scrollIntoView({ behavior: "smooth" });
  });