//Import
const { fromEvent } = rxjs;

//Get element
const kotak = document.getElementsByClassName('kotak');

//Declare event 
const kotak_clicks = fromEvent(kotak, 'click');

//Subscribe
kotak_clicks.subscribe(() => console.log('klik'));