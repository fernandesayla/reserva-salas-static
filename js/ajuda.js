;(function(){
  'use strict'
  $("#ajuda").on('click',function(){


    $.getJSON('http://ceep.herokuapp.com/cartoes/instrucoes', function(instrucoes){
      var ListaAjuda=instrucoes.instrucoes

      ListaAjuda.forEach(function(ajudaAtual){
        controladorDeCartao.adicionaCartao(ajudaAtual.conteudo, ajudaAtual.cor)

      })
    })




  })


})()
