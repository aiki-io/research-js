$(() => {
    $('#name').blur(() => {
        validateName();
    });

    $('#zip').blur(() => {
        validateZip();
    });

    $('#email').blur(() => {
        validateEmail();
    });

    $('#phone').blur(() => {
        validatePhone();
    });


    function validateName() {
        const $name = $('#name');
        const re = /^[a-zA-Z]{2,10}$/;
        if (!re.test($name.val())) {
            $name.addClass('is-invalid');
        } else {
            $name.removeClass('is-invalid');
        }
    }

    function validateZip() {
        const $zip = $('#zip');
        const re = /^[0-9]{5}(-[0-9]{4})?$/;
        if (!re.test($zip.val())) {
            $zip.addClass('is-invalid');
        } else {
            $zip.removeClass('is-invalid');
        }
    }

    function validateEmail() {
        const $email = $('#email');
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (!re.test($email.val())) {
            $email.addClass('is-invalid');
        } else {
            $email.removeClass('is-invalid');
        }
    }

    function validatePhone() {
        const $phone = $('#phone');
        const re = /^\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/;
        if (!re.test($phone.val())) {
            $phone.addClass('is-invalid');
        } else {
            $phone.removeClass('is-invalid');
        }
    }
});
