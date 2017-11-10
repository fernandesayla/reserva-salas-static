var removerCartao=(function() {
  'use strict'

  var botoes =  document.querySelectorAll('.opcoesDoCartao-remove')

  for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', removeCartao)
  }
  function removeCartao(){
    var cartao = document.querySelector('#cartao_'+this.dataset.ref)
    cartao.classList.add('cartao--some')
    setTimeout(function(){
      cartao.remove()
      $(document).trigger('precisaSincronizar')
    }, 200)


  }

  return {
      removeCartao:removeCartao,

  }

})()
