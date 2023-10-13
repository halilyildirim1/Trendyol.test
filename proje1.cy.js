    import { Homepage1 } from "../../pageObjectModel/homepage1";
    const homepageEvkur = new Homepage1()
describe('Trendyol Test', () => {
    beforeEach(() => {
        cy.on('uncaught:exception',(err, runnable) => {return false})
    });
    it.only('Trendyol sitesinde test', () => {
        homepageEvkur.navigate()
        homepageEvkur.search()
        
    });

});