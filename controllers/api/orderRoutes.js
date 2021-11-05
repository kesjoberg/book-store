const router = require('express').Router();
const { Book, Order } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  // console.log(req.body.book_price)
  // console.log(parseInt(req.body.book_price) * parseInt(req.body.quantity))

  try {
    const newOrder = await Order.create({
      ...req.body,
      total: parseInt(req.body.book_price) * parseInt(req.body.quantity),
      user_id: req.session.user_id,
    });

    const betterOrder = newOrder.get({plain:true})

    res.status(200).json(betterOrder);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }

});

router.put('/:id', (req, res) => {
  Order.update(
    req.body,
    {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    })
    .then( (updatedOrder) => res.json(updatedOrder) )
    .catch( (err) => res.json(err));
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const orderData = await Order.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!orderData) {
      res.status(404).json({ message: 'No Order found with this id!' });
      return;
    }

    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
