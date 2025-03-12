---
title: دليل الأيات للكتاب
layout: default
nav_order: 60
parent: العقيدة و الاعجاز
---

# دليل الأيات لكتاب العقيدة و الاعجاز

{% assign selected_parent = page.parent %}
{% assign tags = "" | split: "," %}

{% for page in site.pages %}
{% if page.parent == selected_parent or page.grand_parent == selected_parent %}
{% if page.tags %}
{% for tag in page.tags %}
{% unless tags contains tag %}
{% assign tags = tags | push: tag %}
{% endunless %}
{% endfor %}
{% endif %}
{% endif %}
{% endfor %}

{% assign tags = tags | sort %}

{% for tag in tags %}

### {{ tag }}

{: .note}

<ul>
  {% for page in site.pages %}
    {% if page.tags contains tag %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
{% endfor %}
