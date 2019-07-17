const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const PurchaseSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

PurchaseSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Purchase', PurchaseSchema)
