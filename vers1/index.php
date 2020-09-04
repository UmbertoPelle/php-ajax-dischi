<link rel="stylesheet" href="style.css">
<?php

  require "../data.php";
  foreach ($DATA['response'] as $albums) {
    ?><div class="album">
      <?php foreach ($albums as $key => $album) {
        if ($key == 'poster') {
          echo '<img class="img" src='. $album.' >';
        }
        elseif ($key == 'title') {
          echo "<h1 class='title'>".$album.'</h1>';
        }
        elseif ($key == 'author') {
          echo "<h2 class='author'>".$album.'</h2>';
        }
        elseif ($key == 'genre') {
          echo "<h4 class='genre'>".$album.'</h4>';
        }
        elseif ($key == 'year') {
          echo "<h4 class='year'>".$album.'</h4>';
        }
      }
    ?>
    </div> <?php
  }

?>
