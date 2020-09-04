<?php
  header ('Content-Type: application/json');
  require '../data.php';
  echo json_encode($DATA);
?>
