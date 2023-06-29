# Gearzone

> Frontend mock up for ecommerce web application.It combines functionality with aesthetics, providing a delightful shopping experience. Its user-friendly interface, efficient product filtering, and convenient cart management make finding and purchasing your desired products a breeze. The application also implements admin view where one can view add and edit products.
> React js served as frontend framework with Redux as the state management tool.

## [Hosted URL link](https://gearzone.netlify.app/)

### Features

- [x] Landing Home page with carousel and product cards of different category.
- [x] Filter products on the basis of category,color,price and sports.
- [x] Simple and efficient cart
- [x] Admin panel with CRUD features

### Technology Stack Used

| Particulars         | Version    |
| ------------------- | ---------- |
| @emotion/react      | 11.11.1    |
| @emotion/styled     | 11.11.0    |
| @mui/icons-material | 5.11.16    |
| @mui/material       | 5.13.6     |
| @reduxjs/toolkit    | 1.9.5      |
| axios               | 1.4.0      |
| bootstrap           | 5.3.0      |
| react               | 18.2.0     |
| react-bootstrap     | 2.8.0      |
| react-dom           | 18.2.0     |
| react-redux         | 8.1.1      |
| react-router-dom    | 6.14.0     |
| react-scripts       | 5.0.1      |
| react-toastify      | 9.1.3      |
| redux-thunk         | 2.4.2      |
| styled-components   | 6.0.0-rc.6 |

### Directory Structure

```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── api
    │   └── index.js
    ├── assets
    │   └── brand
    │       ├── brand.png
    │       ├── brand_mob.png
    │       └── brand_pc.png
    ├── components
    │   ├── Carousel.js
    │   ├── CartDrawer.js
    │   ├── Categories.js
    │   ├── FilterDrawer.js
    │   ├── Navbar.js
    │   ├── Notification.js
    │   └── Product.js
    ├── index.css
    ├── index.js
    ├── netlify.toml
    ├── pages
    │   ├── AdminHome.js
    │   ├── Home.js
    │   └── Store.js
    └── redux
        ├── actions
        │   ├── admin.js
        │   ├── cart.js
        │   └── products.js
        ├── constants
        │   └── action-types.js
        ├── reducers
        │   ├── admin.js
        │   ├── cart.js
        │   ├── index.js
        │   └── products.js
        └── store.js
```
