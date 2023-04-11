const contact = document.getElementsById('contactButton');


contact.addEventListener('submit', showMessage, false)

function showMessage(event) {

    if (event.preventDefault) { event.preventDefault() };
    if (window.event) { window.event.returnValue = false; }

    console.log('hhih')
    document.getElementById("response").innerHTML = "We received your message!";

}