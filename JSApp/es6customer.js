class Customer {
    constructor(fname, email) {
        this.fname = fname;
        this.email = email;
    }
    display() {
        setTimeout( ()=> {
            console.log(this.fname + "," + this.email);
        }, 3000)

    }
}
let c = new Customer("John", "john@msn.com");
c.display();
