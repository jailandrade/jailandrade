<?php
 /**
  * The default page template
  *
  */

get_header(); ?>

<div class="single-page">
  <div class="section-landscape" id="landscape">
    <div class="section-content">
      <h2 class="landscape__title"><?php _e( 'Conectamos usuarios' ); ?></h2>
      <p class="landscape__description"><?php _e( 'Lo mas importante es que tu sitio web te permita conectar con quien te visita' ); ?></p>
      <a id="button-landscape" class="button button-white" href="<?php echo esc_url( get_permalink( get_page_by_title( 'Conectando Usuarios' ) ) ); ?>"><?php _e( 'Conoce más'); ?></a>
    </div>
  </div>


  <div class="section-page">
    <div class="section-content">
      <?php while( have_posts() ) : the_post(); ?>

        <?php get_template_part( 'template', 'page' ); ?>

      <?php endwhile; ?>
    </div>
  </div>
</div>
<?php get_footer(); ?>
