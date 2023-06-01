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
  {% for item in site.how-it-works %}
    {% if item.category == "microphones" %}
      {{ howItWorksSeries | append: item | append: "," }}
    {% endif %}
  {% endfor %}
{% endcapture %}

<!-- BLOG SECTION FOR SERIES -->
{% assign howItWorks = howItWorksSeries | split: "," %}
{{ howItWorks }}
{% include blog-section.html posts=howItWorks header="How It Works" limit=8 %}


<!-- TAGGED POSTS -->
{% assign howItWorksPosts = site.how-it-works | where: "tags", "how-it-works" %}
{% include blog-section.html posts=howItWorksPosts header="How It Works" limit=8 %}

</div>
