//sample to follow when writing mine
describe('app login flow', function() {

    var loginUrl, homeUrl, name;

    it('sets up initial variables', function() {
        // Can be considered to be beforeAll, which Protractor lacks.
        browser.get('/login');
        loginUrl = browser.getCurrentUrl();
        browser.get('/');
        homeUrl = browser.getCurrentUrl();
    });

    it('registers a user and redirects to home', function() {
        browser.get('/register');
        name = 'user' + Math.floor(Math.random() * 100000);
        $('#email').sendKeys(name + '@test.com');
        $('#email2').sendKeys(name + '@test.com');
        $('#username').sendKeys(name);
        $('#firstName').sendKeys('Test');
        $('#lastName').sendKeys('User');
        $('#passwd1').sendKeys('Secret123');
        $('#passwd2').sendKeys('Secret123');
        $('button').click();
        expect(browser.getCurrentUrl()).toBe(homeUrl);
    });

    it('logs in correctly', function() {
        browser.get('/login');
        $('#username').sendKeys(name);
        $('#passwd').sendKeys('Secret123');
        $('button').click();
        //added to ensure that protractor waits for ajax call to end before comparing urls.
        browser.sleep(1000).then(function() {
            expect(browser.getCurrentUrl()).toBe(homeUrl);
        });
    });
});