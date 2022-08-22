<!-- /* A PHP script that updates the quantity of a grocery item in the database. */ -->
<?php
	/* This is creating a new connection to the database. */
	$db = new mysqli("localhost", "jse553", "Js#sql", "jse553");
	
	if ($db->connect_error) {
	   die ("Connection failed: " . $db -> connect_error);
	}

/* This is getting the gid and qty from the request. */
	$gid = $_REQUEST["gid"];
	$qty = $_REQUEST["qty"];
  
  $qty+=1;

/* This is updating the quantity of the grocery item in the database. */
  $q= "UPDATE glist SET qty=$qty WHERE g_id = $gid ";
  $r = $db->query($q);
  
/* Closing the connection to the database. */
	$db->close();
?>
