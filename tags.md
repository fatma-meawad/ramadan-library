---
title: دليل الايات
layout: default
permalink: /tags/
---

# دليل الايات

{% assign tags = "" | split: "," %}

{% for page in site.pages %}
{% if page.tags %}
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
    {% if page.tags contains tag %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
{% endfor %}
