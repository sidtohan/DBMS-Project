<?php
  session_unset();
  session_destroy();
  // we must also delete the cookie
  setcookie(session_name(),'',0,'/');
  session_regenerate_id(true);
  header("Location: ../login.html")
?>