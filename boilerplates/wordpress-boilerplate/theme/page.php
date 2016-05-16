<?php
 /**
  * The default page template
  *
  */

get_header(); ?>

<article id="<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="page-header">
    <?php the_title(); ?>
  </header>
  <main class="page-content">
    <?php the_content(); ?>
  </main>
  <footer>
    <?php ?>
  </footer>
</article>

<?php get_footer(); ?>