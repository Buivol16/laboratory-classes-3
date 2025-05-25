const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

const productsRoutes = require('./routing/product')
app.use('/products', productsRoutes);

app.get('/', (req, res) => {
  res.render('index', {
    headTitle: 'Home',
    menuLinks: require('./constants/navigation').MENU_LINKS,
    activeLinkPath: '/',
    path: '/'
  });
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running at http://localhost:${PORT || 3000}`);
});