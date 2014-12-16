/**
* Require cultivo.notify.js
*/

Cultivo.prototype.httpPost = function(resource, data, callBack) {
  var self = this;
  $.ajax({
    type: 'POST',
    url: resource,
    data: data,
    contentType: 'application/json; utf-8',
    dataType: 'json',
    success: callBack,
    error: function(xhr, textStatus, errorThrown) {
      self.notifyDanger({
        title: xhr.status,
        message: errorThrown
      });
    }
  });

}
