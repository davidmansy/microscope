UI.registerHelper('pluralize', function(n, thing) {
  //Stupid pluralizer
  if (n <= 1) {
    return n + ' ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }

});