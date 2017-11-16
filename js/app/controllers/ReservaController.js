class ReservaController {

  constructor() {

    let $ = document.querySelector.bind(document);
    this.inputCalendario = $('#idCalendario');
    this.inputTitle = $('[name=title]');
    this.inputStar = $('[name=start]');
    this.inputEnd =  $('[name=end]');



  }

  adiciona(event) {

    event.preventDefault();


      $(this.inputCalendario).fullCalendar();

        let eventData = {
  						title: this.inputTitle.value,
  						start: new Date(this.inputStar.value) ,
  						end: new Date(this.inputEnd.value)
  					};
  		$('#calendar_2').fullCalendar('renderEvent', eventData, true);


      $('#calendarModal').modal('hide')
        $(document).trigger('sincroniza',  [eventData])


  }


}
