describe('sign up to hilel', ()=>{
before(()=>{
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    })
    it('verify user can sign up into the sustem', ()=>{
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupName').type('wew')
        cy.get('#signupLastName').type('ewe')
        cy.get('#signupEmail').type('testewewew@gmail.com')
        cy.get('#signupPassword').type('123dfbrHbf')
        cy.get('#signupRepeatPassword').type('123dfbrHbf')
        cy.contains('Register').click()
    })  
})
