class Login
{
  usernameInput = "input[placeholder='Username']";
  userEmailInput = "input[placeholder='Email']";
  passwordInput = "input[placeholder='Password']";
  submitButton = "button[type='submit']";


  errorMessage = "email or password is invalid";
  errorBlankEmail = "email can't be blank";
  errorBlankPassword = "password can't be blank";
  dashboarTitle = "HOME | NEXT REALWORLD"
  duplicateUsername = "username has already been taken";
  duplicateEmail = "email has already been taken";
  errorBlankUsername = "username can't be blank";

  setUserName(username)
  {
    cy.get(this.usernameInput).type(username);
  }
  setEmail(email)
  {
    cy.get(this.userEmailInput).type(email);
  }
  setPassword(password)
  {
    cy.get(this.passwordInput).type(password);
  }
  clickSubmit()
  {
    cy.get(this.submitButton).click();
    cy.get(this.usernameInput).clear();
    cy.get(this.userEmailInput).clear();
    cy.get(this.passwordInput).clear();
  }  
  verifyEUsername()
  {
    cy.contains(this.errorBlankUsername);
  }
  verifyEmail()
  {
    cy.contains(this.errorBlankEmail);
  }
  verifyEPassword()
  {
    cy.contains(this.errorBlankPassword);
  }
  verifyDUsername()
  {
    cy.contains(this.duplicateUsername);
  }
  verifyUEmail()
  {
    cy.contains(this.duplicateEmail);
  }
  verifyValidsignup()
  {
    cy.title().should('eq', this.dashboarTitle);
  }
}
export default Login;