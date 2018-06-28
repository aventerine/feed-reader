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
    // rss feeds test suite
    describe('RSS Feeds', function() {
        // allFeeds defined and it's not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // allFeeds has a URL and it's not empty
         it('has url', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).toEqual(jasmine.any(String));
                expect(feed.url).toBeTruthy();
            });
         });


        // allFeeds has a name and it's not empty
         it('has name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeTruthy();
            });
         });
    });


    // menu test suite
    describe('The menu', function(){
        // menu is hidden by default
         it('hidden by default', function(){
            expect($('body').attr("class")).toMatch('menu-hidden');
         });

         // menu changes visibility when clicked
          it('changes when clicked', function(){
            $(".menu-icon-link").click();
            expect($('body').attr("class")).not.toMatch('menu-hidden');

            $(".menu-icon-link").click();
            expect($('body').attr("class")).toMatch('menu-hidden');          
          });
    });
        
    // initial entries test suite
    describe('Initial Entries', function(){
        // single .entry element
         beforeEach(function(done){
            loadFeed(0, done);
         });

         it('has at least one entry', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });
    });
        

    // new feed selection test suite
    describe('New Feed Selection', function(){
        // loadFeed changes content
         beforeEach(function(done){
            loadFeed(0, done);
         });

         it('changes content', function(done){
            const content = $('.feed').html();

            loadFeed(1, function(){
                expect($('.feed').html()).not.toEqual(content);
                done();
            });
         });
    });    
}());
