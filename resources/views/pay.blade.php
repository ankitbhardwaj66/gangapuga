
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
var options = {
    "key": "rzp_test_lv5v1ZW2w3ZOu3", // Enter the Key ID generated from the Dashboard
    "amount": "{{$donation->amount}}", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Tatva Science",
    "description": "Alchemy for your life.",
    "image": "",
    "order_id": "{{$raz_order->id}}", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "{{route('payment-success')}}",
    "prefill": {
        "name": "{{$donation->name}}",
        "email": "{{$donation->email}}",
        "contact": "{{$donation->phone}}"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.open();
/*document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}*/
</script>