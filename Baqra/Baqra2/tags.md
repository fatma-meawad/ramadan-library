---
title: دليل الايات
layout: default
permalink: /tags/
parent: الأيات 6-18
---

# دليل الايات

{% assign selected_parent = page.parent %}
{% assign tags = "" | split: "," %}

{% for page in site.pages %}
{% if page.parent == selected_parent and page.tags %}
{% for tag in page.tags %}
{% unless tags contains tag %}
{% assign tags = tags | push: tag %}
{% endunless %}
{% endfor %}
{% endif %}
{% endfor %}

{% assign tags = tags | sort %}

{% for tag in tags %}

### {{ tag }}

<ul>
  {% for page in site.pages %}
    {% if page.parent == selected_parent and page.tags contains tag %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
{% endfor %}

{% include maincloud.html %}
