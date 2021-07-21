// Class Header Style
var i = 0;
var txt = 'SYMPHONYCA STORE';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


/**
 * ====================Cart Section=====================
 */


//display items on cart
function displayItems(itemName, itemPrice, itemImage){
  var itemRow = document.createElement("tr");
  var table = document.getElementsByClassName("table-class") [0];
  itemRow.classList.add("item-one");
  var itemNameList = document.getElementsByClassName("cart-item-product");

  var x;
  for(x=0; x<itemNameList.length; x++){
    if(itemNameList[x].innerText == itemName){
      alert("You have already added this item to the cart");
      return;
    }
  }

  var rowContent = 
  `<tr>
    <td>
      <div class="block"> 
        <img src="${itemImage}" alt="item" style="width:75px;" class="cart-img">
        <div class="cart-item-product">${itemName}</div>
      </div>  
    </td>
    <td>
       <div class="cart-item-price">${itemPrice}</div>
    </td>
    <td>
        <span class="cart-item-quantity">
        <input type="number" class="cart-item-quantity-list" value="1">
        </span>
        <button class="remove">REMOVE</button>
    </td>
  </tr>`

  itemRow.innerHTML = rowContent;
  table.append(itemRow);
  itemRow.getElementsByClassName("remove")[0].addEventListener("click", removeItem);
  itemRow.getElementsByClassName("cart-item-quantity-list")[0].addEventListener("change", getQuantity);

}

// Remove cart item
function removeItem(event) {
  var buttonRemove = event.target;
  buttonRemove.parentElement.parentElement.remove();
  calculateTotal();
}


// Check quantity
function getQuantity(event) {
  var checkQuantity = event.target;
  if (isNaN(checkQuantity.value) || checkQuantity.value <= 0) {
      checkQuantity.value = 1;
  }
  calculateTotal();
}


//add to cart button
function addItemsToCart(event){
  var cartButton = event.target;
  var shopItem = cartButton.parentElement;

  var itemName = shopItem.getElementsByClassName("item-Name-to-List")[0].innerText;
  var itemPrice = shopItem.getElementsByClassName("item-price-to-List")[0].innerText;
  var itemImage = shopItem.getElementsByClassName("item-Image")[0].src;

  displayItems(itemName,itemPrice,itemImage);
  calculateTotal();
}

//Calculate Total
function calculateTotal(){
  var itemRow = document.getElementsByClassName("item-one");
  var total = 0;
  for(var i=0; i<itemRow.length; i++){
    var itemPrice = document.getElementsByClassName("cart-item-price")[i];
    var itemQuantity  = document.getElementsByClassName("cart-item-quantity-list")[i];
    var finalPrice = parseFloat(itemPrice.innerText.replace("Rs", ""));
    var finalQuantity = itemQuantity.value;

    total = total + (finalPrice * finalQuantity);
     
  }

  document.getElementsByClassName("total-price")[0].innerText = 'Rs ' + total + '.00';
}

typeWriter();

// Set function to all the addToCart Buttons
var addToCartBtns = document.getElementsByClassName("addToCart");
var j;
for(j=0; j< addToCartBtns.length; j++){
  var addToCartBtn = addToCartBtns[j];
  addToCartBtn.addEventListener("click", addItemsToCart);
}

// getting all element changing the quantity 
var quantityCheck = document.getElementsByClassName("cart-item-quantity-list");
var k;
for (k = 0; k < quantityCheck.length; k++) {
    var checkQuantity = quantityCheck[k];
    checkQuantity.addEventListener('change', getQuantity);
}


// get all classes use remove 
var removeToCartButton = document.getElementsByClassName("remove");
var l;
for (l = 0; l < removeToCartButton.length; l++) {
    var button = removeToCartButton[l];
    button.addEventListener('click', removeItem);
}




/**
 *  ================= Form Submitting ====================
 */

function formValidation(){
  var userName = document.forms["form1"]["userName"].value;
  var userMail = document.forms["form1"]["userMail"].value;
  var userAddress = document.forms["form1"]["userAddress"].value;
  var userCountry = document.forms["form1"]["userCountry"].value;
  var items = document.getElementsByClassName("item-one");
  var totalPrice = document.getElementById("total-price").innerText;

  var modal = document.getElementById("receipt");
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


  if(userName=="" || userMail=="" || userAddress=="" || userCountry==""){
    var emptyForm = `
            <div class = "form-empty-error">Please Fill All The Given Details . . . .</div>
            `

        document.getElementsByClassName("fullContent")[0].innerHTML = emptyForm;
  }else {
    if(items.length == 0) {
      var emptyCart = `
            <div class = "cart-empty-error">Your Cart Is Empty . . . .</div>
            `

        document.getElementsByClassName("fullContent")[0].innerHTML = emptyCart;
    }else{
      var displayMsg =
        `Name: ${userName} <br><br> Email: ${userMail} <br><br> Address: ${userAddress} , ${userCountry} <br><br>
        Total: ${totalPrice} <br><br>
        ----------------------------------------- <br> <br>
         Thank You for Visiting Symphonyca......!  <br> <br>
        -----------------------------------------<br><br>
        <button class = "order-confirm-button" onClick = "finalConfirmButton()">confirm</button>
        `

      document.getElementsByClassName("fullContent")[0].innerHTML = displayMsg;
    }
  }
}

function finalConfirmButton() {
  window.location.replace("student1_products.html");
}


