Cultivo.prototype.select = function(input, minLength) {
  $(input).select2({
    allowClear: true,
    minimumInputLength: minLength
  });
}
