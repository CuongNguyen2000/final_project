$(document).ready(() => {
    $('#newPwdForm').on('submit', e => {
        e.preventDefault();

        var formData = $('#newPwdForm').serializeArray();
        console.log(formData);

        var data = {};

        $.each(formData, function (i, v) {
            data['' + v.name + ''] = v.value;
        });

        if (checkInput()) {
            doSubmit(data);
        } else {
            $('#msgSuccess').css('display', 'none');
        }
    });

    function checkInput() {
        const input = $('#pwdInput').val();
        if (!input) {
            $('#msg').css('display', 'block');
            $('#msg').html('Please enter your new password');
            return false;
        } else {
            $('#msg').css('display', 'block');
            $('#msg').html('');
            return true;
        }
    }

    const userId = $('#userId').val();
    const token = $('#token').val();

    function doSubmit(data) {
        $.ajax({
            url: `/u/password-reset/${userId}/${token}`,
            method: 'post',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
        })
            .done(function (res) {
                $('#msgSuccess').html(res.success);
                $('#msgSuccess').css('display', 'block');
                $('#msg').css('display', 'none');
            })
            .fail(function (res) {
                $('#msg').html(res.responseJSON.err);
                $('#msg').css('display', 'block');
                $('#msgSuccess').css('display', 'none');
            });
    }
});
