function textOfToday() {

  var textOfTodayArray =
  ['No naughty hands allowed.',
  'String 2', 
  '#bazzing it 24/7',
  ];

  document.getElementById('quoteDisplay').innerHTML = textOfTodayArray[Math.floor(Math.random() * textOfTodayArray.length)];
}

textOfToday();