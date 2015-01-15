Cultivo.prototype.datepicker = function (input, daysOfWeekDisabled,todayBtn) {
    daysOfWeekDisabled = daysOfWeekDisabled || [];
    todayBtn = (todayBtn === false) ? false : 'linked';
    $(input).datepicker({
    todayBtn: todayBtn,
    format: 'dd/mm/yyyy',
    language: 'es',
    keyboardNavigation: false,
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    daysOfWeekDisabled: daysOfWeekDisabled
  });
}
