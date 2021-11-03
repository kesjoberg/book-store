const router = require('express').Router();
const { Book } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({
      include: [
        {
          model: Book,
          attributes: ['title', 'author', 'bookCover'],
        },
      ],
    });
   
    const books = bookData.map((book) => book.get({ plain: true }));

   
    res.render('homepage', {
      ...books,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: Book,
          attributes: ['title', 'author', 'bookCover', 'description'],
        },
      ],
    });

    const book = bookData.get({ plain: true });

    res.render('book', {
      ...book,

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cart', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const orderData = await Order.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Order }],
    });

    const order = orderData.get({ plain: true });

    res.render('cart', {
      ...order,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;