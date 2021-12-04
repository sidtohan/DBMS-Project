<?php 
  error_reporting(E_ALL);
  ini_set('display_errors', '1');
  include_once "config.php";
  $id = $_SESSION['unique-id'];
  $json = file_get_contents("php://input");
  $type = json_decode($json)->type;
  
  if($type == "patient"){
    $sql = "SELECT * FROM $type WHERE 
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
  } else if($type == "doctor"){
    $sql = "SELECT * FROM $type WHERE 
    DID = $id";
    $result = $link -> query($sql);
    $row = mysqli_fetch_assoc($result);
    $fname = $row['DFirstName'];
    $lname = $row['DLastName'];
    $experience = $row['Experience'];

    $response = array(
      "fname" => $fname,
      "lname" => $lname,
      "experience" => $experience
    );
  } else if($type == "equip"){
    $sql = "SELECT * FROM medical_equipments WHERE PID = $id";
    $result = $link -> query($sql);
    $response = mysqli_fetch_all($result,MYSQLI_ASSOC);
  }
  echo json_encode($response);
?>