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


