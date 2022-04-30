const express = require('express');
const router = require('./src/router/router');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const sass = require('node-sass-middleware');

const app = express();
app.use(logger('combined'));
app.use(router);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/src/views');

app.use('/img', [express.static(`${__dirname}/public/img`)]);

app.use('/css', [express.static(`${__dirname}/public/css`)]);

app.use('/scripts', [express.static(`${__dirname}/public/scripts`)]);

app.use(
  sass({
    src: __dirname + 'public/scss',
    dest: __dirname + 'public/css',
    outputStyle: 'compressed',
    prefix: '/css',
  })
);

app.use('css/', express.static(__dirname + '/public/css'));

app.use(
  '/webfonts',
  express.static(
    `${__dirname}/node_modules/@fortawesome/fontawesome-free/webfonts`
  )
);

app.use('/node_modules', express.static(`${__dirname}/node_modules`));

app.use('/js', [
  express.static(__dirname + '/node_modules/bootstrap/dist/js/'),
  express.static(__dirname + '/public/js'),
]);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
