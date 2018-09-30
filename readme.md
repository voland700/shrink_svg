<h1>Создание простых SVG спрайтов</h1>
Для установки необходимо установить менеджер пакетов <a href="https://nodejs.org/en/" target = "_blank"><b>npm</b></a>.
<ol>
  <li>
    <p>Скачать файлы из данного репозитория.</p>
     </li>
  <li>
    <p>Устанавливаем <b>gulp</b> глобально (если конечно он еще не установлен...).</p>
    <pre><code>npm install gulp -g</code></pre>
  </li>
  <li>
    <p>Устанавливаем npm-пакеты.</p>
    <pre><code> npm i</code></pre>
  </li>
  <li>
    <p>Помещаем SVG - файлы  в папку <b>svg</b>. 
  </li>
  <li>
    <p>Запускаем.</p>
    <pre><code> gulp svg</code></pre>
  </li>
</ol>
<p>В результате получаем в папке <b>media</b> файл <em>sprite.svg</em> спрайт из SVG-файлов, а так же <em>svg_sprite.css</em> - со стилями. Атрибуты <em>fill</em> и <em>stroke</em> из  созданного SVG спрайта не удалаяются.</p>
