class ReservaController {

  constructor() {

    let $ = document.querySelector.bind(document);
    this.inputCalendario = $('#idCalendario');
    this.inputTitle = $('[name=title]');
    this.inputStar = $('[name=start]');
    this.inputEnd =  $('[name=end]');

    this.inputSalaId = $('[name=salaId]');
    this.inputCidade = $('[name=cidade]');
    this.inputSala =  $('[name=sala]');



  }

  adiciona(event) {

    event.preventDefault();
   

    //  $(this.inputCalendario).fullCalendar();

    let eventData = {
      title: this.inputTitle.value,
      start: new Date(this.inputStar.value) ,
      end: new Date(this.inputEnd.value),
      sala:  this.inputSala.value,
      sala_id:  this.inputSalaId.value,
      cidade:  this.inputCidade.value
    };
    $('#calendar_'+this.inputSalaId.value).fullCalendar('renderEvent', eventData, true);


    $('#calendarModal').modal('hide')
    $(document).trigger('sincroniza',  [eventData])


  }




}
