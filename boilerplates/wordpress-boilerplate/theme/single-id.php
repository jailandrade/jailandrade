<?php
/**
 * The default single template
 */
?>
<article id="<?php the_ID(); ?>" class="<?php post_class(); ?>" >
  <header class="single-header">
    <h1><?php the_title(); ?></h1>
  </header>
  <main class="single-content">
    <?php the_content(); ?>
  </main>
  <footer class="single-footer">
  </footer><
</article>
