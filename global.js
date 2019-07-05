function countDown (){

  var today=new Date ();
  var eventDate = new Date ("Jul 25, 2019 23:37:25");

  var currentTime= today.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime-currentTime;

  var seconds= Math.floor(remTime/1000);
  var minutes = Math.floor (seconds/60);
  var hours = Math.floor (minutes/60);
  var days = Math.floor (hours/60);

  hours= hours%24;
  minutes%=60;
  seconds%=60;

  days = (days<10) ? "0"+days:days;
  hours = (hours<10) ? "0"+hours:hours;
  minutes = (minutes<10) ? "0"+minutes:minutes;
  seconds = (seconds<10) ? "0"+seconds:seconds;


  document.getElementById("days").innerHTML=days;
  document.getElementById("hours").innerHTML=hours;
  document.getElementById("minutes").innerHTML=minutes;
  document.getElementById("seconds").innerHTML=seconds;

 setTimeout(countDown, 1000);
}
countDown();