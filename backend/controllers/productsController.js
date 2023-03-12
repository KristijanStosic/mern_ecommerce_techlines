import Product from '../models/Product.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  const products = await Product.find({})

  if (!products?.length) return res.status(404).json({ message: 'No products found' })

  res.status(200).json(products)
}

export { getProducts }