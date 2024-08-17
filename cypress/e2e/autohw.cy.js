describe('point 1', ()=>{
    before(()=>{
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
        })
        it('verify all header elements', ()=>{
            cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            cy.get('.header_logo'),
            cy.get('.btn.header-link.-active')
            cy.get('button'). contains('About'),
            cy.get('button'). contains('Contacts')
        }) 
        it('verify all footer elements', ()=>{
            cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
            cy.get('h2').contains('Contacts')
            cy.get('.socials_icon.icon.icon-facebook')
            cy.get('.socials_icon.icon.icon-telegram')
            cy.get('.socials_icon.icon.icon-youtube')
            cy.get('.socials_icon.icon.icon-instagram')
            cy.get('.socials_icon.icon.icon-linkedin')
            cy.get('.contacts_link.display-4')
            cy.get('.contacts_link.h4')
            cy.get('p'). contains('© 2021 Hillel IT school')
            cy.get('p'). contains('Hillel auto developed in Hillel IT school for educational purposes of QA courses.')
            cy.get('svg[width="42"][height="80"]')
        })
    })