<?php
  include_once "config.php";
  $type = $_POST["type"];
  $name = $_POST["name"];
  $id = $_POST["id"];

  if(empty($name) || empty($id)){
    echo "empty";
  }
  else{
    $name[0] = strtoupper($name[0]);
    if($type == "patient"){
      $sql = "SELECT * FROM `dbms_project`.`$type` WHERE 
      PID = $id";
    } else if($type == "doctor"){
      $sql = "SELECT * FROM `dbms_project`.`$type` WHERE 
      DID = $id";
    } else if($type == "supplier"){
      $sql = "SELECT * FROM `dbms_project`.`$type` WHERE 
      SID = $id";
    } else{
      $sql = "SELECT * FROM `dbms_project`.`$type` WHERE 
      HID = $id";
    }

    // running the query and storing the result
    $result = $link -> query($sql);
    if($result == false){
      die("INVALID DATA");
    }

    // Checking the number of rows here
    $count = mysqli_num_rows($result);
    if($count >= 1){
      $link -> close();
      $_SESSION['unique-id'] = $id;
      echo "success";
    } else{
      $link -> close();
      echo "err";
    }
  }
?>
