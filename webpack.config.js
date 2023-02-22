const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
	entry:{
	'app': './src/index.js',
	'assests/js/banner':'.src/assets/js/banner.js',
},
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, '/app'),
		filename: '[name].js'
	},
	devServer: {
		static: path.join(__dirname, '/app'),
		port: 8081,
		compress: true,
		devMiddleware: {
			writeToDisk: true,
		},

	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			// rules داخل مصفوفة واحدة تسمى  rules  طيف مضع الـ 
			{
				test: /\.(sass|css|scss)$/,
				use: [
					
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader",
				  options: {
					presets: ['@babel/preset-env']
				  }
				}
			  },{
			

				test: /\.(svg|eot|woff|woff2|ttf)$/,
		
				exclude: /images/,
		
				use: [
		
				  {
		
					loader: "file-loader", 
		
					options: {
		
					  name: '[name].[ext]',
		
					  outputPath: "assets/fonts",
		
					}
		
				  }
		
				]
		
			  },
		],

	},
	// plugins داخل مصفوفة واحدة تحمل الاسم  plugin  تضع جميع الـ 
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new OptimizeCSSAssetsPlugin({}),
		new MiniCssExtractPlugin({
			filename: "assets/css/style.css"
		}),
		new HtmlWebpackPlugin({
			filename: "components/Button.html",
			template: "./src/components/Button.html",
	        chunks:['app']
		  }),new HtmlWebpackPlugin({
			filename: "components/textfield.html",
			template: "./src/components/textfield.html",
			chunks:['app']
		  }),
		  new HtmlWebpackPlugin({
			filename: "components/card.html",
			template: "./src/components/card.html",
			chunks:['app']
		  }),
		  new HtmlWebpackPlugin({
			filename: "components/banner.html",
			template: "./src/components/banner.html",
			chunks:['app']
		  }),
	],

}