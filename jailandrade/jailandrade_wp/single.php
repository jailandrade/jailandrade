<?php
/**
 * The default single template
 */

get_header(); ?>

	<div class="section-single">
		<div class="section-content">
			<?php while( have_posts() ) : the_post(); ?>

        <?php get_template_part( 'single', 'post' ); ?>

      <?php endwhile; ?>
		</div>
	</div>

<?php get_footer(); ?>