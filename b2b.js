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


