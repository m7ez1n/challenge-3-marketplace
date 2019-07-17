const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const AdSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  purchaseBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Purchase'
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

AdSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Ad', AdSchema)
