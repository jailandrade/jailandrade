<?php
/**
 * The index template
 */

get_header(); ?>
  <div id="page-primary" class="site-primary">
    <div class="site-content">
      <?php if ( have_posts() ) : ?>
    	   <?php while ( have_posts() ) : the_post(); ?>

           <?php get_template_part( 'loop', 'index' );?>

        <?php endwhile; ?>
    	<?php endif; ?>
    </div> <!-- .site-content-->
  </div> <!-- .site-primary -->

<!--  If you decide use the sidebar in your index template remove comments-->
<!-- <?php get_sidebar(); ?> -->
<?php get_footer(); ?>
