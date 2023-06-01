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

<!-- IN PROGRESS SERIES CAPTURE -->
{% assign howItWorksSeries = "" %}
{% capture howItWorksSeries %}
  {% for item in site.collections %}
    {% for folder in item.subfolders %}
      {{ howItWorksSeries | append: folder | append: "," }}
    {% endfor %}
  {% endfor %}
{% endcapture %}


<!-- TAGGED POSTS -->
{% assign howItWorksPosts = site.posts | where: "tags", "how-it-works" %}
{% include blog-section.html posts=howItWorksPosts header="How It Works" limit=8 %}

</div>
