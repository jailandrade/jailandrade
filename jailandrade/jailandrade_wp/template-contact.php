<?php
 /**
  * Template Name: Contact
  *
  */

get_header(); ?>

<div class="page-contact">

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
  <div class="section-form">
    <div class="section-content">
      <div class="ninja-form-container">
        <?php if( function_exists( 'ninja_forms_display_form' ) ){ ninja_forms_display_form( 1 ); } ?>
      </div>
    </div>
  </div>
  <div class="section-social-networks">
    <div class="section-content">
      <div class="section-social-networks-text">
        <p>
          Tambien puedes contactarme por alguna de estas redes sociales.
        </p>
      </div>
      <div class="section-social-networks-icons">
				<a class="icon" href="<?php echo esc_url('https://www.twitter.com/jailandrade'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/twitter_blue.png" alt=""></a>
				<a class="icon" href="<?php echo esc_url('https://www.github.com/jailandrade'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/github_blue.png" alt=""></a>
				<a class="icon" href="<?php echo esc_url('https://www.behance.net/jailandrade'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/behance_blue.png" alt=""></a>
				<a class="icon" href="<?php echo esc_url('https://mx.linkedin.com/in/jailandrade'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/linkedin_blue.png" alt=""></a>
				<a class="icon" href="<?php echo esc_url('https://plus.google.com/105306682617273727749'); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/googleplus_blue.png" alt=""></a>
			</div>
    </div>
  </div>
</div>
<?php get_footer(); ?>
