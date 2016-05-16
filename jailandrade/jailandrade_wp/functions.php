<?php
/**
 * WPTheme Functions
 * @package jailandrade
 */

if ( !function_exists( 'jailandrade_setup') ):
/**
 * Sets up theme defaults and registers support for various Wordpress features
 *
 * @since MyThemeWordpress 1.0
 */
function jailandrade_setup() {

    // Adding support to personalize the theme from wp dashboard
    add_theme_support( 'post-thumbnails' );

    // Adding support for the types of posts
    add_theme_support( 'post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio', 'chat') );

    // Adding support for custom background
    add_theme_support( 'custom-background' );

    // Adding custom for custom header
    add_theme_support( 'custom-header' );

    // Adding custom for theme support
    add_theme_support( 'html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'widgets') );

    // Adding support for the title of the pages
    add_theme_support( 'title-tag' );

    // Adding links RSS for posts and comments
    add_theme_support( 'automatic-feed-links' );

    // Adding navigation menus
    register_nav_menus( array (
      'header-menu' => ( 'Header Menu' ),
      'footer-menu' => ( 'footer Menu' ),
    ) );
}
endif;
add_action( 'after_setup_theme', 'jailandrade_setup');

// Register the widgets
function jailandrade_widgets() {

  // Register sidebar main
  register_sidebar( array(
    'id'          => 'sidebar-main',
    'name'        => __('Sidebar main'),
    'description' => __('This sidebar is located on the index')
  ) );
}
add_action( 'widgets_init', 'jailandrade_widgets' );

// Register the scripts
function jailandrade_scripts (){
  wp_enqueue_style( 'jailandrade_style', get_stylesheet_uri() );
  wp_enqueue_script( 'jailandrade-script', get_template_directory_uri() . 'js/main.js', array( 'jquery' ) );

  wp_register_style( 'niconne-fonts', 'http://fonts.googleapis.com/css?family=Niconne' );
  wp_enqueue_style( 'niconne-fonts' );

  wp_register_style( 'source_sans_pro-fonts', 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600' );
  wp_enqueue_style( 'source_sans_pro-fonts');
}
add_action( 'wp_enqueue_scripts', 'jailandrade_scripts' );
