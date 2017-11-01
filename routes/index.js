var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cadastro', function(req, res, next) {
  res.render('produtocadastro');
});

/* GET Userlist page. */
router.get('/produtolist', function(req, res) {
   var db = require("../db");
   var Users = db.Mongoose.model('produtocollection', db.ProdutoSchema, 'produtocollection');
   Users.find({}).lean().exec(
      function (e, docs) {
         res.render('produtolist', { "produtoList": docs });
   });
});
/* POST to Add User Service */
router.post('/addproduto', function (req, res) {

    var db = require("../db");
	console.log (req.body)
    var nomeProduto = req.body.nome;
    var categoriaProduto = req.body.categoria;
	var descricaoProduto = req.body.descricao;
	var precoProduto = req.body.preco;

    var produtos = db.Mongoose.model('produtocollection', db.ProdutoSchema, 'produtocollection');
    var produto = new produtos({ name: nomeProduto, categoria: categoriaProduto, descricao: descricaoProduto, preco: precoProduto });
    produto.save(function (err) {
        if (err) {
            console.log("Error! " + err.message);
            return err;
        }
        else {
            console.log("Post saved");
            res.redirect("produtolist");
        }
    });
});
module.exports = router;
