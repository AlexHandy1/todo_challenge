describe('To Do List', function() {
  beforeEach(function(){
    browser.get('http://localhost:8080');
  })

  it('allows list items to be displayed', function(){
    var addItem = element(by.model('todoCtrl.newItem'));
    var button = element(by.className('btn'))

    addItem.sendKeys('new task')
    button.click()

    var listItems = element.all(by.repeater('item in todoCtrl.storedItems'));
    expect(listItems.get(0).getText()).toEqual('new task Edit task Delete');
  });

  it('allows list items to be edited', function(){
    var addItem = element(by.model('todoCtrl.newItem'));
    var button = element(by.className('btn'))
    var editItem = element(by.model('item.task'));
    var editstartbutton = element(by.id('editstart'));
    var editendbutton = element(by.id('editend'));
    var listItems = element.all(by.repeater('item in todoCtrl.storedItems'));

    addItem.sendKeys('new task')
    button.click()
    editstartbutton.click()
    editItem.sendKeys('changed task');
    editendbutton.click()
    expect(listItems.get(0).getText()).toEqual('changed task Edit task');
    //how isolate without edit task, why still tacking on previous task text
  });

  it('displays the total number of list items', function() {
    var addItem = element(by.model('todoCtrl.newItem'));
    var button = element(by.className('btn'))
    var totaltasks = element(by.id('total-tasks'))

    addItem.sendKeys('new task')
    button.click()
    expect(totaltasks.getText()).toEqual("Total tasks: 1");
  });

  it('can change the status of a task to complete', function() {
    var addItem = element(by.model('todoCtrl.newItem'));
    var button = element(by.className('btn'))
    var checkbox = element(by.model('item.completed'));
    var listItems = element.all(by.repeater('item in todoCtrl.storedItems'));
    addItem.sendKeys('new task')
    button.click()
    checkbox.click()
    expect(listItems.get(0).completed.toBe(true));
  });
});






