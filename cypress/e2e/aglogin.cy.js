import loginPage from './pages/login'
describe('Verify Login with valid and invlaid credencials', () => {
  beforeEach(()=> {
  cy.visit("https://dev-app.ambition.guru/login")

})
//   it('should verify login with invalid signin  users', () => {
//     cy.fixture('invalidlogin.json').then(logins => {
//       logins.forEach(logins => {
//       const ln = new loginPage();
//       ln.setUserName(logins.username);
//       ln.setPassword(logins.password);
//       ln.clickSubmit();
//       ln.verifyInvalidLogin();
//       })
//     })
//   })
  it('should verify valid signin  users', () => {
      const ln = new loginPage();
      ln.setUserName("aravithapa@gmail.com");
      ln.setPassword("Test@123");
      ln.clickSubmit();
      ln.verifyValidLogin();
    })
    it('should validate with empty email', () => {
        const ln = new loginPage();
        ln.setUserName(" ");
        ln.setPassword("password");
        ln.clickSubmit();
        ln.verifyBlankEmailLogin();
        })

      it('should verify with empty password', () => {
          const ln = new loginPage();
          ln.setUserName("test@test.com");
          ln.setPassword(" ");
          ln.clickSubmit();
          ln.verifyBlankPassword();
      })
    })