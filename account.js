class Account {
    constructor(){
        this.abc = "hellow";
        this.xyz = "World";
        this.email = "itmanpawan@gmail.com"
    }

    getAccountDetails(){
        return this.abc + this.xyz;
    }

    getEmail(){
        return this.email;
    }

}



module.exports = Account;