# Suit
SUITME – одноименный одностраничный приложение-сайт, призванный создать удобный сервис для аренды, покупки и подборки комфортного и элегантного костюма/смокинга для предстоящего мероприятия.

Ссылка на репозиторий(https://github.com/DrebnitskyKirill/Suit)

Над проектом работали:
- Дребницкий Кирилл(TL)
- Поспелов Руслан
- Гринец Сергей 
#### Клиентская часть:
- Шапка сайта
- Главная с выбором мероприятия
- Информационный блок
- Модальное окно с регистрацией/авторизацией
- У каждого товара отдельная 
- Слайдер фотографий
- Корзина с общей стоимостью заказа
#### Панель управления:
- Просмотр заказа на почте администратора
- Форма добавления товара
- Поиск и редоктирование товара

## Стек технологий:
JavaScript
**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express, Sessions, Bcrypt, Cors

**Front**: React + Redux, Redux THUNK, SVG, HTML5, SCSS/CSS, UI Kit

## Планы развития:

* Переработанный дизайн
* Добавление функции покупки товаров
* Полнофункциональное внедрение оплаты
* Адаптация приложения под все виды устройств

### Установка:
В директории 2 папки:

* **server/** Отвечает за back-end. 
   * cd server
   * npm i
   * npm run dbr
   * npm run dev
* **client/** - front-end. 
   * cd client 
   * npm i
   * npm start
