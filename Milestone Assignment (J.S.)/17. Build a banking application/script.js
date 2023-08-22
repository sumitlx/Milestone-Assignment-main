const userDetails = {
    Abhishek : 23000,
    Sonu : 29900,
    Ravi : 14000,
    John : 39390,
    deposite(value){
        this.Abhishek = this.Abhishek + value;
        this.Sonu = this.Sonu + value;
        this.Ravi = this.Ravi + value;
        this.John = this.John + value;
    },
    withdrawal(value){
        this.Abhishek = this.Abhishek - value;
        this.Sonu = this.Sonu - value;
        this.Ravi = this.Ravi - value;
        this.John = this.John - value;
    }
}

userDetails.deposite(50000);
userDetails.withdrawal(10000);

console.log(userDetails.Abhishek)
console.log(userDetails.Sonu)
console.log(userDetails.Ravi)
console.log(userDetails.John)








