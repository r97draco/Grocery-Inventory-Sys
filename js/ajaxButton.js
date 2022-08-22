/**
 * It sends a GET request to buy.php with the parameters gid and qty.
 * !param ev - the id of the button that was clicked
 * !param qty - 1
 */
function ajaxRqBuy(ev, qty) {
  var gid = ev;
  var qty = qty;
  console.log("gid:", gid, "qty:", qty);

  var x = new XMLHttpRequest();

  x.addEventListener("readystatechange", receive_ajax_response, false);

  x.open("GET", "buy.php?gid=" + gid + "&qty=" + qty, true);
  x.send();
  console.log("buy rq sent");
}

/**
 * It sends a GET request to consume.php with the parameters gid and qty.
 * !param ev - the id of the item being consumed
 * !param qty - the quantity of the item to be consumed
 */
function ajaxRqCon(ev, qty) {
  var gid = ev;
  var qty = qty;
  console.log("gid:", gid, "qty:", qty);

  var x = new XMLHttpRequest();

  x.addEventListener("readystatechange", receive_ajax_response, false);

  x.open("GET", "consume.php?gid=" + gid + "&qty=" + qty, true);
  x.send();
  console.log("consume rq sent");
}

/**
 * When the user clicks the delete button, the function ajaxRqDel() is called, which sends a request to
 * the server to delete the item from the database.
 * !param ev - the id of the button that was clicked
 * !param qty - the quantity of the item to be deleted
 */
function ajaxRqDel(ev, qty) {
  var gid = ev;
  var qty = qty;
  console.log("gid:", gid, "qty:", qty);

  var x = new XMLHttpRequest();

  x.addEventListener("readystatechange", receive_ajax_response, false);

  x.open("GET", "delete.php?gid=" + gid + "&qty=" + qty, true);
  x.send();
  /* Logging the message "delete rq sent" to the console. */
  console.log("delete rq sent");
}

/**
 * If the server has responded and the response is OK, then log "Success" to the console. Otherwise,
 * log "unsuccess" to the console.
 * !returns the value of the last statement executed.
 */
function receive_ajax_response() {
  if (this.readyState == 4 && this.status == 200) {
    console.log("Success");
  } else {
    console.log("unsuccess");
  }
  return;
}
