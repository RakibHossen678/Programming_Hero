class vehicle{
    constructor(name,price) {
        this.name=name;
        this.price=price
    }
    move(){
        console.log('doing something');
    }
}
class Bus extends vehicle{
    constructor(name,price,seat,ticktprice){
        super(name,price);
        this.seat=seat;
        this.ticktprice=ticktprice;
    }

}

class truck extends vehicle{
    constructor(name,price,load){
        super(name,price)
        this.load=load;
    }
}