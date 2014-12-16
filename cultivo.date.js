/**
* Default date format
*/
Cultivo.prototype.dateFormatDefault = 'DD/MM/YYYY';

/**
* dateMake
* @param {Date} date
* @return String
*/
Cultivo.prototype.dateConvert = function(date) {
  return moment(date).format(this.dateFormatDefault);
}

/**
* dateMake
* @param {String} date
* @return Date
*/
Cultivo.prototype.dateMake = function(date) {
  return moment(date, this.dateFormatDefault).toDate();
}
