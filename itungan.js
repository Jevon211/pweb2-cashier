
function ordering(){
    var nota = document.form2;
     var priceMacbook = 1299 * eval(nota.prcMacbook.value);
     var priceIphone = 749 * eval(nota.prcIphone.value);
    var priceIpad = 899 * eval(nota.prcIpad.value);
   
    var TotalPrice = priceMacbook + priceIphone + priceIpad;
if (TotalPrice > 5000){
nota.Total.value = TotalPrice;
nota.Discount.value = 1000;
nota.Paid.value = TotalPrice - eval(nota.Discount.value);
 } else {
    nota.Total.value = TotalPrice;
    nota.Discount.value = 0;
    nota.Paid.value = TotalPrice - eval(nota.Discount.value);
 }
}
function resetForm(){
    document.form2.reset();
}