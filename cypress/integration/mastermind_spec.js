/// <reference types="Cypress" />
// syntax in VS Code was defaulting to other autofills

describe('Mastermind Tests', function(){
    beforeEach('Visit the homepage', () => {
        cy.visit('/')
    })

    //Cypress Studio is amazing!! 

    /* ==== Test Created with Cypress Studio ==== */
    /*A consistent issue I have found  is when an element is covered by another element, 
    I have to include {force: true} for the click command to work. */
    it('Add item to shopping cart and increment', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .product > .product-image > .product-qv > span').click({force: true});
        cy.get('.product-detail-content-one-atc > span').click();
        cy.get('.menu-functions > :nth-child(3) > img').click();
        cy.get('.cart-sidebar-item__content > .quantity-selector > :nth-child(3) > span').click();
        cy.get('.ant-drawer-close > .anticon > svg').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Add item to cart and delete', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.shop-sidebar__subcategory > ul > :nth-child(2) > a').click();
        cy.get('.product-name').click();
        cy.get('.product-detail-content-one-atc > span').click();
        cy.get('.menu-functions > :nth-child(3) > img').click();
        cy.get('.icon_close').click();
        cy.get('.ant-btn-primary > span').click();
        cy.get('.ant-drawer-close > .anticon > svg').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Test filter for T-Shirts', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.shop-sidebar__subcategory > ul > :nth-child(3) > a').click();
        /* ==== End Cypress Studio ==== */
        //test to ensure T-Shirt filter contains 4 items
        cy.get('.ant-row .ant-col .five-col').should('have.length', 4)
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Change product category', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.menu-wrapper > .menu-search > .menu-search__form > .menu-search__form-select > .ant-select-selector > .ant-select-selection-item').click();
        cy.get(':nth-child(2) > .ant-select-item-option-content').click();
        /* ==== End Cypress Studio ==== */
        //Test to make sure thd Books catgory has no data
        cy.get('.ant-empty-description').should('contain','No Data')
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Ensure Quick View modal adds items to cart', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .product > .product-image > .product-qv > span').click({force: true});
        cy.get(':nth-child(2) > .ant-radio-button').click();
        cy.get(':nth-child(2) > .ant-radio-button > .ant-radio-button-input').check({force: true});
        cy.get('.quantity-selector > :nth-child(3) > span').click();
        cy.get('.product-detail-content-one-atc > span').click();
        cy.get('.menu-functions > :nth-child(3) > img').click();
        cy.get('.ant-drawer-close > .anticon > svg').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Add different colored items to cart', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(12) > .product > .product-content > .product-name').click();
        cy.get('[style="background-color: rgb(128, 128, 128);"] > .ant-radio-button').click();
        cy.get('[style="background-color: rgb(128, 128, 128);"] > .ant-radio-button > .ant-radio-button-input').check({force: true});
        cy.get(':nth-child(3) > .ant-radio-button').click();
        cy.get(':nth-child(3) > .ant-radio-button > .ant-radio-button-input').check({force: true});
        cy.get('.quantity-selector > :nth-child(3) > span').click();
        cy.get('.product-detail-content-one-atc > span').click();
        cy.get('[style="background-color: rgb(255, 255, 255);"] > .ant-radio-button').click();
        cy.get('[style="background-color: rgb(255, 255, 255);"] > .ant-radio-button > .ant-radio-button-input').check({force: true});
        cy.get('.quantity-selector > :nth-child(1) > span').click();
        cy.get('.-size > .ant-radio-group > :nth-child(2) > .ant-radio-button').click();
        cy.get('.-size > .ant-radio-group > :nth-child(2) > .ant-radio-button > .ant-radio-button-input').check({force: true});
        cy.get('.product-detail-content-one-atc > span').click();
        cy.get('.menu-functions > :nth-child(3) > span').click();
        cy.get(':nth-child(1) > .cart-sidebar-item__content > .quantity-selector > :nth-child(1) > span').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Add two different items to cart', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(5) > .product > .product-image > .product-qv > span').click({force: true});
        cy.get('.product-detail-content-one-atc > span').click();
        cy.get(':nth-child(13) > .product > .product-image > .product-qv > span').click({force: true});
        cy.get(':nth-child(2) > .ant-radio-button').click();
        cy.get(':nth-child(2) > .ant-radio-button > .ant-radio-button-input').check({force: true});
        cy.get(':nth-child(18) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .shop-qv > .ant-row > .ant-col-md-14 > .product-detail-content-one > .product-detail-content-one-actions > .product-detail-content-one-atc > span').click();
        cy.get('.menu-functions > :nth-child(3) > img').click();
        cy.get('.ant-drawer-close > .anticon > svg').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Add to cart & navigate to checkout', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(6) > .product > .product-content > .product-name').click();
        cy.get(':nth-child(2) > .ant-radio-button').click();
        cy.get(':nth-child(2) > .ant-radio-button > .ant-radio-button-input').check({force: true});
        cy.get('.product-detail-content-one-atc > span').click();
        cy.get('.menu-functions > :nth-child(3) > span').click();
        cy.get('.cart-sidebar-total__buttons > .ant-btn > a').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Continue shopping', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(9) > .product > .product-content > .product-name').click();
        cy.get('.product-detail-content-one-atc > span').click();
        cy.get('.menu-functions > :nth-child(3) > img').click();
        cy.get('.cart-sidebar-total__buttons > .ant-btn > a').click();
        cy.get('.checkout-functions--shopping > a').click();
        /* ==== End Cypress Studio ==== */
    });
})