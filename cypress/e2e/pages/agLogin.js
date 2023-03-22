class Login{
    userMobile = "Enter your mobile number";
    userPassword = "Enter your password";

    setUserMobile(usermobile){
        cy.contains(this.userMobile).type(usermobile)
    }
    setPassword(password){
        cy.contains(this.userPassword).type(password)
    }
    clickSUbmit(){
        
    }
}