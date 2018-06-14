/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have url', function() {
            allFeeds.forEach(afeed => {
                expect(afeed.url).toBeDefined();
                expect(afeed.url).not.toBe("");
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have name', function() {
            allFeeds.forEach(afeed => {
                expect(afeed.name).toBeDefined();
                expect(afeed.name).not.toBe("");
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function() {
            var bodyelement = document.getElementsByTagName('body');

            expect(bodyelement.length).toBe(1);
            expect(bodyelement[0].classList.contains('menu-hidden')).toBe(true);
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('ensures the menu changes visibility when the menu is clicked', function() {

            $('body').toggleClass('menu-hidden');
            var bodyelement = document.getElementsByTagName('body');
            expect(bodyelement.length).toBe(1);
            expect(bodyelement[0].classList.contains('menu-hidden')).toBe(false);

            $('body').toggleClass('menu-hidden');
            var bodyelement = document.getElementsByTagName('body');
            expect(bodyelement.length).toBe(1);
            expect(bodyelement[0].classList.contains('menu-hidden')).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            //console.log("Now 1");
            loadFeed(1, done);
        });

        it('some feed elements are loaded by the loadFeed function', function() {
            expect(document.getElementsByClassName('entry').length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var old_stuff = [];
        // loads first - not super elegant but why not - we need the old value
        beforeAll(function(done) {
            loadFeed(0, function() {
                var all_entries = document.getElementsByClassName('entry');
                for (var i = 0; i < all_entries.length; i++) {
                    old_stuff.push(all_entries[i].outerText);
                }
                done();
            });
        });
        // loading before our test 
        beforeEach(function(done) {
            loadFeed(1, done);
        });
        // now the test
        it('content actually changes', function() {
            var new_stuff = [];

            var all_entries = document.getElementsByClassName('entry');
            for (var i = 0; i < all_entries.length; i++) {
                new_stuff.push(all_entries[i].outerText);
            }

            if (old_stuff.length = new_stuff.length) {
                // check every element
                for (var i = 0; i < old_stuff.length; i++) {
                    expect(old_stuff[i]).not.toBe(new_stuff[i].outerText);
                }
            } else {
                expect(old_stuff.length).not.toBe(new_stuff.length);
            }


        });
    });
}());