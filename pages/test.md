---
title: test
permalink: /test/
---

{% for item in site.other %}
    <a href="{{ item.url }}">{{ item.title }}</a>
{% endfor %}