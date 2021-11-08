const router = require('express').Router();
const {Order, User, Book, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll({
    
    }); 
    const books = bookData.map((book) => book.get({ plain: true }));
  
    // console.log(books)
    res.render('homepage', {
      books,
      logged_in: req.session.logged_in 
    });
  } catch (err) 
  { console.log(err)
    res.status(500).json(err);
  }
});

router.get('/book/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.id, {
      include: [{ model: Comment, include: [User] }]
    });

    const book = bookData.get({ plain: true });
    console.log(req.session.user_id);
    res.render('single-book', {
      book,
      user_id: req.session.user_id,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{model:Order, include: [Book]}, { model: Comment, include: [Book]}],
    });

    const user = userData.get({ plain: true });
    console.log(user)
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/update-comment/:id', withAuth, async (req,res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [{ model: Book }]
    });

    const comment = commentData.get({ plain: true });
    console.log(req.session.user_id);
    res.render('update-comment', {
      comment,
      // user_id: req.session.user_id,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/cart', withAuth, async (req, res) => {
  try {

    console.log("req.session.user_id",req.session.user_id);
    // Find the logged in user based on the session ID
    const orderData = await Order.findAll({ 
      where: { user_id: req.session.user_id},
      include: [{ model: Book }]
    });

    const order = orderData.map((o) => o.get({ plain: true }));

    console.log("*****",order);

    res.render('cart', {
      order: order,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;