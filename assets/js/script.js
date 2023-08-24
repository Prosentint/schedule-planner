// Only runs script if all html elements have loaded
$(document).ready(function () {

    // checks if any save button is clicked
    $('.saveBtn').on('click', function () {
    
        // get the text saved and what specific timeblock it was in
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // save to local storage
        localStorage.setItem(time, text);

    })

    // function to check the current hour and compare each time block to it, then setting each time blocks class to the appropriate time
    function hourChecker() {
        var currentTime = dayjs().hour();

        // cycles through all of the time blocks
        $('.time-block').each(function () {
            // gets the hour number in the id of currently cycled time block
            var numBlock = parseInt($(this).attr('id').split('-')[1]);

            // checks wether currently cycled time block is future, past or present, and sets the classes appropriatly
            if (numBlock < currentTime) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else if (numBlock === currentTime) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
                
            }
        })

    }

    // runs hour checker program
    hourChecker();
    // reruns hourchecker program every 15 seconds
    setInterval(hourChecker, 1000*15);
    
    // Displays any saved data for every time block if there is any upon page load
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    // displays the current date in the header of the page.
    $('#currentDay').text(dayjs().format('dddd, MMMM D YYYY'));

  });
  