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


