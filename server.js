const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const products = [
    { id: 1, name: 'Classic T-Shirt', price: 19.99, description: 'A comfortable everyday tee.' },
    { id: 2, name: 'Wireless Headphones', price: 79.99, description: 'Noise-reducing over-ear headphones.' },
    { id: 3, name: 'Coffee Mug', price: 12.5, description: 'Ceramic mug for your favorite drink.' },
    { id: 4, name: 'Backpack', price: 49.99, description: 'Durable backpack for work or travel.' }
];

const cart = [];

app.get('/', (req, res) => {
    res.render('index', { products, cartCount: cart.length });
});

app.post('/cart/add', (req, res) => {
    const { productId } = req.body;
    const product = products.find((item) => item.id === Number(productId));
    if (product) {
        cart.push(product);
    }
    res.redirect('/cart');
});

app.get('/cart', (req, res) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    res.render('cart', { cart, total });
});

app.post('/cart/remove', (req, res) => {
    const { index } = req.body;
    const idx = Number(index);
    if (!Number.isNaN(idx) && idx >= 0 && idx < cart.length) {
        cart.splice(idx, 1);
    }
    res.redirect('/cart');
});

app.listen(port, () => {
    console.log(`Shopping app running at http://localhost:${port}`);
});
