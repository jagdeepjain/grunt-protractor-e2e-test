//test script

describe('Angular Js Home Page', function() {
  
  var prtor
  
  beforeEach(function() {
  	browser.get('/');
  	prtor = protractor.getInstance();

  });

  it('should load home page', function() {
    expect(prtor.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');

  });
});
