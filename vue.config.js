module.exports = {
    //Ternary Operator for root path to files when bundling application for production or development.
    publicPath: process.env.NODE_ENV === 'production' ? '/TrashSelector/' : '/',
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Trash Selector';
            args[0].meta = {viewport: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'};

         return args;
    })
    }
}