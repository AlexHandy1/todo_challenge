Summary
=================

* Simple to-do application built with the angular JS framework

Use Cases:
-------

```
- [x] As a forgetful person
      I want to store my tasks
      So that I don't forget them

- [x] As a person with limited time
      I want to instantly be able to update my todo list (adding and changing entries)
      So that I have more time to think about other things

- [x] As a person who actually gets stuff done
      I want to mark my tasks as done
      So that I don't do them twice

- [x] As a person with a lot of tasks
      I want to be able to filter my tasks by "All", "Active", "Complete"
      So that I only see the relevant tasks

- [x] As a person who doesn't like counting by hand
      I want to see a total number of tasks
      So that I don't have to count

- [x] As someone who has done lots of stuff
      I want to be able to clear my completed tasks
      So I never see them again

```

How to run
----

* For local use, clone or fork the repo to your local machine
* Install node, npm and bower to run package manager which will provide dependencies (e.g. express) to allow you to view on your local host using the command 'npm start'
* Tests can be run through karma and protractor


Technologies used
----

* Production - AngularJS, Javascript, CSS (using Bootstrap), HTML, Node, ExpressJS
* Testing - Karma, Jasmine, Protractor

Further Development
----

* Current implementation of  protractor tests do not provide 100% coverage
* Filter functionality could be improved - build links between All and status of other 2 buttons
