/**
 * Created by Nem on 9/6/15.
 */
$(document).ready(function () {

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
            debugger;
            console.log(data)
        }).error(function(e){
            console.log(e)
        })
    })
});