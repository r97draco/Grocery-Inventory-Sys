<!-- /* This is the PHP code that is used to delete the item from the database. */ -->
<?php
	/* This is the connection to the database. */
	$db = new mysqli("localhost", "jse553", "Js#sql", "jse553");
	
	if ($db->connect_error) {
	   die ("Connection failed: " . $db -> connect_error);
	}
	/* This is getting the values from the form. */
	$gid = $_REQUEST["gid"];
	$qty = $_REQUEST["qty"];

	/* This is the code that is deleting the item from the database. */
  $q= "DELETE FROM glist WHERE g_id = $gid ";
  $r = $db->query($q);
  
/* This is closing the connection to the database. */
	$db->close();
?>
