<article id="<?php the_ID(); ?>" <?php post_class( 'article' ); ?>>
	<header class="article-header">
		<?php the_title('<h1 class="article-title">', '</h1>'); ?>
	</header>
	<main class="article-content">
	  <?php echo the_content(); ?>
	</main>
	<footer class="article-footer">
	</footer>
</article>