// function authenticate(){
//     var authorised;
    
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
    
//     if(username == "ayush" && password == "ayush"){
//       authorised = true;
//     }else{ 
//       authorised = false;
//     }

//     return authorised;
//   }

//   function check(){
//     if(authenticate()==true){
//       // window.location="main.html"
      
//     }else{
//       alert("Sorry, password is incorrect.");
//     }
//   }

function authenticate(){
  var authorised;
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if(username == "ayush" && password == "ayush"){
    authorised = true;
  }else{ 
    authorised = false;
  }
  // alert(authorised);
  // eel.check(authorised);
  return authorised
}

function check(result){
  result=true;
  if(result==true && authenticate()==true){
    window.location="first_page.html"
  }else{
    alert("Sorry, password is incorrect.");
  }
}