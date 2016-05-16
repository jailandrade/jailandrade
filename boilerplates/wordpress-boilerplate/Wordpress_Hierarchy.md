# Wordpress Hierarchy

In Wordpress exists the Template Hierarchy which consist in fit together the different templates to produce the actual site.

Although you only need the index.php and the style.css files for render your site you can define the type and order of the templates you need.

Wordpress can load the different templates in this order only if them already exists

*. index.php
*. archive.php
  *. author.php
    *. author-$id.php
      *. author-$nicename.php
  *. category.php
    *. category-$id.php
      *. category-$slug.php
  *. archive-$posttype.php
  *. taxonomy.php
    *. taxonomy-$taxonomy.php
      *. taxonomy-$taxonomy-term.php
  *. date.php
  *. tag.php
    *. tag-$id.php
      *. tag-$slug.php
*. single.php
  *. attachment.php
    *. $mimetype_$subtype.php
      *. $subtype.php
        *. $mimetype.php
  *. single-$posttype.php
  *. single-post.php
*. page.php
  *. page-$id.php
    *. page-slug.php
  *. page-custom.php
*. home.php
  *. front-page.php
*. 404.php
*. search.php
