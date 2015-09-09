/**
 * Created by Nem on 9/6/15.
 */
$(document).ready(function () {
    $.notify.defaults({className:'success'});

    $('#submitEmail').on('click', function() {
        debugger;
        var data = {
            email: $('#email').val()
        };

        $.ajax({
            url: 'save_email/',
            data: JSON.stringify(data),
            method: 'POST',
            contentType : 'application/json; charset=utf-8'


        }).success(function (data) {
            $('#submitEmail').notify(data, {position:'bottom-center'});
            debugger;
            console.log(data)
        }).error(function(e){
            console.log(e)
        })
    });
    $('#poster1').click(function () {
        var redirectWindow = window.open('http://mashable.com/2015/03/02/millennial-cord-cutter/', '_blank');
        redirectWindow.location;
    });
    $('#poster2').click(function () {
        var redirectWindow = window.open('http://time.com/money/3963077/streaming-packages-cord-cutting-cable/', '_blank');
        redirectWindow.location;

    });
    $('#poster3').click(function () {
        var redirectWindow = window.open('http://takingnote.blogs.nytimes.com/2015/08/21/have-you-cut-the-cable-cord/', '_blank');
        redirectWindow.location;
    });

});