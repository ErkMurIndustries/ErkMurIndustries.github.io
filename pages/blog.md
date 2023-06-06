---
title: Blog
permalink: /blog/
---

<section class="intro intro-layout">
   <h1>Blog Homepage</h1>
</section>	

<!-- RECENT BLOG POSTS  -->
{% assign posts = site.posts %}
{% include blog-section.html posts=posts header="Recent Posts" limit=8 %}

<!-- TAGGED POSTS -->
{% assign howItWorksPosts = site.posts | where: "tags", "how-it-works" | where: "tags", "initial" %}
{% include blog-section.html posts=howItWorksPosts header="How It Works" limit=8 %}

