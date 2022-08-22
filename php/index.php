<!-- /* This is the index page of the website. It is the  page that the we will use to test
the website. It will display the login and signup page if the user is not logged in. If the user is logged in, it will display the welcome message and the links to the other pages. */ -->
<!DOCTYPE html>
<html>

<!-- /* This is the head section of the html page. It is used to define the title of the page, the css file,
the javascript file and the fontawesome file. */ -->
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Index</title>
  <script src="https://kit.fontawesome.com/2adf8c3f23.js" crossorigin="anonymous"></script>
  <link href="../css/style.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="../js/login-validate.js"></script>
</head>

<!-- /* The main content of the page. */ -->
<body>
  <header>
    <h1><i class="fas fa-cookie-bite"></i>js Grocery Inventory Management System</h1>
    <h2>User Login</h2>
  </header>

  <!-- /* This is the navigation bar of the website. It is used to navigate to the other pages of the website. */ -->
  <nav class="left">
    <ul>
      <li><a class="active" href="index.php">INDEX</a></li>
      <li><a href="family.php">Family</a></li>
      <li><a href="glist.php">Grocery list</a></li>
      <li><a href="postg.php">Post groceries</a></li>
      <li style="float:right"><a href="logout.php">Log out</a></li>
      <li style="float:right"><a href="#">
          <?php
      session_start();
      if(isset($_SESSION["uname"])){
        echo $_SESSION['uname'];
      }
      else echo "User-name";
      ?>
        </a></li>
      <li style="float:right"><a href="#">
          <?php
      session_start();
      if(isset($_SESSION["fname"])){
        echo $_SESSION['fname'];
      }
      else echo "Family-name";
      ?>
        </a></li>
    </ul>
  </nav>

  <section>
    <?php
    //If nobody is logged in, display login and signup page.
    if(isset($_SESSION["email"]))
    {
      //If somebody is logged in, display a welcome message
      echo "Welcome, logged in as:  " .$_SESSION['email']. "<br />" ;	
      echo "User Name :  " .$_SESSION['uname']. "<br />" ;	
      echo "U_ID :  " .$_SESSION['u_id']. "<br />" ;
      echo "Family name :  " .$_SESSION['fname']. "<br />" ;
      echo "F_ID :  " .$_SESSION['f_id']. "<br />" ;	

      echo "<a href='family.php'>Family</a><br>";
      echo "<a href='postg.php'>Post groceries</a><br>";
      echo "<a href='glist.php'>Groceries List</a><br>";
      echo "<a href='logout.php'>Logout</a><br>";
    }

    else
    {	
      echo "<H3>Please Login or Sign up</h3>";
      echo "<p>FOR TESTING (login) <br><br> Email: sample1@google.com <br> Password: passw1</p>";

      echo "<a href='login.php'>Login</a><br>"; 
      echo "<a href='signup.php'>Signup</a>";	
    }
    ?>

  </section>
  
  <section>
  <p>

  This Grocery management system can help you keep track of it very easily from work or home for all the members of the family. Family members can update their groceries whenever they have time and can look what they need when they go to the grocery shop without need to asking other members as they can easily see it by one click from their mobile phone or computer.
  <br>
  <br>

  You sign up to create your profile, you can create or join a family to keep a record of the grocery items that are available at the home for that family. A Family can have many members who can add new items, delete previous items, consume items and many more other useful features.
  </p>

    <h3>Links to the design files:</h3>
    <ul>
      <li><a href="http://www2.cs.uregina.ca/~jse553/assignments/as4/as4.pdf">A) ERD Diagram </a></li>
      <li><a href="http://www2.cs.uregina.ca/~jse553/assignments/as4/logfileB.txt">B) SQL queries text file</a></li>
      <li><a href="http://www2.cs.uregina.ca/~jse553/assignments/as4/logfileC.txt">C) SQL queries text file</a></li>
      <li><a href="http://www2.cs.uregina.ca/~jse553/assignments/as4/file.sql">SQL Commands file </a></li>
    </ul>
  </section>

  <footer>
    <p>&copy; 2021 jsGroc. All rights reserved.</p>
  </footer>
</body>

</html>