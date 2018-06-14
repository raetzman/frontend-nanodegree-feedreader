# How to run

to run this project download or clone the content and run the index.html in your brwoser

# Project Overview

In this project, me was given given a web-based application that reads RSS feeds.The task was to use JAsmine to perform some test using the Jasmine [Jasmine](http://jasmine.github.io/) Framework.

## What was the way from red to green?

Actually we have a working wen-based application. So writing the test resulted in getting green directly. 

The library was added to the project in the folder /jasmine/lib. Check out the links to the jasmine library in the header of the index.html. There are some lines of code to add Jasmine library to the project. 
```
        <link rel="stylesheet" href="css/style.css">

        <link rel="stylesheet" href="jasmine/lib/jasmine-2.1.2/jasmine.css">

        <script src="jasmine/lib/jasmine-2.1.2/jasmine.js"></script>
        <script src="jasmine/lib/jasmine-2.1.2/jasmine-html.js"></script>
        <script src="jasmine/lib/jasmine-2.1.2/boot.js"></script>
    </head>
```
at the bottom there is the link to the location of the real tests:
```
        <script src="jasmine/spec/feedreader.js"></script>
    </body>
</html>

```
When you have prepared your project like this, the actual work can start. The key words for Jasmine are describe, beforeEach, it and expect. Chapters start with describe. The Championsleague of testing is asynchronous testing as we do with beforeEach and the done function. it will create one result and it mus contain at least one expect. 
```
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(1, done);
        });

        it('some feed elements are loaded by the loadFeed function', function() {
            expect(document.getElementsByClassName('entry').length).toBeGreaterThan(0);
        });
    });
```

Thnx for your interest in this "Jasmine Tutorial" 