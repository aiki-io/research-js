$(() => {
   const loanForm = $('#loan-form');

   $('#loading').hide();
   $('#results').hide();
   
   loanForm.submit( (e) => {
       e.preventDefault();
       $('#loading').show();
       setTimeout(() => {
        $('#loading').hide();
        $('#results').show();
       }, 2000);
       calculateResults();
   });
});

const calculateResults = () => {
    const $amount = $('#amount');
    const $interest = $('#interest');
    const $years = $('#years');
    const $monthlyPayment = $('#monthly-payment');
    const $totalPayment = $('#total-payment');
    const $totalInterest = $('#total-interest');

    const principal = parseFloat($amount.val());
    const calculatedInterest = parseFloat($interest.val()) / 100 / 12;
    const calculatedPayments = parseFloat($years.val()) * 12;

    const x = Math.pow(1+ calculatedInterest, calculatedPayments);
    const monthly =  (principal * x * calculatedInterest) / (x-1);
    if (isFinite(monthly)) {
        $monthlyPayment.val(monthly.toFixed(2));
        $totalPayment.val(monthly * calculatedPayments.toFixed(2));
        $totalInterest.val((monthly * calculatedPayments - principal).toFixed(2));

    } else {
        showError('Please check your numbers');      

    }

};

const showError = (msg) => {
    const errDiv = $('<div></div>');
    errDiv.addClass('alert alert-danger');
    errDiv.text(msg);
    const card = $('.card');
    card.prepend(errDiv);
    setTimeout(() => {
        errDiv.remove();
    }, 3000);
};