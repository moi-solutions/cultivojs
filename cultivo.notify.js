/**
* notify
* @param {Object} params
* params.type {String}
* params.title {String}
* params.message {String}
* type ['info', 'danger', 'warning', 'success']
*/
Cultivo.prototype.notify = function(params) {
  var params = params || {};
  params.type = params.type || 'info';
  params.title = params.title || 'Title';
  params.message = params.message || 'Message';

  var types = [
    'info',
    'danger',
    'warning',
    'success'
  ];
  var icons = [
    'fa fa-info',
    'fa fa-times',
    'fa fa-exclamation',
    'fa fa-check'
  ];
  var themes = [
    'awesome blue',
    'awesome error',
    'awesome yellow',
    'awesome ok'
  ];

  var position = types.indexOf(params.type);
  if (position !== -1) {
    $.amaran({
      content: {
        title: params.title,
        message: params.message,
        icon: icons[position],
      },
      theme: themes[position],
      closeButton: true,
      sticky: true,
      position: 'top right'
    });
  }
  else {
    this.debug('Error: cultivo.notify require a valid type. ' +
    'Try with info, danger, warning, successs');
  }
}

/**
* notifyInfo
* @param {Object} params
* params.title {String}
* params.message {String}
*/
Cultivo.prototype.notifyInfo = function(params) {
  this.notify({
    type: 'info',
    title: params.title,
    message: params.message
  });
}

/**
* notifyDanger
* @param {Object} params
* params.title {String}
* params.message {String}
*/
Cultivo.prototype.notifyDanger = function(params) {
  this.notify({
    type: 'danger',
    title: params.title,
    message: params.message
  });
}

/**
* notifyWarning
* @param {Object} params
* params.title {String}
* params.message {String}
*/
Cultivo.prototype.notifyWarning = function(params) {
  this.notify({
    type: 'warning',
    title: params.title,
    message: params.message
  });
}

/**
* notifySuccess
* @param {Object} params
* params.title {String}
* params.message {String}
*/
Cultivo.prototype.notifySuccess = function(params) {
  this.notify({
    type: 'successs',
    title: params.title,
    message: params.message
  });
}
