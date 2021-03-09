const startHour = 9;
const endHour = 17;
const init = function () {
    const $currentDay = $('#currentDay');
    $currentDay.text(moment().format('dddd, MMMM Do'))
    renderTimeBlocks();
}
const renderTimeBlocks = function () { 
    $('.container').empty()
    const currentHour = moment().hour()
    console.log(currentHour);
    for (let hour = startHour; hour <= endHour; hour++) {
        let hourStr = moment(hour, 'H').format('h:00a').padStart(7);
        console.log(hour, hourStr);
        let $row = $('<div class="row time-block">');
        let $hour = $('<div class="hour">');
        $hour.text(hourStr);
        let $description = $('<textarea class="description">');
        let $saveBtn = $('<button class="saveBtn"><i class="fas fa-save"></i></button>');
        $saveBtn.on('click', function(){
            console.log(hour);
        })
        $row.append($hour, $description, $saveBtn);
        console.log($row);
        $('.container').append($row)
    }
}
init()