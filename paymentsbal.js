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
