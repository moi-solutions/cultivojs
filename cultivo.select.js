Cultivo.prototype.select = function(input, minLength) {
  $(input).select2({
    placeholder: '',
    allowClear: true,
    minimumInputLength: minLength
  });
}
