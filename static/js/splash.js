/**
 * Created by Nem on 9/6/15.
 */
$(document).ready(function () {
    $.notify.defaults({className:'success'});

    $('#submitEmail').on('click', function() {

        //var expression ="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b";
        var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        debugger;

        if(re.test($('#email').val())) {
            var data = {
                email: $('#email').val()
            };

            $.ajax({
                url: 'save_email/',
                data: JSON.stringify(data),
                method: 'POST',
                contentType: 'application/json; charset=utf-8'


            }).success(function (data) {
                $('#submitEmail').notify(data, {position: 'bottom-center'});
                debugger;
                console.log(data)
            }).error(function (e) {
                console.log(e)
            })
        } else {
            $('#email').notify("Please enter a valid email", {position:'bottom-center'});
        }
    })
});