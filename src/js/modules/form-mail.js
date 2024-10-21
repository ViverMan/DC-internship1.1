
function validate() {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const input = document.querySelector('.sub-input');
    input.addEventListener('input', onInput);
    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    function onInput() {

        let iconConfirm = document.querySelector('.icon--confirm');
        let iconError = document.querySelector('.icon--error');


        if (isEmailValid(input.value)) {
            input.style.borderColor = '#BEDB39';

            //--- меняю иконки валидации---//
            iconConfirm.classList.add('display-block');
            iconError.classList.remove('display-block');

            const checkbox = document.getElementById('id1');
            document.querySelector('.sub-btn').onclick = func;

            function func(event) {
                //--- проверка по клику нажат чекбокс или нет --- //
                if (checkbox.checked) {
                    //--- если true меняю bg формы отправки --- //
                    document.querySelector('.subscription__form').classList.add('subscription__form_disp-none');
                    document.querySelector('.subscription__form_confirm').classList.add('subscription__form_disp-block');
                }
                event.preventDefault();
            }
        }
        // -- смотрю что в value и меняю бордеры, удаляю иконки ---//
        else if (input.value == '') {
            input.style.border = '2px solid white';
            iconError.classList.remove('display-block');
            iconConfirm.classList.remove('display-block');
        }
        else {
            input.style.borderColor = '#FFAD20';
            iconError.classList.add('display-block');
        }
    }

    input.addEventListener('input', onInput);

}

export default validate;
