;(function() {
'use strict'

document.querySelector("#mudaLayout").addEventListener("click",	function(){
  //Pega	o	elemento	com	a	class="mural"
  var	mural	=	document.querySelector(".mural");
  //Tira	ou	coloca	a	classe
  mural.classList.toggle("mural--linha");
  //Muda	o	texto	do	botão

  this.classList.toggle("icon--linha");
  /*if	(mural.classList.contains("mural--linha")){
    //this.textContent	=	"Blocos";

    //  this.classList.add('icon-blocos')


  }	else	{

  //this.classList.add('icon-linhas')
    // this.textContent	=	"Linhas";
  }*/
})


})()
