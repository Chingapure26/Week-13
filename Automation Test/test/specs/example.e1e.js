describe('Google Page', ()=> {
    beforeAll('open browser', ()=> {
        return browser.url('http://www.google.com/');
    });
    
   it ('search "Wikipedia in google page', () => {
       const bannersearch = $('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');
       browser.pause(2000);
       bannersearch.addValue('Wikipedia');
       browser.keys('Enter');
   })

   it('redirec and validate page', () => {
    $('#rso > div:nth-child(1) > div:nth-child(1) > div > div > div.yuRUbf > a > h3').click();
    expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada')
   })

});
