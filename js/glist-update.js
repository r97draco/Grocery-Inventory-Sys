/**
 * The function takes an event as an argument, and then uses the event to get the current target, which
 * is the button that was clicked. Then it uses the current target to get the previous sibling, which
 * is the quantity. Then it increments the quantity. Then it checks to see if the quantity is greater
 * than 0, and if it is, it displays the consume button
 * event - The event object is a JavaScript object that contains useful information about an
 * event.
 */
function BuyFunc(event) {
  var btn = event.currentTarget;
  var qty = event.currentTarget.previousSibling.innerHTML;

  console.log(qty);
  console.log(btn);

  ++event.currentTarget.previousSibling.innerHTML;

  if (event.currentTarget.previousSibling.innerHTML > 0) {
    event.currentTarget.nextSibling.style.display = "inline";
  }
}

/**
 * If the quantity is greater than 0, subtract 1 from the quantity and hide the button if the quantity
 * is 0
 *  event - The event object is a JavaScript object that contains useful information about the
 * event that just happened.
 */

function ConsumeFunc(event) {
  var btn = event.currentTarget;
  var qty = event.currentTarget.previousSibling.previousSibling.innerHTML;
  console.log(btn);
  console.log(qty);

  if (qty < 1) {
    btn.style.display = "none";
  } else {
    --event.currentTarget.previousSibling.previousSibling.innerHTML;
  }

  var qty = event.currentTarget.previousSibling.previousSibling.innerHTML;
  if (qty < 1) {
    btn.style.display = "none";
  }
}
