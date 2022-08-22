/* Adding an event listener to the buttons. */
 buyls = document.getElementsByClassName("buy1");
 for(var i=0; i<buyls.length; i++){
   buyls[i].addEventListener("click", BuyFunc, false);
 }

/* Adding an event listener to the buttons. */
 csmls = document.getElementsByClassName("con");
 for(var i=0; i<csmls.length; i++){
   csmls[i].addEventListener("click", ConsumeFunc, false);
 }

