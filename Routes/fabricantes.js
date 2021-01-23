var express = require('express');
var Fabricante = require('../Model/Fabricante');
var router = express.Router();

// Criando rota para Buscar todos os fabricantes
router.get('/', function(req, res) {
    (async () => {
        const todosFabricantes = await Fabricante.findAll();
        res.json({todosFabricantes});
    })();
});

// Criando rota para Buscar um determinado Fabricante
router.get('/:id', function(req, res) {
    // Criando uma variável que recebe o id por parâmetro
    var id = req.params.id;
    
    //Função assíncrona para buscar o fabricante que foi passado por parâmetro
    (async () => {
    const fabricanteEncontrado = await Fabricante.findOne({ where: { id: id } });
    if (fabricanteEncontrado === null) {
        res.json({Message: "Não Encontramos Nenhum Fabricante"});
    } else {
        res.json({nomeFabricante: fabricanteEncontrado.nomeFabricante, codigoFabricante: fabricanteEncontrado.codigoFabricante});
        console.log(fabricanteEncontrado);
    }
    })();

  });

// Criando rota para Adicionar Fabricantes
router.post('/adicionar', (req, res) => {
    (async () => {
    let nomeFabricante = req.body.nomeFabricante;
    let codigoFabricante = req.body.codigoFabricante;
    
    if(nomeFabricante !== null && codigoFabricante !== null){
        const fabricanteObj = await Fabricante.create({ nomeFabricante: nomeFabricante, codigoFabricante: codigoFabricante });
        res.json({Message: "Fabricante Adicionado com Sucesso!"});
    } else if(nomeFabricante === null) {
        res.json({Message: "Você esqueceu de colocar um nome!"});
    } else if(codigoFabricante === null) {
        res.json({Message: "Você esqueceu de colocar um código!"});
    } else {
        res.status(400).send('Bad Request')
    }

    })();
});


// Criando rota para Atualizar Fabricantes
router.put('/atualizar', (req, res, next) => {
    // Criando uma variável que recebe o id por parâmetro
    var id = req.body.id;
    var nomeFabricante = req.body.nomeFabricante;
    var codigoFabricante = req.body.codigoFabricante;
    
    //Função assíncrona para Atualizar o Fabricante que foi passado por parâmetro
    (async () => {
    if (id === null) {
        res.json({Message: "Não Encontramos Nenhum Fabricante"});
    } else if(nomeFabricante === null) {
        res.json({Message: "Você esqueceu de colocar um nome!"});
    } else if(codigoFabricante === null) {
        res.json({Message: "Você esqueceu de colocar um código!"});
    } else {
        const fabricanteEncontrado = await Fabricante.update({ 
            nomeFabricante: nomeFabricante,
            codigoFabricante: codigoFabricante
         }, {where: {id : id} });

        const fabricanteAtualizado = await Fabricante.findOne({ where: { id: id } });
        res.json({nomeFabricante: fabricanteAtualizado.nomeFabricante, codigoFabricante: fabricanteAtualizado.codigoFabricante});
        console.log(fabricanteAtualizado);
    }
    })().catch(next);
});


// Criando rota para Deletar Fabricantes
router.delete('/deletar', (req, res, next) => {
    var id = req.body.id;
    //Função assíncrona para Atualizar o Fabricante que foi passado por parâmetro
    (async () => {
        if (id === null) {
            res.json({Message: "Não Encontramos Nenhum Fabricante"});
        } else {           
            Fabricante.destroy({ where: { id: id }});
            res.json({Message: "Fabricante deletado com sucesso!"});
        }
    })().catch(next);;
})



module.exports = router;