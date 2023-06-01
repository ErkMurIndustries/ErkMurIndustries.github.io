---
title: Blog
permalink: /blog/
---

<div class="content">
<section class="intro intro-layout">
   <h1>Blog Homepage</h1>
</section>	

<!-- RECENT BLOG POSTS  -->
{% assign posts = site.posts %}
{% include blog-section.html posts=posts header="Recent Posts" limit=8 %}

{% assign howItWorksSeries = "" %}
{% capture howItWorksSeries %}
  {% for item in site.collections %}
    {% for folder in item.subfolders %}
      {{ howItWorksSeries | append: folder.title | append: ',' }}
    {% endfor %}
  {% endfor %}
{% endcapture %}

{% assign series_titles = howItWorksSeries | split: "," %}
{% include blog-section.html posts=series_titles header="How It Works" series=true limit=8 %}

</div>
