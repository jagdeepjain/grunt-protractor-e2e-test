'use strict';

var AngularPage = require('../../pages/home-page/angular.home.page.js');
var angularPage = new AngularPage();

describe('Angular Js Home Page', function() {
  
  beforeEach(function() {
  	browser.get('/');
  });

  it('should load home page', function() {
	expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');    
  });

  it('should get greetings for the entered name', function() {
  	angularPage.enterName('Jagdeep');
	expect(angularPage.getGreeting()).toEqual('Hello Jagdeep!');    
  });
});