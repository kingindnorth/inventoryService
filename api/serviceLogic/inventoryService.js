const Product = require('../../../productService/models/Product')

// Get product availability
const getProductAvailability = async (params) => {
    const { productId } = params;

    const product = await Product.findById(productId);
    if (!product) {
        return {status:404, message: 'Product not found'};
    }

    return {
        productId: product._id,
        name: product.name,
        description: product.description,
        marketPrice: product.marketPrice,
        ourPrice: product.ourPrice,
        quantity: product.quantity,
        imageUrl: product.imageUrl
    };
};

// Reduce product stock after a purchase
const reduceProductQuantity = async (params,body) => {
    const { productId } = params;
    const { quantityToReduce } = body; // Quantity being bought by customer

    const product = await Product.findById(productId);
    if (!product || product.quantity < quantityToReduce) {
        return {status:400, message: 'Insufficient stock or product not found'};
    }

    product.quantity -= quantityToReduce;
    await product.save();

    return {
        message: 'Stock reduced successfully',
        productId: product._id,
        remainingQuantity: product.quantity
    };
};

// Increase product stock (restock or return)
const increaseProductQuantity = async (params,body) => {
    const { productId } = params;
    const { quantityToAdd } = body;

    const product = await Product.findById(productId);
    if (!product) {
        return {status:404, message: 'Product not found'};
    }

    product.quantity += quantityToAdd;
    await product.save();

    return {
        message: 'Stock increased successfully',
        productId: product._id,
        newQuantity: product.quantity
    };
};

module.exports = {
    getProductAvailability,
    reduceProductQuantity,
    increaseProductQuantity
};
