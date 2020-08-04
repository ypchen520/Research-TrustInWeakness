module.exports = {
    //Ternary Operator for root path to files when bundling application for production or development.
    publicPath: process.env.NODE_ENV === 'production' ? '/TrashSelector/' : '/'  
}