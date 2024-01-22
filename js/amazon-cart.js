let cartQuantity = 0; 

function addtocart() {
  if(cartQuantity===10){
    alert("the cart is full");
   }else{
    cartQuantity ++ ;
   }


  
    
    document.getElementById('cartQuantity').innerText = cartQuantity;

   
  }
        
      
function removefromcart() {

if(cartQuantity > 0){
  cartQuantity -- ;
  document.getElementById('cartQuantity').innerText= cartQuantity;
}else{
  alert("Cart is already empty!")
}

}
let wishList = 0 ;
function addWishList(){
  wishList ++;
  alert("New Item Added to Favourite")
}


//searchbar functionality

/* function searchItem() {
  var input, filter, div, p, item, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  div = document.getElementById('itemList');
  p = div.getElementsByTagName('h3');

  for (i = 0; i < p.length; i++) {
    item = p[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      p[i].style.display = '';
    } else {
      p[i].style.display = 'none';
    }
  }
} */
