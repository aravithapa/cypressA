import signupPage from './pages/signup'
describe('Verify Login with valid and invlaid', () => {

  beforeEach(()=> {
  cy.visit("https://next-realworld.vercel.app/user/register")
})
  it('should verify the username filed is empty', () => {
    const ln = new signupPage();
    ln.setUserName(" ");
    ln.setEmail("ravithapa@gmail.com");
    ln.setPassword("Test@123");
    ln.clickSubmit();
    ln.verifyEUsername();
   })
   it('should verify the email filed is empty', () => {
    const ln = new signupPage();
    ln.setUserName("ravithapa");
    ln.setEmail(" ");
    ln.setPassword("Test@123");
    ln.clickSubmit();
    ln.verifyEmail();
   })
   it('should verify the password filed is empty', () => {
    const ln = new signupPage();
    ln.setUserName("ravithapa");
    ln.setEmail("ravithapa@gmail.com");
    ln.setPassword(" ");
    ln.clickSubmit();
    ln.verifyEPassword();
   })
  it('should verify uniuie username', () => {
    const ln = new signupPage();
    ln.setUserName("ravithapa");
    ln.setEmail("aravithapa@gmail.com");
    ln.setPassword("Test@123");
    ln.clickSubmit();
    ln.verifyDUsername();
    })
  it('should verify uniuie email', () => {
    const ln = new signupPage();
    ln.setUserName("ravithapa");
    ln.setEmail("aravithapa@gmail.com");
    ln.setPassword("Test@123");
    ln.clickSubmit();
    ln.verifyUEmail();
    })
    it('should verify signup feature', () => {
      const ln = new signupPage();
      ln.setUserName(Math.random().toString(36));
      ln.setEmail(Math.random().toString(36) + "@gmail.com");
      ln.setPassword("Test@12345");
      ln.clickSubmit();
      ln.verifyValidsignup();
      })
 })