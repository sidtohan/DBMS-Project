<?php 
  error_reporting(E_ALL);
  ini_set('display_errors', '1');
  include_once "config.php";
  $id = $_SESSION['unique-id'];
  $json = file_get_contents("php://input");
  $type = json_decode($json)->type;
  
  if($type == "patient"){
    $sql = "SELECT * FROM `dbms-project`.`Patient` WHERE 
    PID = $id";
    $result = $link -> query($sql);
    $row = mysqli_fetch_assoc($result);
    $fname = $row['PFIRSTNAME'];
    $mname = $row['PMIDDLENAME'];
    $lname = $row['PLASTNAME'];
    $address = $row['PADDRESS'];
    $phone = $row["PPHONE"];
    
    $response = array(
      "fname" => $fname,
      "mname" => $mname,
      "lname" => $lname,
      "address" => $address,
      "phone" => $phone
    );
    echo json_encode($response);
  }

?>