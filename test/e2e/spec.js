//test script

describe('Angular Js Home Page', function() {
  
  beforeEach(function() {
  	browser.get('/');
  });

  it('should load home page', function() {
    expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');

  });
});
