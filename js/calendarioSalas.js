;(function() {
  var initialLocaleCode = 'pt-BR';


  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
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
    defaultDate: '2017-10-12',
    navLinks: true, // can click day/week names to navigate views
    selectable: true,
    selectHelper: true,

    timeFormat: 'H(:mm)',
      locale: 'pt-br',
    select: function(start, end) {
      var title = prompt('Event Title:');
      var eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,

          end: end
        };
        $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
      }
      $('#calendar').fullCalendar('unselect');
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2017-10-01'
      },
      {
        title: 'Long Event',
        start: '2017-10-07',
        end: '2017-10-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-10-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-10-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2017-10-11',
        end: '2017-10-13'
      },
      {
        title: 'Meeting',
        start: '2017-10-12T10:30:00',
        end: '2017-10-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2017-10-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2017-10-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2017-10-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2017-10-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2017-10-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2017-10-28'
      }
    ]
  });

}


 )()
