let movies;
const movieId =  585245;
// const movieTitle = 'Clifford the Big Red Dog' 
let reviews;

  describe("Upcoming Page ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=1`

      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          movies = response.results
        })
            ;
    })
    beforeEach(() => {
      cy.visit("/movies/upcoming")
    });

    describe("Base test", () => {
    it("should be on the upcoming movies page", () => {
        cy.url().should("include", `/movies/upcoming`);
        cy.get("h3").contains("Upcoming Movies");
      });
    });
})


    