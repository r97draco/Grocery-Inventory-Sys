// /* 
//   This piece of code is part of the Grocery inventory management where we use following code to dynamically process the grocery list without needing to reload the whole page. :
//   When the user clicks the button, we send an AJAX get request to the server, server request data from sql database and encodes the response in a JSON string, we receive the response from the server, parse the JSON, and then create HTML elements to display the results on to our grocery list page. It also dynamically updates the results every 90 seconds.
//  */

/* dynamicallycheck with the server every 90 seconds to find outif there are any new groceries */
setInterval(send_ajax_request, 90000);

/* Calling the function `send_ajax_request` when the page loads and when the user clicks on the page. */
window.onload = send_ajax_request;
window.onclick = send_ajax_request;

/**
 * When the user clicks the button, send an AJAX request to the server, and when the server responds,
 * call the receive_ajax_response function.
 */
function send_ajax_request() {
  /* Getting the user id and the family id from the html page. */
  var userID = document.getElementById("uid").innerHTML;
  var familyID = document.getElementById("fid").innerHTML;

  /* for debugging purposes */
  console.log("userID:", userID, "fid:", familyID);

  /* Creating a new XMLHttpRequest object. */
  var xmlhttp = new XMLHttpRequest();

  /* Listening for the readystatechange event. */
  xmlhttp.addEventListener("readystatechange", receive_ajax_response, false);

  /* Sending a GET request to the server with uid and fid data. */
  xmlhttp.open("GET", "retreiveList.php?uid=" + userID + "&fid=" + familyID, true);
  xmlhttp.send();
}

/**
 * It receives the response from the server, parses the JSON, and then creates HTML elements to display
 * the results.
 * @returns The responseText is a string of JSON data.
 */
function receive_ajax_response() {
  /* Checking if the request is ready and the status is 200 ie OK. */
  if (this.readyState == 4 && this.status == 200) {
    var message_area = document.getElementById("msg");
    var section;
    var body = document.getElementById("body");

    var results;
    /* Trying to parse the responseText as JSON. If it fails, it will display the responseText. */
    try {
      results = JSON.parse(this.responseText);
    } catch {
      message_area.innerHTML = this.responseText;
      return;
    }

    if (results.length > 0) {
      var sec = document.getElementById("exists");
      if (sec) {
        sec.remove();
      }
      sec = document.createElement("section");
      sec.setAttribute("id", "exists");
      body.appendChild(sec);

      var userID = document.getElementById("uid").innerHTML;
      var familyID = document.getElementById("fid").innerHTML;

      /* Creating variables for the elements that will be created. */
      var db_record;
      var div;
      var para;
      var br;
      var span;
      var btn;

      for (var i = 0; i < results.length; i++) {
        /* Creating a section element and adding a class to it. Then it is creating a div element and adding a class to it. */
        section = document.createElement("section");
        section.classList.add("ListItem");

        div = document.createElement("div");
        div.classList.add("item-block");

        //extract a record from the json results
        db_record = results[i];

        /* Creating a paragraph element and adding a text node to it. Then it is creating a break element and adding it to the paragraph. */
        para = document.createElement("p");
        h3 = document.createElement("h3");
        content = document.createTextNode(db_record.title);
        h3.appendChild(content);
        para.appendChild(h3);
        br = document.createElement("br");
        para.appendChild(br);

        /* Creating a paragraph element and adding a text node to it. Then it is creating a break element and adding it to the paragraph. */
        content = document.createTextNode(db_record.descript);
        para.appendChild(content);
        br = document.createElement("br");
        para.appendChild(br);
        br = document.createElement("br");
        para.appendChild(br);

        /* Creating a text node and adding it to the paragraph. */
        content = document.createTextNode("Date posted: ");
        para.appendChild(content);

        /* Creating a text node and adding it to the paragraph. */
        content = document.createTextNode(db_record.dt);
        para.appendChild(content);

        content = document.createTextNode(" by User ID: ");
        para.appendChild(content);

        /* Creating a text node and adding it to the paragraph. Then it is creating a break element and adding it to the paragraph. */
        content = document.createTextNode(db_record.u_id);
        para.appendChild(content);
        br = document.createElement("br");
        para.appendChild(br);

        /* Creating a text node and adding it to the paragraph. */
        content = document.createTextNode("Quantity:");
        para.appendChild(content);

        /* Creating a span element and adding a class to it. Then it is creating a text node and adding it to the span. Then it is adding the span to the paragraph. */
        span = document.createElement("span");
        span.classList.add("qty-style");
        span.setAttribute("id", "qty1");
        content = document.createTextNode(db_record.qty);
        span.appendChild(content);
        para.appendChild(span);

        /* Creating a button element and adding a class to it. Then it is setting the name attribute of the button. */
        btn = document.createElement("button");
        btn.classList.add("buy1");
        btn.setAttribute("name", "buy");

        btn.setAttribute(
          "onclick",
          "ajaxRqBuy(" + db_record.g_id + "," + db_record.qty + ")"
        );

        content = document.createTextNode("Buy");
        btn.appendChild(content);
        para.appendChild(btn);

        /* Checking if the quantity is greater than or equal to 1. If it is, it will create a button
        element and add a class to it. Then it is setting the name attribute of the button. Then it
        is setting the onclick attribute of the button. Then it is creating a text node and adding
        it to the button. Then it is adding the button to the paragraph. */
        if (db_record.qty >= 1) {
          btn = document.createElement("button");
          btn.classList.add("con");
          btn.setAttribute("name", "con");
          btn.setAttribute(
            "onclick",
            "ajaxRqCon(" + db_record.g_id + "," + db_record.qty + ")"
          );
          content = document.createTextNode("Consume");
          btn.appendChild(content);
          para.appendChild(btn);
        }

        /* Creating a text node and adding it to the paragraph. */
        content = document.createTextNode(db_record.u_id);

        /* Checking if the quantity is greater than or equal to 1. If it is, it will create a button
        element and add a class to it. Then it is setting the name attribute of the button. Then it
        is setting the onclick attribute of the button. Then it is creating a text node and adding
        it to the button. Then it is adding the button to the paragraph. */
        if (parseInt(userID) == parseInt(db_record.u_id)) {
          btn = document.createElement("button");
          btn.classList.add("del");
          btn.setAttribute("name", "del");
          btn.setAttribute(
            "onclick",
            "ajaxRqDel(" + db_record.g_id + "," + db_record.qty + ")"
          );
          content = document.createTextNode("Delete");
          btn.appendChild(content);
          para.appendChild(btn);
        }

        /* Adding the paragraph to the div, the div to the section, and the section to the sec. */
        div.appendChild(para);
        section.appendChild(div);
        sec.appendChild(section);
      }
      /* Adding the section to the body. */
      body.appendChild(sec);
    } else {
      message_area.innerHTML = "No results found.";
    }
    // this is the error message
  }
  return;
}
