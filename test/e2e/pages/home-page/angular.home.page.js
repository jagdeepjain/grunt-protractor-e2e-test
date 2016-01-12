var AngularHomePage = function() {
  var nameInputLocator = element(by.model('yourName'));
  var greetingLocator = element(by.binding('yourName'));

  this.enterName = function(name) {
    nameInputLocator.sendKeys(name);
  };

  this.getGreeting = function() {
    return greetingLocator.getText();
  };
};

module.exports = AngularHomePage;
