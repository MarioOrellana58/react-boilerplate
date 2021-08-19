const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js', //punto de entrada del proyecto, este es el default
    output: {               //archivo de salida con el empaquetado
        filename: 'bundle.[fullhash].js',//el hash genera números aleatorios, posibilita 
                                    //que se fuerce a todos los clientes a actualizar el nuevo
                                    //empaquetado en vez del que tenga el navegador en la caché
        path: path.resolve(__dirname, 'dist')//lugar archivo de salida, nodejs path ayuda a concatenar las rutas
                //de manera correcta, debe ser una dirección absoluta
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //qué archivo
                use: 'babel-loader', //quién los procesa
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
    ],
}