<?php

  if(isset($_POST["create"])){
    $fName = $_POST["firstName"];
    $lName = $_POST["lastName"];
    $uname = $_POST["username"];
    $email    = $_POST["email"];
    $pword = $_POST["password"];

    $dbname   = "accounts";
    $host     = "localhost";
    $username = "franklin";
    $password = "ffw__2005";

  $con = mysqli_connect($host, $username, $password, $dbname);
  if(!$con){
    die("Could Not Connect:".mysqli_connect_error());
  }
  echo "Connected Successfully<br/>";

    $sql = "INSERT INTO useraccounts (id, fName_fld, lName_fld, uname_fld, email_fld, pword_fld) VALUES ('0','$fName','$lName','$uname','$email','$pword')";
    $rs = mysqli_query($con,$sql);
    if($rs){
    echo "Record Success";
    }else{
    echo "Record not";
    }
    mysqli_close($con);
  }

?>