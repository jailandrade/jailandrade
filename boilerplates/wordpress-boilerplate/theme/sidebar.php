<?php
/*
 * The template for the sidebar
 *
 */
?>

<div class="site-secondary">
  <?php if ( is_active_sidebar( 'sidebar-main' ) ) : ?>
    <ul id="sidebar" class="sidebar-content">
      <?php dynamic_sidebar( 'sidebar-main' ); ?>
    </ul>
  <?php endif; ?>
</div>
