class Payment{
    pay(){
        console.log("It can be performed using Cash Pyamnet")
    }
}
class PhonePe extends Payment{
    pay(){
        console.log("It can be performed payment using PhonePe App")
    }
}
 
class GooglePay extends Payment{
    pay(){
        console.log("It can be performed payment using GooglePay App")
    }
}
 
class NetBanking extends Payment{
    pay(){
        console.log("It can be performed payment using NetBanking")
    }
}
 
let cash=new Payment()
cash.pay()
 
let phonepe=new PhonePe()
let googlepay=new GooglePay()
let netbanking=new NetBanking()
 
cash=phonepe
cash.pay()
 
cash=googlepay
cash.pay()
 
cash=netbanking
cash.pay()