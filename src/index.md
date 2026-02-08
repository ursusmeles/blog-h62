---
layout: base.njk
title: Strona główna
og_image: "heliocantharus.png"
---
## Welcome to Helio62 Blog
This content is now automatically wrapped in the base layout.

## Ostatnie wpisy

<ul role="list" class="flow post-list">
  {%- for post in collections.posts | reverse -%}
    <li class="post-card">
      <article>
        <h2>
          <a href="{{ post.url }}">{{ post.data.title }}</a>
        </h2>
        <time datetime="{{ post.date | dateFilter }}">
          {{ post.date | dateFilter }}
        </time>
        <p>{{ post.data.description }}</p>
      </article>
    </li>
  {%- endfor -%}
</ul>