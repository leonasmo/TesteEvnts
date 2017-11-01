var mongoose = require ('mongoose');
mongoose.connect('mongodb://admin:admin@ds241395.mlab.com:41395/lawliet');
var userSchema = new mongoose.Schema({
    username: String,
    email: String	
}, { collection: 'usercollection' }
);


var produtoSchema = new mongoose.Schema({
	name: String,
	categoria: String,
	descricao: String,
	preco: Number
}, {collection: 'produtocollection' }
);
module.exports = { Mongoose: mongoose, UserSchema: userSchema, ProdutoSchema: produtoSchema }