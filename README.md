grunt-protractor-webdriver
==========================

<<<<<<< HEAD
UI automation using grunt protractor and webdriver for applications developed in angularJS
=======
Sample code for starting up browser testing using protractor and grunt.

pre-requisite
=============
For running protractor tests, we need to install proctractor:
```
npm install potractor
```
once protractor is install, navigate to node_modules/protractor/bin you will see webdriver-manager, execute
```
webdriver-manager update
```

Above steps will install protractor and all its dependencies including webdriver which is required to run selenium tests.

running test
============
Before starting test executing, we have to start selenium standalone server, from the root directory of your project execute:

```
webdriver-manager start
```

Now we can run test:

grunt test:e2e

Chrome browser will launch and test will execute.


results
=======
Results will look like as below:
```
Running "protractor:run" (protractor) task
Using the selenium server at http://0.0.0.0:4444/wd/hub
.

Finished in 14.062 seconds
1 test, 1 assertion, 0 failures


Done, without errors.
```

ToDo
====
Adding API for page object access
>>>>>>> 295cbcf5f4d10436357350ac554dbc2808a050dd
