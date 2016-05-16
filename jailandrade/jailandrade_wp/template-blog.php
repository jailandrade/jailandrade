<?php
 /*
  * Template Name: Blog
  *
  */

get_header(); ?>

<div class="page-blog">
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

  <div class="section-blog">
    <div class="section-content">

      <div class="section-blog-title">
        <h1>Mis articulos</h1>
      </div>
      <?php $loop = new WP_Query( 'post_type=post' ); ?>
      <?php while( $loop -> have_posts() ): $loop -> the_post(); ?>
        <article class="post">
          <div class="post-meta">
            <span><?php the_time('j F, Y'); ?></span>
          </div>
          <header class="post-header">
            <h1 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
          </header>
          <div class="post-content">
            <?php the_content(); ?>
          </div>
        </article> <!-- .post-partido -->
      <?php endwhile; ?>
    </div>
  </div>
</div>
<?php get_footer(); ?>
