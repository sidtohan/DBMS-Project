<?php
  define('DB_SERVER', 'localhost');
  define('DB_USERNAME', 'root');
  define('DB_PASSWORD', '');
  define('DB_NAME', 'dbms-project');

  $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
  if($link == false){
    echo mysqli_connect_error();
    die("ERROR: ".mysqli_connect_error());
  }
  $type = $_POST["type"];
  $name = $_POST["name"];
  $id = $_POST["id"];
  

  if($type == "patient"){
    $sql = "SELECT * FROM `dbms-project`.`Patient` WHERE 
    PID = $id";
  } else if($type == "doctor"){
    $sql = "SELECT * FROM `dbms-project`.`Doctor` WHERE 
    DID = $id";
  } else if($type == "supplier"){
    $sql = "SELECT * FROM `dbms-project`.`Supplier` WHERE 
    SID = $id";
  } else{
    $sql = "SELECT * FROM `dbms-project`.`Hospital` WHERE 
    HID = $id";
  }

  // running the query and storing the result
  $result = $link -> query($sql);
  if($result == false){
    die("INVALID DATA.");
  }

  // Checking the number of rows here
  $count = mysqli_num_rows($result);
  if($count == 1){
    echo "Login Successful <br>";
  } else{
    echo "Login Failed <br>";
  }

?>