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
    cy.wait(500);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(500);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Dodatkowe testy', function () {
  beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.wait(200);
  });

  //Upewnij się, że użytkownik może przewijać slajdy w galerii za pomocą przycisków
  //nawigacji.
  it('should allow navigation between slides', function () {
      cy.get('.swiper-button-next').click();
      cy.wait(500);
      cy.get('.swiper-slide-active').should('contain', 'London');

      cy.get('.swiper-button-next').click();
      cy.wait(500);
      cy.get('.swiper-slide-active').should('contain', 'Paris');

      cy.get('.swiper-button-prev').click();
      cy.wait(500);
      cy.get('.swiper-slide-active').should('contain', 'London');
  });

  //Zweryfikuj, czy opis każdego slajdu jest wyświetlany poprawnie.
  it('should display title and description at every slide', function () {
      const slides = [
          { title: 'Rome', description: 'Italy' },
          { title: 'London', description: 'United Kingdom' },
          { title: 'Paris', description: 'France' }
      ];

      slides.forEach((slide) => {
          cy.get('.swiper-slide-active').within(() => {
              cy.contains('h1', slide.title).should('be.visible');
              cy.contains('p', slide.description).should('be.visible');
          });
          cy.get('.swiper-button-next').click();
          cy.wait(500);
      });
  });

  //Zweryfikuj, czy galeria zachowuje się poprawnie na różnych urządzeniach.
  it('should display correctly on different devices', function () {
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

  //*Sprawdzenie czy galeria jest poprawnie wyświetlana
  it('should display all elements', function () {
      cy.get('.swiper').should('be.visible');
      cy.get('.swiper-slide').should('have.length', 3);
      cy.get('.swiper-button-next').should('be.visible');
      cy.get('.swiper-button-prev').should('be.visible');
  });
});
