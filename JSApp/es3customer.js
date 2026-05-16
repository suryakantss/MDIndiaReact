function Customer(fname,email){
    this.fname=fname;
    this.email=email;
    this.display = function(){
        console.log(this.fname+","+this.email);
    }
}

var c = new Customer('Jai','jai@msn.com');
c.display();
