exports.config = {
    specs: ['./tests/client/spec_integration/*.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:5000',
    framework: 'jasmine',
    //instructs browser not to wait to sync up with angular before doing stuffs
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }
};