<?php
/**
 * WordpressBoilerplate Functions
 * @package WordpressBoilerplate
 */

if ( !function_exists( 'wordpressboilerplate_setup') ):
/**
 * Sets up theme defaults and registers support for various Wordpress features
 *
 * @since WordpressBoilerplate 1.0
 */
function wordpressboilerplate_setup() {

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
      'primary-menu' => ( 'Primary Menu'),
      'secondary-menu' => ( 'Secondary Menu' ),
      'header-menu' => ( 'Header Menu' ),
      'footer-menu' => ( 'Footer Menu ' ),
    ) );
}
endif;
add_action( 'after_setup_theme', 'wordpressboilerplate_setup');

// Register the widgets
function wordpressboilerplate_widgets() {

  // Register sidebar main
  register_sidebar( array(
    'id'          => 'sidebar-main',
    'name'        => __('Sidebar main'),
    'description' => __('This sidebar is located on the index')
  ) );
}
add_action( 'widgets_init', 'wordpressboilerplate_widgets' );

// Register the scripts and stylesheets
function wordpressboilerplate_scripts (){
  wp_enqueue_style( 'wordpressboilerplate-style', get_stylesheet_uri() );
  wp_enqueue_script( 'wordpressboilerplate-script', get_template_directory_uri() . 'js/main.js', array( 'jquery' ) );

  wp_register_style('animate.css', get_stylesheet_uri() . 'assets/vendor/font-awesome/css/font-awesome.min.css');
}
add_action( 'wp_enqueue_scripts', 'wordpressboilerplate_scripts' );
