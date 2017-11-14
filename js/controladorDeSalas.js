var controladorDeSalas=(function() {
  'use strict'


  var contador = $('.cartao').length

    var contadorCidades = $('.pills-tab').length
  function adicionaCidades(nome, cidade_id){

    contadorCidades ++


        var sala = $('<div>').addClass('tab-pane fade show').attr('id','pills'+cidade_id).attr('role','tabpanel')

        if (cidade_id == 1 ) {
          sala.addClass('active')
        }
         var conteudo = $('<div>').addClass('salas').attr('id','salas'+cidade_id)


         sala.append(conteudo).prependTo('#pills-tabContent')

    var cidade = $('<li>').addClass('nav-item nav-cidades')

    var titulo = $('<a>').append(nome).addClass('nav-link').attr('id','pills-home-tab'+cidade_id).attr('data-toggle','pill').attr('role','tab').attr('aria-selected','true').attr('href','#pills'+cidade_id)
    if (cidade_id == 1 ) {
      titulo.addClass('active')
    }
    cidade.append(titulo).prependTo('#pills-tab')



  }

 function adicionaSala(id, nome, cidade, cidade_id, eventos){

   console.log(eventos);
   var sala = $('<div>').addClass('sala')
    var titulo = $('<h2>').append(nome)
    var calendario = $('<div>').addClass('sala').attr('id','calendar_'+id)

    sala.append(titulo).append(calendario).prependTo('#salas'+ cidade_id)
    var events = {
      'events' : eventos
    }

   calendarioSalas.caledario(id, eventos)

 }

  function adicionaCartao(conteudo, cor){
    contador++
  //  var	tipoCartao = decideTipoCartao(conteudo);
    //
    var	tipoCartao = "cartao--textoGrande"
    var cartao = $('<div>').addClass('cartao').addClass(tipoCartao).attr('id','cartao_'+contador).css('background', cor)
    .click(function(event){
      var elemento= $(event.target)
      if(elemento.hasClass('opcoesDoCartao-edita')){
        ehPraEdita(this)
      }

    })


    var btnEdit = $('<button>').addClass('opcoesDoCartao-edita opcoesDoCartao-opcao').attr('data-ref',contador)
    .text('X')

    var divBtnRemove = $('<div>').addClass('opcoesDoCartao')

    var btnRemove = $('<button>').addClass('opcoesDoCartao-remove opcoesDoCartao-opcao').attr('data-ref',contador)
    .text('X').click(removerCartao.removeCartao)
    var tagConteudo = $('<p>').addClass('cartao-conteudo').append(conteudo).attr('contenteditable',false)

    cartao.append(divBtnRemove.append(btnRemove).append(btnEdit)).append(tagConteudo).prependTo('.mural')

    $('.novoCartao-conteudo').val('')



  }
  //window.adicionaCartao = adicionaCartao

  function ehPraEdita(cartao){
    var tagConteudo = $(cartao).find('.cartao-conteudo')
    if(tagConteudo.attr('contenteditable')== 'true'){
      tagConteudo.attr('contenteditable','false')
      tagConteudo.blur()

    }else{
      tagConteudo.attr('contenteditable','true')
      tagConteudo.focus()

    }
    $(document).trigger('precisaSincronizar')


  }
  function	decideTipoCartao(conteudo){
    var	quebras	=	conteudo.split("<br>").length;
    var	totalDeLetras	=	conteudo.replace(/<br>/g,	"	").length;
    var	ultimoMaior	=	"";
    conteudo.replace(/<br>/g,	"	")
    .split("	")
    .forEach(function(palavra){
      if	(palavra.length	>	ultimoMaior.length)	{
        ultimoMaior	=	palavra;
      }
    });
    var	tamMaior	=	ultimoMaior.length;
    //no	mínimo,	todo	cartão	tem	o	texto	pequeno
    var	tipoCartao	=	"cartao--textoPequeno";
    if	(tamMaior	<	9	&&	quebras	<	5	&&	totalDeLetras	<	55)	{
      tipoCartao	=	"cartao--textoGrande";
    }	else	if	(tamMaior	<	12	&&	quebras	<	6	&&	totalDeLetras	<	75)	{
      tipoCartao	=	"cartao--textoMedio";
    }
    return	tipoCartao;
  }





  return {
    adicionaSala:adicionaSala,
    adicionaCidades:adicionaCidades,
    idUltimoCartao:contador,

  }


})()
