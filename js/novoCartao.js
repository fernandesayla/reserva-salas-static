
;(function() {
  'use strict'


  $('.novoCartao').on('submit',function(event){


    event.preventDefault()
    var conteudo = $('.novoCartao-conteudo').val().trim().replace(/\n/g,'<br>')
    if(conteudo){
      controladorDeCartao.adicionaCartao(conteudo)
      $(document).trigger('precisaSincronizar')
    }





})

})()
