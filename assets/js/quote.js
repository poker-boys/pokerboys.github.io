function textOfToday() {

  var textOfTodayArray =
  ['<p>No naughty hands allowed.</p>',
  'String 2'];

  document.getElementById('quoteDisplay').innerHTML = textOfTodayArray[Math.floor(Math.random() * textOfTodayArray.length)];
}

textOfToday();