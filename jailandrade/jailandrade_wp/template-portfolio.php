<?php
 /**
  * Template Name: Portfolio
  *
  */

get_header(); ?>

<div class="page-portfolio">

  <div class="section-landscape" id="landscape">
    <div class="section-content">
      <h2 class="landscape__title"><?php _e( 'Conectamos usuarios' ); ?></h2>
      <p class="landscape__description"><?php _e( 'Lo mas importante es que tu sitio web te permita conectar con quien te visita' ); ?></p>
      <a id="button-landscape" class="button button-white" href="<?php echo esc_url( get_permalink( get_page_by_title( 'Conectando Usuarios' ) ) ); ?>"><?php _e( 'Conoce más'); ?></a>
    </div>
  </div>
  <div class="section-article">
    <div class="section-content">
      <?php while( have_posts() ) : the_post(); ?>

        <?php get_template_part( 'template', 'page' ); ?>

      <?php endwhile; ?>
    </div>
  </div> <!-- .section-article  -->
  <section class="section-portfolio">
    <div class="section-content">
      <div class="portfolio-element u-ib">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/p_hotellosangeles.png" class="portfolio-element__img">
        <a href="<?php echo esc_url('http://hotellosangeles.com.mx'); ?>" class="portfolio-element__link">Hotel Los Angeles</a>
      </div>
      <div class="portfolio-element u-ib">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/p_dabeka.png" class="portfolio-element__img">
        <a href="<?php echo esc_url('http://dabeka.com'); ?>" class="portfolio-element__link">Dabeka</a>
      </div>
      <div class="portfolio-element u-ib">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/p_tuxideas.png" class="portfolio-element__img">
        <a href="<?php echo esc_url('http://tuxideas.com'); ?>" class="portfolio-element__link">Tuxideas</a>
      </div>
      <div class="portfolio-element u-ib">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/p_electronicmind.png" class="portfolio-element__img">
        <a href="<?php echo esc_url('http://electronicmind.com.mx'); ?>" class="portfolio-element__link">Electronicmind</a>
      </div>
      <div class="portfolio-element u-ib">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/p_tarahumaras.png" class="portfolio-element__img">
        <a href="<?php echo esc_url('http://tarahumaras.tuxideas.com'); ?>" class="portfolio-element__link">Tarahumaras</a>
      </div>
      <div class="portfolio-element u-ib">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/p_cneg.png" class="portfolio-element__img">
        <a href="<?php echo esc_url('http://cneg.tuxideas.com'); ?>" class="portfolio-element__link">CNEG</a>
      </div>
    </div>
  </section>
</div>
<?php get_footer(); ?>
