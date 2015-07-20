var Nemo = require('nemo');

var nemo = Nemo(__dirname, function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
    nemo.driver.controlFlow().on('uncaughtException', function (e) {
        console.error('Unhandled error: ' + e);
        driverQuit();
    });
    //image search
    nemo.driver.get(nemo.data.imagesUrl);
    nemo.view._waitVisible('[name=q]').sendKeys('Selenium Logo');
    nemo.view._find('#tsbb').click();

    //web search
    nemo.driver.get(nemo.data.searchUrl);
    nemo.view._waitVisible('#lst-ib').sendKeys('JavaScript example for RemoteWebDriver, Perfecto Mobile');
    nemo.view._find('#lst-ib').submit();

    //get report
    nemo.perfectomobile.getReport().then(function () {
        driverQuit();
    }, function (err) {
        console.error(err);
        driverQuit();
    });

});

function driverQuit() {
    nemo.driver.quit();
}