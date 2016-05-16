<?php
/**
 * The default single template
 */

get_header(); ?>

<div class="single-post">
	<div class="section-landscape" id="landscape">
    <div class="section-content">
      <h2 class="landscape__title"><?php _e( 'Conectamos usuarios' ); ?></h2>
      <p class="landscape__description"><?php _e( 'Lo mas importante es que tu sitio web te permita conectar con quien te visita' ); ?></p>
      <a id="button-landscape" class="button button-white" href="<?php echo esc_url( get_permalink( get_page_by_title( 'Conectando Usuarios' ) ) ); ?>"><?php _e( 'Conoce más'); ?></a>
    </div>
  </div>

	<div class="section-single">
		<div class="section-content">
			<?php while( have_posts() ) : the_post(); ?>

					<div class="post">
						<article id="<?php the_ID(); ?>" <?php post_class(); ?>>
						  <header class="post-header">
						    <h1 class="post-title"><?php the_title(); ?></h1>
						  </header>
						  <main class="post-content">
						    <?php the_content(); ?>
						  </main>
						  <footer class="post-footer">
						  </footer>
						</article>
					</div>

      <?php endwhile; ?>
		</div>
	</div>
</div>
<?php get_footer(); ?>
