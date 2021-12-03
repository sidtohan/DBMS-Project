<?php 
  error_reporting(E_ALL);
  ini_set('display_errors', '1');
  include_once "config.php";
  $id = $_SESSION['unique-id'];
  $json = file_get_contents("php://input");
  $type = json_decode($json)->type;
  
  if($type == "patient"){
    $sql = "SELECT * FROM `dbms_project`.`patient` WHERE 
    PID = $id";
    $result = $link -> query($sql);
    $row = mysqli_fetch_assoc($result);
    $fname = $row['PFirstName'];
    $mname = $row['PMiddleName'];
    $lname = $row['PLastName'];
    $address = $row['PAddress'];
    $phone = $row["PPhone"];
    
    $response = array(
      "fname" => $fname,
      "mname" => $mname,
      "lname" => $lname,
      "address" => $address,
      "phone" => $phone
    );
  } else if($type == "hospital"){
    $sql = "SELECT * FROM `dbms_project`.`Hospital` WHERE 
    HID = $id";
    $result = $link -> query($sql);
    $row = mysqli_fetch_assoc($result);
    $name = $row['HNAME'];
    $address = $row['HADDRESS'];
    $phone = $row['H_LANDLINE_NO'];

    $response = array(
      "name" => $name,
      "address" => $address, 
      "phone" => $phone
    );
  }
  echo json_encode($response);
?>