grunt-protractor-e2e-test
=========================
Sample code for starting up browser testing using protractor and grunt.

pre-requisite
=============
For running protractor tests, we need to install grunt-cli and protractor:

```
npm install -g grunt-cli
```

```
npm install protractor
```
once these are installed, navigate to node_modules/protractor/bin you will see webdriver-manager, execute
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

```
grunt test:e2e
```

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
