var calendarioSalas;

calendarioSalas =  function caledario(id,sala,cidade,eventos) {
    //console.log(JSON.stringify(eventos));
    'use strict'

    var initialLocaleCode = 'pt-BR';
    var calendarid = '#calendar_'+id
  /*  console.log(sala);
    console.log(eventos);*/

    $(calendarid).fullCalendar({
      header: {
        right: '',
        center: 'title',
        left: ''
      },
      height: 700,
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        //  dow: [ 1, 2, 3, 4, 5 ], // Monday - Thursday

        start: '08:00', // a start time (10am in this example)
        end: '20:00', // an end time (6pm in this example)
      },
      minTime: '08:00',
      locale: initialLocaleCode,

      maxTime: '20:00',
      defaultView: 'agendaDay',

      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,

      timeFormat: 'H(:mm)',
      locale: 'pt-br',
      select: function(start, end, jsEvent, view) {

      /*  console.log(jsEvent);
        console.log(view);
        console.log(calendarid);
        console.log(sala);
        console.log(eventos);

        console.log(this);*/
        $('[name=salaId]', '#calendarForm').val(id);
        $('[name=cidade]', '#calendarForm').val(cidade);
        $('[name=sala]', '#calendarForm').val(sala);
        $('[name=title]', '#calendarForm').val(jsEvent.title);
        $('[name=start]', '#calendarForm').val(moment(start).format("MM/DD/YYYY HH:mm"));
        $('[name=end]', '#calendarForm').val(moment(end).format("MM/DD/YYYY HH:mm"));
        $('#eventUrl').attr('href',event.url);
        $('#calendarModal').modal();


      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      eventClick: function(calEvent, jsEvent, view) {

        /*alert('Event: ' + calEvent.title);
        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        alert('View: ' + view.name);
        */
        $('#modalTitle').html(calEvent.title);
        //     $('#modalBody').html(calEvent.title + ' - ' + calEvent.start + ' - ' + calEvent.end);
        //   $('#modalBody').html(calEvent.title + ' - ' + calEvent.start + ' - ' + calEvent.end);
        //   $('#modalBody').html(calEvent.title + ' - ' + calEvent.start + ' - ' + calEvent.end);

      //  popula('#calendarForm', calEvent)$('[name=cidade]', '#calendarForm').val(cidade);
    /*  console.log(calEvent);*/
      $('[name=salaId]', '#calendarForm').val(calEvent.sala_id);
      $('[name=sala]', '#calendarForm').val(calEvent.sala);
      $('[name=cidade]', '#calendarForm').val(calEvent.cidade);
      $('[name=cidade_id]', '#calendarForm').val(calEvent.cidade_id);
      $('[name=title]', '#calendarForm').val(calEvent.title);
      $('[name=start]', '#calendarForm').val(moment(calEvent.start).format("MM/DD/YYYY HH:mm"));
      $('[name=end]', '#calendarForm').val(moment(calEvent.end).format("MM/DD/YYYY HH:mm"));

        $('#eventUrl').attr('href',event.url);
        $('#calendarModal').modal();


        function popula(frm, data) {
          $.each(data, function(key, value){
            $('[name='+key+']', frm).val(value);
          });
        }
        // change the border color just for fun
        //$(this).css('border-color', 'red');

      },eventRender: function(event, element, view) {
        //  element.attr("cidade",event.cidade).attr("sala",event.sala)

    },
      events: eventos
      });






      return {
        caledario:caledario

      }

    }()
