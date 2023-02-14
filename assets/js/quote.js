function textOfToday() {

  var textOfTodayArray = ['test 1', 'String 2'];

  document.getElementById('quoteDisplay').innerHTML = textOfTodayArray[Math.floor(Math.random() * textOfTodayArray.length)];
}

textOfToday();