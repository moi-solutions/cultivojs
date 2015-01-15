Cultivo.prototype.datepicker = function (input, daysOfWeekDisabled) {
    daysOfWeekDisabled = daysOfWeekDisabled || [];
    $(input).datepicker({
    todayBtn: 'linked',
    format: 'dd/mm/yyyy',
    language: 'es',
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    daysOfWeekDisabled: daysOfWeekDisabled
  });
}
