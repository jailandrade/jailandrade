<?php
/**
 * The header template must be called in all the template files
 *
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=ege">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--  The title element is generated in the functions.php file -->
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="pingback" href="<?php bloginfo( 'pignback_url' ); ?>">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
<div id="page" class="hfeed site">
  <header id="page-header" class="site-header">
    <div class="site-title"></div>
    <nav role="navigation" class="site-nav"></nav>
  </header>
  <div id="page-main" class="site-main">
