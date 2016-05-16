<?php
/*
 * The header template
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo( 'pignback_url' ); ?>">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
<div class="hfeed site" id="page">
  <header class="site-header" id="main-head">
    <div class="section-content">
      <div class="site-heading u-ib">
        <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php echo bloginfo('name'); ?></a></h1>
      </div>
      <nav class="site-nav u-ib" role="navigation">
        <?php wp_nav_menu( array(
          'theme_location' => 'header-menu',
          'container_class' => 'header-menu'
          ) ); ?>
      </nav>
    </div>
  </header>