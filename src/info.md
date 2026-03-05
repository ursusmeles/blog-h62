---
layout: page.njk
title: Informacje
lead: Skąd wziął się Heliocantharus, kto jest jego autorem oraz na jakich zasadach są tworzone i udostępniane treści na blogu.
---

<section class="deck-container stack">
  {% set info_sections = [
    { title: "Dlaczego Heliocantharus?", content: "<p>Jako gracze w gry fabularne lubimy czytać — wystarczy spojrzeć na objętość większości podręczników. Dlatego myślę, że w fandomie RPG jest przestrzeń na blogi.</p><p>Chciałbym za pomocą tego miejsca dzielić się tym, co najbardziej cieszy mnie w grach fabularnych: możliwością powoływania do życia światów oraz starannego projektowania ich zewnętrznych i wewnętrznych reguł.</p><p>A <em>Heliocantharus</em> to część pseudonimu Michała Sędziwoja, polskiego XVII-wiecznego alchemika. Lubię alchemiczną estetykę i symbolikę i wykorzystuję je tutaj na różne sposoby.</p><hr>", id: "heliocantharus"},
    { title: "Kim jestem?", content: "<p>Nazywam się Mateusz Nowak. Jestem twórcą gier fabularnych i materiałów do RPG, autorem tekstów i podkastów, wydawcą, redaktorem i Mistrzem Gry od 2003 roku. Byłem związany z takimi projektami, jak <em>Twierdza Fantastyki</em>, <em>Blog i podkast k20</em> czy podkast <em>Siedzicie w karczmie</em>. Widziałem rzeczy, którym nie dalibyście wiary.</p><p>To nie ma jednak większego znaczenia. Po prostu lubię pisać, projektować i grać w RPG.</p><hr>", id: "mateusz-nowak"},
    { title: "Jak można korzystać z treści?", content: "<p>Wierzę w wolne treści i otwarte licencje. Dlatego wszystkie teksty na blogu udostępniam na licencji <code>Creative Commons BY-NC 4.0</code>. Co to oznacza?<ul><li>Możesz dowolnie kopiować i rozpowszechniać artykuły i materiały z tego bloga, zmieniać je i tworzyć nowe wersje na ich podstawie.</li><li>Warunkiem jest działanie niekomercyjne oraz podanie autorstwa: <code>Mateusz Nowak · Heliocantharus RPG</code>.</li></ul></p><p>Pełny tekst licencji znajdziesz tutaj: https://creativecommons.org/licenses/by-nc/4.0/.</p><p>Jeśli chcesz wykorzystać materiały z tego bloga komercyjnie, napisz na mateusz@h62.pl.</p><hr>", id: "licencja"},
    { title: "Polityka prywatności", content: "<p>Heliocantharus RPG nie używa plików cookies i nie śledzi Cię w żaden sposób. Nie korzystam z narzędzi analitycznych. Na stronie nie ma też żadnych funkcjonalności, które wymagałyby zapisywania plików cookies.</p><p>Jeżeli chcesz zapisać się do newslettera <em>Kwintesencja</em>, pamiętaj że:</p><ul><li>Twój adres e-mail będzie przetwarzał Buttondown, którego używam do wysyłki newslettera. Polityka prywatności Buttondown: <code>https://buttondown.com/legal/privacy</code>.</li><li>Buttondown zbiera przy tym podstawowe informacje, takie jak otwarcie newslettera i kliknięcie linku. Daje mi to wgląd w zainteresowanie poszczególnymi treściami w newsletterze.</li></ul><hr>", id: "polityka-prywatnosci" },
    { title: "AI nie pisze moich tekstów", content: "<p>Teksty na tym blogu oraz newsletter są w 100% napisane przeze mnie.</p><p>Trudno mi znieść generowane treści w fandomie. Nie interesuje mnie, co na temat RPG ma do powiedzenia AI — w razie czego sam ją zapytam. Wolę przeczytać autorski tekst, grę lub komentarz, nawet jeśli będą niedoskonałe i niedopracowane.</p><p>Nie zrozum mnie źle — nie jestem AI-luddystą. Sztuczna inteligencja, w tym LLM-y, to rewolucyjna technologia. Korzystam z niej w pracy, w której bardzo przyspiesza i ułatwia wykonywanie zadań. Google Gemini pomógł mi w zakodowaniu tego bloga.</p><p>Można powiedzieć, że <em>Heliocantharus RPG</em> to mój erpegowy AI-detoks.</p><hr>", id: "ai"}
  ] %}

  {% for section in info_sections %}
  <article class="info-card elevated" style="--index: {{ loop.index0 }};" id="{{ section.id }}">
    <h2>{{ section.title }}</h2>
    {{ section.content | safe }}
  </article>
  {% endfor %}
</section>
