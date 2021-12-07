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

  } else if($type == "hospital-patient-list"){
    // 1
    $sql = 'SELECT PFIRSTNAME,PLASTNAME FROM patient,medical_tests WHERE patient.PID = 
    medical_tests.PID  AND medical_tests.Diagnosis="COVID-19 Positive"';
    $result = $link -> query($sql);
    $response1 = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // 2
    $sql = "SELECT PFIRSTNAME,PLASTNAME FROM patient
    WHERE patient.PADDRESS='New Delhi'";
    $result = $link -> query($sql);
    $response2 = mysqli_fetch_all($result, MYSQLI_ASSOC);

    // 3
    $sql = 'SELECT PFIRSTNAME,PLASTNAME FROM patient, medical_tests
    WHERE patient.PID = medical_tests.PID
    AND medical_tests.DIAGNOSIS = "CT-SCAN NEEDED"';
    $result = $link -> query($sql);
    $response3 = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $response = array(
      "19-positive" => $response1,
      "new-delhi" => $response2,
      "ct-scan" => $response3
    );
  }
  echo json_encode($response);
?>