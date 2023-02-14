class Login
{
  usernameInput = "input[placeholder='Email']";
  passwordInput = "input[placeholder='Password']";
  submitButton = "button[type='submit']";
  errorMessage = "email or password is invalid";
  errorBlankEmail = "email can't be blank";
  errorBlankPassword = "password can't be blank";
  dashboarTitle = "HOME | NEXT REALWORLD"


  setUserName(username)
  {
    cy.get(this.usernameInput).type(username);
  }
  setPassword(password)
  {
    cy.get(this.passwordInput).type(password);
  }
  clickSubmit()
  {
    cy.get(this.submitButton).click();
    cy.get(this.usernameInput).clear();
    cy.get(this.passwordInput).clear();
  }  
  verifyValidLogin()
  {
    cy.title().should('eq', this.dashboarTitle);

  }
  verifyInvalidLogin()
  {
    cy.contains(this.errorMessage);
  }
  verifyBlankEmailLogin()
  {
    cy.contains(this.errorBlankEmail);

  }
  verifyBlankPassword()
  {
    cy.contains(this.errorBlankPassword);

  }
}
export default Login;