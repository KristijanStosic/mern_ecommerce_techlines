import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    averageRating: {
      type: Number,
      required: true,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    isNewProduct: {
      type: Boolean,
      default: false,
    },
    genre: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Genre',
      },
    },
    category: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Category',
      },
    },
    publisher: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Publisher',
      },
    },
    user: {
      type: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User',
      },
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product