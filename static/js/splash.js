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
            url: '/save_email',
            data: data

        })
    })
});