<!-- /* The HTML code for the grocery list page. */ -->
<!DOCTYPE html>
<html>

<!-- /* The header of the html page. */ -->
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Grocery List</title>
  <script src="https://kit.fontawesome.com/2adf8c3f23.js" crossorigin="anonymous"></script>
  <link href="../css/style.css" rel="stylesheet" type="text/css" />
  <!-- /* Loading the javascript files that are used to update the grocery list and validation of form. */ -->
  <script type="text/javascript" src="../js/glist-update.js"></script>
  <script type="text/javascript" src="../js/ajaxButton.js"></script>

</head>

<body id="body">
  <header>
    <h1><i class="fas fa-cookie-bite"></i>jsGroc</h1>
    <h2>Grocery list</h2>
  </header>

  <!-- /* A div that is hidden. It is used to store the user id and family id. */ -->
  <div class="hide" style="display:none">
  <?php
    session_start();
    echo "<span id='uid'>".$_SESSION['u_id']."</span>";
    echo "<span id='fid'>".$_SESSION['f_id']."</span>";
    ?>
  </div>

  <!-- /* The navigation bar. */ -->
  <nav class="left">
    <ul>
      <li><a href="index.php">INDEX</a></li>
      <li><a href="family.php">Family</a></li>
      <li><a class="active" href="glist.php">Grocery list</a></li>
      <li><a href="postg.php">Post groceries</a>
      </li>
      <li style="float:right"><a href="logout.php">Log out</a></li>
      <li style="float:right"><a href="#">
      <?php
      /* Used to display the user name of the user that is logged in. */
      session_start();
      if(isset($_SESSION["uname"])){
        echo $_SESSION['uname'];
      }
      else echo "User-name";
      ?>
      </a></li>
      <li style="float:right"><a href="#">
      <?php
/* Used to display the family name of the user that is logged in. */
      session_start();
      if(isset($_SESSION["fname"])){
        echo $_SESSION['fname'];
      }
      else echo "Family-name";
      ?>
      </a></li>
    </ul>
  </nav>

  <!-- /* Used to display messages to the user. */ -->
  <span id="msg"></span>

  <!-- /* Loading the javascript files that are used to update the grocery list. */ -->
  <script type="text/javascript" src="../js/glist-r.js"></script>
  <script type="text/javascript" src="../js/ajaxUpdateGlist.js"></script>


  <!-- /* The footer of the page. */ -->
  <footer>
    <p>&copy; 2021 jsGroc. All rights reserved.</p>
  </footer>
</body>

</html>