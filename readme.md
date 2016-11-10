## Лэндинг для [gladimvmeste.ru](http://gladimvmeste.ru/)

Установка: выполнить в папке проекта: `npm i`.

### Парадигма

- Используется именование классов и файлов по БЭМ.
- Есть глобальные файлы: css, js, шрифты, картинки, sass-файлы (переменные, глобальная стилизация...).
- Есть диспетчер подключений `scss/style.scss`. Если в нем импортирован sass-файл какого-либо блока, этот блок считается используемым.


## Назначение папок

```
/				  Исходные файлы и здесь работает сервер автообновлений.
build/			 Сюда собирается проект
fonts/      	   Шрифты проекта (никак не обрабатываются)
img/          	 Глобальные картинки (обрабатываются из корня этой папки плюс подпапки)
js/           	 Глобальные js-файлы (обработается только если существует и не пустой), фреймворки (только копируются, могут быть подключены вручную)
scss/              Диспетчер подключений, глобальные стили и стили блоков
index.html 		Главная страница проекта

```


## Выгрузка на gh-pages

Содержимое проекта можно быстро «выгрузить» на [gh-pages](https://help.github.com/articles/user-organization-and-project-pages/#project-pages) (запушить содержимое папки `build/` в ветку `gh-pages` репозитория проекта). Адрес для просмотра будет таким: http://USERNAME.github.io/PROJECTNAME/ (полное повторений файловой структуры папки `build/`).
