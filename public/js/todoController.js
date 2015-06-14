todo.controller('todoController', [function() {
  var self = this;

  self.storedItems = []

  self.addItem = function(selfnewItem) {
    selfnewItem = {task: selfnewItem, completed: false}
    self.storedItems.push(selfnewItem);
  };

  self.deleteItem = function(idx) {
    self.storedItems.splice(idx, 1)
  }
}]);
