describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  beforeEach(() => {
      cy.visit('http://localhost:3000');
  });

  it('allows navigation between slides using next and previous buttons', function () {
      cy.get('.swiper-button-next').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('contain', 'London');

      cy.get('.swiper-button-next').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('contain', 'Paris');

      cy.get('.swiper-button-prev').click();
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('contain', 'London');
  });

  // it('verifies that each slide has a title and description', function () {
  //     const slides = [
  //         { title: 'Rome', description: 'Italy' },
  //         { title: 'London', description: 'United Kingdom' },
  //         { title: 'Paris', description: 'France' }
  //     ];

  //     slides.forEach((slide) => {
  //         cy.get('.swiper-slide-active').within(() => {
  //             cy.contains('h1', slide.title).should('be.visible');
  //             cy.contains('p', slide.description).should('be.visible');
  //         });
  //         cy.get('.swiper-button-next').click();
  //     });
  // });

  it('ensures the gallery is displayed correctly on different screen sizes', function () {
      const sizes = [
          ['macbook-15', 'desktop'],
          ['ipad-2', 'tablet'],
          ['iphone-x', 'mobile']
      ];

      sizes.forEach(([size, device]) => {
          cy.viewport(size);
          cy.log(`Testing on ${device}`);
          cy.get('.swiper').should('be.visible');
          cy.get('.swiper-button-next').should('be.visible');
          cy.get('.swiper-button-prev').should('be.visible');
      });
  });

  it('verifies all gallery elements are visible', function () {
      cy.get('.swiper').should('be.visible');
      cy.get('.swiper-slide').should('have.length', 3);
      cy.get('.swiper-button-next').should('be.visible');
      cy.get('.swiper-button-prev').should('be.visible');
  });
});
