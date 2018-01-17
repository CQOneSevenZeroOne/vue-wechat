const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name]-[hash]",
		path: path.resolve(__dirname, 'public')
	},
	resolve: {
		alias: {
			vue: "vue/dist/vue.js",
			socketClient: "socket.io-client/dist/socket.io.js"
		}
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.vue$/,
			use: 'vue-loader'
		}, {
			test: /\.(png|jpg|gif|jpeg)$/,
			use: 'url-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './template/index.html'
		})
	],
	devServer: {
		contentBase: './public',
		inline: true,
		port: 3366
	},
	watch: true
}