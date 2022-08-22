<!-- /* This is the PHP code that is executed when the user clicks the minus button. It connects to the database, gets the gid and qty from the request, and then updates the database with the new qty. */ -->
<?php
  /*connect to database*/
	$db = new mysqli("localhost", "jse553", "Js#sql", "jse553");
	
	if ($db->connect_error) {
	   die ("Connection failed: " . $db -> connect_error);
	}

/* Updating the database with the new quantity. */
	$gid = $_REQUEST["gid"];
	$qty = $_REQUEST["qty"];
  if($qty>=1){
  $qty-=1;
	$q= "UPDATE glist SET qty=$qty WHERE g_id = $gid ";
  $r = $db->query($q);
  }

/* Closing the connection to the database. */
	$db->close();
?>
