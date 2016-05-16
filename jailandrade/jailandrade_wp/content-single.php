<?php
/**
 * Get all the content single
 */
?>
<article id="<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="single-header">
    <h1><a><?php the_title(); ?></a></h1>
  </header>
  <main class="single-content">
    <?php the_content(); ?>
  </main>
</article>
