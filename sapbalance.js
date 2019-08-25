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



