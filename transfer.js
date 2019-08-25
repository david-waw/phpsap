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
  
  