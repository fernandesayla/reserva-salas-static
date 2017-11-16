var calendarioSalas=(


  function caledario(id, eventos) {
    console.log(JSON.stringify(eventos));
    'use strict'





    var initialLocaleCode = 'pt-BR';



    $('#calendar_'+id).fullCalendar({
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
      select: function(start, end, jsEvent, view ) {


        
        $('[name=start]', '#calendarForm').val(start);
        $('[name=end]', '#calendarForm').val(end);
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

        popula('#calendarForm', calEvent)
        $('#eventUrl').attr('href',event.url);
        $('#calendarModal').modal();


        function popula(frm, data) {
          $.each(data, function(key, value){
            $('[name='+key+']', frm).val(value);
          });
        }
        // change the border color just for fun
        //$(this).css('border-color', 'red');

      },
      events: eventos
      });






      return {
        caledario:caledario

      }

    }




  )()
