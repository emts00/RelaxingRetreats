
function gotodealspage() {
    location.href = "deals.html";
}

function subscribe() {
    location.href = "subscribe.html";
}



// function subscribeMessage() {
//  var text =document.getElementById("subscribeThanksMessage");
//  text.display= "block";
//} 



//function displaymessage() {
   // let subscribemessage = document.getElementById("subscribemessage");
//}






// Form js code 

var maxDate = year + '-' + month + '-' + day;
alert(maxDate);
$('#checkinDate').attr('min', maxDate);
$(function () {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;

    // or instead:
    // var maxDate = dtToday.toISOString().substr(0, 10);

    alert(maxDate);
    $('#checkinDate').attr('min', maxDate);
});