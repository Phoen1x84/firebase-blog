const path = require('path');

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './../public/dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}