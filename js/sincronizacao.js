(function() {
  'use strict'

  $.getJSON('http://localhost:3000/reservas',
  function(resposta){


    resposta.cidades.forEach(function(cidade){


     controladorDeSalas.adicionaCidades(cidade.cidade, cidade.cidade_id)



      //  controladorDeCartao.adicionaCartao(cartaoAtual.sala, cartaoAtual.id)
    })

    resposta.salas.forEach(function(sala){
      var evento = {}
      var events = [];

      resposta.reservas.forEach(function(reservas){



        if (reservas.SALA_ID == sala.sala_id){
          evento =   {
              title:reservas.ASSUNTO,
                id:reservas.ID,
              start:reservas.START,
              end:reservas.END

          };
           events.push(evento);


        }

      })


      controladorDeSalas.adicionaSala(sala.sala_id , sala.sala, sala.cidade,  sala.cidade_id , events)


      //  controladorDeCartao.adicionaCartao(cartaoAtual.sala, cartaoAtual.id)
    })



  })





/*  $.getJSON('http://localhost:3000/salas/ + 1',
  function(resposta){
    resposta.salas.forEach(function(sala){


      controladorDeSalas.adicionaSala(sala.sala_id , sala.sala)


      //  controladorDeCartao.adicionaCartao(cartaoAtual.sala, cartaoAtual.id)
    })
  })*/

  $(document).on('precisaSincronizar', function(){
    var listaCartao = []

    $('.cartao').each(function(){

      var cartao={}

      cartao.sala=$(this).find('.cartao-conteudo').text()
      cartao.id=$(this).css('background')
      listaCartao.push(cartao)
      console.log(cartao);
    })



    var mural={reservas: listaReserva,
      usuario:'fernandes.ayla@gmail.com'}

      $.ajax({
        data:mural,
        url:'http://localhost:3000/reservas/salvar',
        method:'POST',
        success:function(resposta){
          console.log('Rolou!', resposta);
        }
        ,error:function(){

          console.log('Deu ruim');
        }
      })

    })
    $("#sync").click(function(){
      $(document).trigger('precisaSincronizar')

    })
  })()
