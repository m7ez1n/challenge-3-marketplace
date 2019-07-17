const Ad = require('../models/Ad')
const Purchase = require('../models/Purchase')
const User = require('../models/User')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    const purchase = await Purchase.create({
      content,
      ad,
      author: user._id
    })

    return res.json(purchase)
  }
}

module.exports = new PurchaseController()
