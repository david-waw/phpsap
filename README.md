# JAVA SCRIPT FOR PHP SAP-SMS,AIRTIME,PAYMENTS
This is a Java script wrapper for the phpsap API that enables java script developers to easily integrate SMS,Airtime and Mobile payments using MPESA into their applications.It is very easy to get started by creating an account and grabbing an API Key.Upon creation of an account a SAP wallet is automatically created for you,you will have to top it up with cash to start using our API to send SMS and distribute airtime.For mobile payments using MPESA a payments wallet is also automatically created for you, this is where all payments made to your application will be collected and managed. Simply hit this link to get started [https://renthero.co.ke/phpsap](https://renthero.co.ke/phpsap)

SENDING SMS
===


`var php=require('./phpsap')
var body={
    //these are the verification details and are both required
    "username":"provide username",
    "apiKey":"provide the apiKey",
   //provide number in international formart(+254....) and message
   "Receiver":"provide your number",
	"Message":"provide message"
}
//passing the details to a string
const smsJSON=JSON.stringify(body)
module.exports=smsJSON
//this is your response
    php.sms()`

#SENDING AIRTIME  
var phpsap=require('./phpsap')
var body={
    //these are the verification details and are both required
     "username":"provide user name",
     "apiKey":"provide user apiKey",

    //provide number in international formart(+254....) and Amount with minimum amount  being 10 both required
	"Receiver":"provide phone number",
	"Amount":"provide the amount"
}


//passing the details to a string
const airtimeJSON=JSON.stringify(body)
module.exports=airtimeJSON


phpsap.airtime()

#Mobile B2B
var php=require('./phpsap')
var body={
  //these are the verification details and are both required
  "username":"provide your applicaton username",
  "apiKey":"provide your application apiKey",


 //provide DestinatonAccount DestinationChannel and Amount
 "DestinationChannel":"Provide destination channel.this is the pay bill number",
  "DestinationAccount":"Provide destination account.this is the account number",
  "Amount":"ProvideAmount"
 
  
}
//passing the details to a string
const b2bJSON=JSON.stringify(body)
module.exports=b2bJSON
//this is your response
php.b2b()
#MOBILE B2C
var php=require('./phpsap')
var body={
    //these are the verification details and are both required
   	"username":"provide your applicaton username",
    "apiKey":"provide your application apiKey",

    //provide number in international formart(+254....) and Amount with minimum amount  being 10 both required
	"PhoneNumber":"provide the recipient phone number in intenational format ie +254....",
	"Amount":"provide the amount. Note minimal amount 10"
}


//passing the details to a string
const b2cJSON=JSON.stringify(body)
module.exports=b2cJSON
//this is the output
php.b2c()


#MOBILE C2B VALIDATON
var php=require('./phpsap')
var body={
    //these are the verification details and are both required
   	"username":"provide your applicaton username",
    "apiKey":"provide your application apiKey",
     
    //provide MPESAID  and any metadata
    "MPESATransactionID":"provide unque mpesa id provided after payment",
    "C2BValidationmetadata":[{"MetaData":"attach any metadata you want to send"}]
}


//passing the details to a string
const c2bJSON=JSON.stringify(body)
module.exports=c2bJSON
//this is the response
php.c2b()
#MOBILE CHEKOUT-STK PUSH
var php=require('./phpsap')
var body={
      //these are the verification details and are both required
      "username":"provide username",
      "apiKey":"provide the apiKey",
   

    //provide number in international formart(+254....) provide amount transaction minimum 10 send any meta data as an array
    "PhoneNumber":"provide the recipient phone number in intenational format ie +254....",
	"Amount":"provide the amount. Note minimal amount 10",
    "LNMOmetadata":[{"MetaData":"attach any metadata you want to send"}]
    
}
//passing the details to a string
const checkoutJSON=JSON.stringify(body)
module.exports=checkoutJSON
//this is the output
php.checkout()
#PAYMENTS_WALLET_BALANCE
var php=require('./phpsap')
var body={
    //these are the verification details and are both required
    "username":"provide your applicaton username",
    "apiKey":"provide your application apiKey",
        
}
//passing the details to a string
const paymentsbalJSON=JSON.stringify(body)
module.exports=paymentsbalJSON
//this is the output
php.paymentsbal()
#SAP_WALLET_BALANCE
var php=require('./phpsap')
var body={
    //these are the verification details and are both required
    "username":"provide username",
    "apiKey":"provide the apiKey",
        
}
//passing the details to a string
const sapbalanceJSON=JSON.stringify(body)

module.exports=sapbalanceJSON
//this is the output
php.sapbalance()
#WALLET TRANSFER
var php=require('./phpsap')
var body={
    //these are the verification details and are both required
    "username":"provide your applicaton username",
    "apiKey":"provide your application apiKey",
  
  
   //provide DestinatonAccount DestinationChannel and Amount
  
    "DestinationAccountName":"Provide destination account",
    "Amount":"ProvideAmount"
   
    
  }
  //passing the details to a string
  const transferJSON=JSON.stringify(body)
  
  module.exports=transferJSON
//this is the output
php.transfer()
