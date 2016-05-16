<?php get_header(); ?>

<div class="page-home">

  <div class="section-landscape" id="landscape">
    <div class="section-content">
      <h2 class="landscape__title"><?php _e( 'Conectando usuarios' ); ?></h2>
      <p class="landscape__description"><?php _e( 'Lo más importante es que tu sitio web te permita conectar con quien te busca.' ); ?></p>
      <a id="button-landscape" class="button button-white" href="<?php echo esc_url( get_permalink( get_page_by_title( 'Acerca de' ) ) ); ?>"><?php _e( 'Conoce más'); ?></a>
    </div>
  </div>


</div> <!-- .page-home -->


<?php get_footer(); ?>
