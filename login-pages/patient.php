<?php
  session_start();
  include_once "../config.php";
  if (!isset($_SESSION['unique-id'])) {
    header("location: ../login.html");
  }
  $id = $_SESSION['unique-id'];
  $sql = "SELECT * FROM patient WHERE PID = $id";
  $result = $link -> query($sql);
  $row = mysqli_fetch_assoc($result);

  $name = $row['PFirstName'];
?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Patient-Login</title>
    <link rel="stylesheet" href="../stylesheets/dashboard.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Raleway:wght@500;700&display=swap" rel="stylesheet" />
  </head>

  <body>
    <nav class="user-navigation">
      <img src="../assets/profile.svg" class="profile-logo" />
      <div class="name">
        <?php
          echo $name
        ?>
      </div>
      <ul class="user-choices">
        <li class="nav-option profile">Profile</li>
        <li class="nav-option equipment">Equipment</li>
        <li class="nav-option reports">Reports</li>
        <li class="nav-option log-out"><button>Log Out</button></li>
      </ul>
    </nav>
    <div class="user-display">
      <h2 class="display-heading">WELCOME</h2>
      <p class="display-text">CLICK ON THE LEFT SIDE TO NAVIGATE</p>
    </div>
  </body>
  <script src="../scripts/logout.js"></script>
  <script src="../scripts/patient.js"></script>
</html>