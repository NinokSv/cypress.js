
describe('Тестирование staya', function () {
    
    it('тестирование формы входа логина и пароля с неврным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click ();
        cy.get('.auth-form > form > [type="email"]').type('svirukovanina@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type ('stay');
        cy.get('.auth-form__submit').click ();
        cy.contains ('Мои заказы');
     
         })
    })
