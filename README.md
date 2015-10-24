# Archie

Блог на nodejs с открытым исходным кодом

## Описание

1. Использует фреймверк **express**
2. База данных **Mongodb**
3. Шаблонизатор **Jade**
4. **CoffeeScript** и **Stylus** компилируемый в **js** и **css** при помощи **gulp**
5. Модульный **javascript** на клиенте - **Webpack**

## Установка для Linux Mint (Ubuntu)

Устанавливаем базу данных **Mongodb**:

```bash
$ sudo apt-get install mongodb
```

Клонируем проект с **github**'а:

```bash
$ git clone https://github.com/archieDeveloper/archie.git
```

Переходим на ветку **test**, там лежат самые свежие файлы:

```bash
$ git checkout test && git pull
```

Устанавливаем все нужные модули через пакетный менеджер **npm**:

```bash
$ npm i
```

Также потребуются глобальные модули:

```bash
$ sudo npm i -g nodemon coffee-script gulp webpack
```

Теперь когда все готово для запуска, можно стартовать сборщик проекта и сервер **nodejs**:

```bash
$ gulp --require coffee-script/register
$ NODE_PATH=. nodemon ./bin/www.coffee
```