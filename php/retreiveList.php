<?php
/* This is the PHP code that is being run on the server. It is connecting to the database, getting the uid and fid from the request, running a query on the database, creating an array of the results from the query, encoding the array into a JSON string, and then echoing it out. It is then closing the database connection. */
/* This is connecting to the database. */
	$db = new mysqli("localhost", "jse553", "Js#sql", "jse553");
	
	if ($db->connect_error) {
	   die ("Connection failed: " . $db -> connect_error);
	}

/* This is getting the uid and fid from the request. */
	$uid = $_REQUEST["uid"];
	$fid = $_REQUEST["fid"];
  
  
/* This is the query that is being run on the database. It is selecting all of the columns from the glist table where the f_id is equal to the fid that is passed in. It is then ordering the results by qty in ascending order and then by dt in descending order. It is then limiting the results to 10. */
	$q= "SELECT * FROM glist WHERE f_id = $fid ORDER BY qty ASC, dt DESC LIMIT 10";
	$r = $db->query($q);

/* Creating an array of the results from the query. */
	$arr=array();
	while ($row = $r->fetch_assoc()){
		$arr[]= $row;
	}

/* Encoding the array into a JSON string and then echoing it out. It is then closing the database
connection. */
	$JSON_response = json_encode($arr);
	echo $JSON_response;

	$db->close();
?>
