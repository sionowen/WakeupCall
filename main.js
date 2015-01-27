//put all dom manipulation in the document ready.
$(document).on('ready', function() {

  var outerShell = $('<div class="outershell"></div>');
  
  var innerShell = $('<div class="innershell"></div>');

  var amPmIndicator = $('<div class="ampmindicator">.</div>');

  var clockScreen = $('<div class="clockscreen"></div>');

  var leftLabels = $('<div class="leftlabels">PM</div>');

  var autoLabels = $('<div class="autolabels">AUTO</div>')

  var clockText = $('<div class="clocktext">12 : 17</div>');

  var amLabelFrequencies = $('<div class="amlabelfrequencies"></div>');

  var labelsAm = ["AM", "53", "60", "70", "90", "110", "140", "170", "KHz"]

  var labelsAmEls = labelsAm.map(function(labelAm){
  	return $("<span>" + labelAm + "</span>");
  });
  var fmLabelFrequencies = $('<div class="fmlabelfrequencies"></div>');

  var labelsFm = ["FM", "89", "92", "96", "102", "106", "108", "MHz" ]

  var labelsFmEls = labelsFm.map(function(labelFm){
  	return $("<span>" + labelFm + "</span>");
  });

  var clock = $('<div class="clock"></div>');

  var frequencies = $('<div class="frequencies"></div>')

  var whateverAutoIS = $('<div class="whateverautois">.</div>')


  amLabelFrequencies.append(labelsAmEls);
  fmLabelFrequencies.append(labelsFmEls);

  clock.append(outerShell);
  outerShell.append(innerShell);
  innerShell.append(leftLabels, autoLabels, clockScreen, frequencies);

  frequencies.append(amLabelFrequencies,fmLabelFrequencies);

  clockScreen.append(amPmIndicator, whateverAutoIS, clockText);




$('.container').append(clock);
});

