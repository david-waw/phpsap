var php=require('./phpsap')
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
    php.sms()


