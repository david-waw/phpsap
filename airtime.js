var php=require('./phpsap')
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


php.airtime()