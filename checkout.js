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


