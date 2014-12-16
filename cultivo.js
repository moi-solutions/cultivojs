/**
* Class Cultivo
*/
var Cultivo = function() {

}

Cultivo.prototype.notify = function(params) {
  var params = params || {};
  params.type = params.type || 'info';
  params.title = params.title || 'Title';
  params.message = params.message || 'Message';
  var icon = '';
  var theme = '';
  switch (params.type) {
    case 'info':
      icon = 'fa fa-info';
      theme = 'awesome blue';
    break;
    case 'danger':
      icon = 'fa fa-times';
      theme = 'awesome error';
    break;
    case 'warning':
      icon = 'fa fa-exclamation';
      theme = 'awesome yellow';
    break;
    case 'success':
      icon = 'fa fa-check';
      theme = 'awesome ok';
    break;

  }

  $.amaran({
    content: {
      title: params.title,
      message: params.message,
      icon: icon,
    },
    theme: theme,
    closeButton: true,
    sticky: true,
    position: 'top right'
  });
}
