describe('todoController', function(){
  beforeEach(module('todo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('todoController');
  }));

  it('initializes with an empty to-do list', function() {
    expect(ctrl.storedItems).toEqual([]);
  });

  it('stores list items when they are added', function() {
    ctrl.newitem = "Test Task 1"
    ctrl.addItem(ctrl.newitem);
    expect(ctrl.storedItems).toEqual([{task : "Test Task 1", completed: false}])
  });

  it('counts the total number of items', function() {
    ctrl.newitem = "Test Task 1"
    ctrl.addItem(ctrl.newitem);
    ctrl.newitem = "Test Task 2"
    ctrl.addItem(ctrl.newitem);
    expect(ctrl.storedItems.length).toEqual(2);
  })

  it('can remove items from the list', function() {
    ctrl.newitem = "Test Task 1"
    ctrl.addItem(ctrl.newitem);
    expect(ctrl.storedItems.length).toEqual(1);
    ctrl.deleteItem(0)
    expect(ctrl.storedItems.length).toEqual(0);
  })
});