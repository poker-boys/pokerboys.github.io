function textOfToday() {

  var textOfTodayArray =
  ['No naughty hands allowed.',
  'Trust the algorithm', 
  '#bazzing 24/7',
  'A Peloton Subsidiary',
  'just poker (no axe throwing)',
  'spider plants improve air quality',
  'are you here because pokerstars needs updating?',
  'but where are we playing poker?',
  'brb honking on a crack pipe'
  ];

  document.getElementById('quoteDisplay').innerHTML = textOfTodayArray[Math.floor(Math.random() * textOfTodayArray.length)];
}

textOfToday();