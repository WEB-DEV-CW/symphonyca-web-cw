// function for check button
function validateForm() {
  var name=document.getElementById('name').value
  var email=document.getElementById('email').value
  var subject=document.getElementById('subject').value
  var details=document.getElementById('details').value
  var check1=document.getElementById('Delivery').checked
  var check2=document.getElementById('Product Details').checked
  var check3=document.getElementById('Other Services').checked


    if (name=="" ||email=="" ||subject==""||details=="" ||  (check1==false &&check2==false&&check3==false)){
      alert("Fields must not be empty");
      return false;
    }
  }
//  function for view query
  function results(){
    var name=document.getElementById('name').value
    var email=document.getElementById('email').value
    var subject=document.getElementById('subject').value
    var details=document.getElementById('details').value
    var  result= "Name: "+name +"  "+"E-mail: "+email+"Subject: "+subject+"Details: "+details
    var theme = document.getElementsByName("theme");
    var selectedtheme;

    for(var i = 0; i < theme.length; i++) {
      if(theme[i].checked)
         selectedtheme= theme[i].value;
         document.getElementById('5').textContent = "Theme : "+selectedtheme;
         
   }

    document.getElementById("form").style.visibility="hidden";

    document.getElementById('1').textContent = "Name : "+name;
    document.getElementById('2').textContent = "E-mail :"+email;
    document.getElementById('3').textContent = "Subject : "+subject;
    document.getElementById('4').textContent = "Details : "+details;

    document.getElementById("check").style.visibility="hidden";
    document.getElementById("viewquery").style.visibility="hidden";
 }

  //  function for edit button
  function edit(){
  
    document.getElementById('form').style.visibility="visible";
    document.getElementById("check").style.visibility="visible";
    document.getElementById("viewquery").style.visibility="visible";

  }


 

