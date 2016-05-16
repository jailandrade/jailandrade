<footer class="site-footer">
	<div class="section-blog-home" id="blog">
		<div class="section-content">

	    <?php $query = new WP_Query('posts_per_page=1'); ?>

	    <?php if ( $query->have_posts() ) : ?>

	      <?php while ( $query->have_posts() ) : $query->the_post(); ?>
	        <div class="post">
	          <h2 class="post-title"><a href="<?php echo esc_url( the_permalink() ); ?>"><?php the_title(); ?></a></h2>
	          <div class="post-excerpt"><?php the_excerpt(); ?></div>
	        </div>

	      <?php endwhile; ?>
	  	   
	      <?php wp_reset_postdata(); ?>
	  	<?php endif; ?>

    	<a class="button button-white" href="<?php echo esc_url( get_permalink( get_page_by_title( 'Blog' ) ) ); ?>" id="button-blog">Blog</a>
	  </div> 
	</div>
	<div class="section-newsletter" id="newsletter">
	 	<div class="section-content">
			
			<h2 class="section-content__title"><?php _e('Suscribete al Newsletter'); ?></h2>
  		<h3 class="section-content__tagline"><?php _e('No te pierdas nada de lo que se publica en el blog ni del contenido más rico de esta samba. '); ?></h3>

	 		<div class="form-container">
	  		<?php echo do_shortcode('[mc4wp_form]'); ?>
	  	</div>
	  </div>
	</div>
	<section class="section-social">
		<section class="section-content">
			<q class="quote u-ib">En algun lugar de la mancha</q>
			<div class="icons u-ib">
				<a class="icon" href="<?php echo esc_url('https://www.twitter.com/jailandrade'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/twitter.png" alt=""></a>
				<a class="icon" href="<?php echo esc_url('https://www.github.com/jailandrade'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/github.png" alt=""></a>
				<a class="icon" href="<?php echo esc_url('https://www.behance.net/jailandrade'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/behance.png" alt=""></a>
				<a class="icon" href="<?php echo esc_url('https://mx.linkedin.com/in/jailandrade'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/linkedin.png" alt=""></a>
				<a class="icon" href="<?php echo esc_url('https://plus.google.com/105306682617273727749'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/googleplus.png" alt=""></a>
			</div>
		</section>
	</section>
	<section class="section-copyright">
		<p>&copy; 2015. Mikhail Cruz Andrade. Todos los derechos reservados.</p>
	</section>
</footer><!-- .site-footer -->
<?php wp_footer(); ?>
</div> <!-- .site -->
</body>
