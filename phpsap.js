
module.exports={
    airtime:function (){
    var airtimeJSON=require('./airtime.js')
    const fs=require('fs')
      const https=require('https')
      const options={
          hostname:'renthero.co.ke',
          path:'/phpsap/developer/payments/airtime.php',
          method:'POST',
          headers:{
              'Content-Type':'application/json',
              'Content-Length':airtimeJSON.length
          }
      }
      const req=https.request(options,res=>{
      
         res.setEncoding('utf8')
         res.on('data',function(chunk){
             console.log('Response:'+chunk)
             
         })
       
          })
      
      req.on('error',error=>{console.error()}
      )
      req.write(airtimeJSON)
      req.end()
      },

    sms:function (){
        var smsJSON=require('./sms.js')
          const fs=require('fs')
          const https=require('https')
          const options={
              hostname:'renthero.co.ke',
              path:'/phpsap/developer/payments/sms.php',
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Content-Length':smsJSON.length
              }
          }
          const req=https.request(options,res=>{
          
             res.setEncoding('utf8')
             res.on('data',function(chunk){
                 var Response=('Response:'+chunk)
                 console.log(Response)
                
             })
           
              })
          
          req.on('error',error=>{console.error()}
          )
          req.write(smsJSON)
          req.end()
    },
       sapbalance:function (){
        var sapbalanceJSON=require('./sapbalance.js')
          const fs=require('fs')
          const https=require('https')
          const options={
              hostname:'renthero.co.ke',
              path:'/phpsap/developer/payments/sap_wallet_balance.php',
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'Content-Length':sapbalanceJSON.length
              }
          }
          const req=https.request(options,res=>{
          
             res.setEncoding('utf8')
             res.on('data',function(chunk){
                 var Response=('Response:'+chunk)
                 console.log(Response)
                
             })
           
              })
          
          req.on('error',error=>{console.error()}
          )
          req.write(sapbalanceJSON)
          req.end()
          },
          
          checkout:function (){
            var checkoutJSON=require('./checkout.js')
              const fs=require('fs')
              const https=require('https')
              const options={
                  hostname:'renthero.co.ke',
                  path:'/phpsap/developer/payments/lnmo.php',
                  method:'POST',
                  headers:{
                      'Content-Type':'application/json',
                      'Content-Length':checkoutJSON.length
                  }
              }
              const req=https.request(options,res=>{
              
                 res.setEncoding('utf8')
                 res.on('data',function(chunk){
                     var Response=('Response:'+chunk)
                     console.log(Response)
                    
                 })
               
                  })
              
              req.on('error',error=>{console.error()}
              )
              req.write(checkoutJSON)
              req.end()
              },

              b2c:function (){
                var b2cJSON=require('./b2c.js')
                  const fs=require('fs')
                  const https=require('https')
                  const options={
                      hostname:'renthero.co.ke',
                      path:'/phpsap/developer/payments/sapb2c.php',
                      method:'POST',
                      headers:{
                          'Content-Type':'application/json',
                          'Content-Length':b2cJSON.length
                      }
                  }
                  const req=https.request(options,res=>{
                  
                     res.setEncoding('utf8')
                     res.on('data',function(chunk){
                         var Response=('Response:'+chunk)
                         console.log(Response)
                        
                     })
                   
                      })
                  
                  req.on('error',error=>{console.error()}
                  )
                  req.write(b2cJSON)
                  req.end()
                  },

                  b2b:function (){
                    var b2bJSON=require('./b2b.js')
                      const fs=require('fs')
                      const https=require('https')
                      const options={
                          hostname:'renthero.co.ke',
                          path:'/phpsap/developer/payments/sapb2b.php',
                          method:'POST',
                          headers:{
                              'Content-Type':'application/json',
                              'Content-Length':b2bJSON.length
                          }
                      }
                      const req=https.request(options,res=>{
                      
                         res.setEncoding('utf8')
                         res.on('data',function(chunk){
                             var Response=('Response:'+chunk)
                             console.log(Response)
                            
                         })
                       
                          })
                      
                      req.on('error',error=>{console.error()}
                      )
                      req.write(b2bJSON)
                      req.end()
                      },

                      c2b:function (){
                        var c2bJSON=require('./c2b.js')
                          const fs=require('fs')
                          const https=require('https')
                          const options={
                              hostname:'renthero.co.ke',
                              path:'/phpsap/developer/payments/sapc2b_validation.php',
                              method:'POST',
                              headers:{
                                  'Content-Type':'application/json',
                                  'Content-Length':c2bJSON.length
                              }
                          }
                          const req=https.request(options,res=>{
                          
                             res.setEncoding('utf8')
                             res.on('data',function(chunk){
                                 var Response=('Response:'+chunk)
                                 console.log(Response)
                                
                             })
                           
                              })
                          
                          req.on('error',error=>{console.error()}
                          )
                          req.write(c2bJSON)
                          req.end()
                          },

                          paymentsbal:function (){
                            var paymentsbalJSON=require('./paymentsbal.js')
                              const fs=require('fs')
                              const https=require('https')
                              const options={
                                  hostname:'renthero.co.ke',
                                  path:'/phpsap/developer/payments/payments_wallet_balance.php',
                                  method:'POST',
                                  headers:{
                                      'Content-Type':'application/json',
                                      'Content-Length':paymentsbalJSON.length
                                  }
                              }
                              const req=https.request(options,res=>{
                              
                                 res.setEncoding('utf8')
                                 res.on('data',function(chunk){
                                     var Response=('Response:'+chunk)
                                     console.log(Response)
                                    
                                 })
                               
                                  })
                              
                              req.on('error',error=>{console.error()}
                              )
                              req.write(paymentsbalJSON)
                              req.end()
                              },
                              transfer:function (){
                                var transferJSON=require('./transfer.js')
                                  const fs=require('fs')
                                  const https=require('https')
                                  const options={
                                      hostname:'renthero.co.ke',
                                      path:'/phpsap/developer/payments/payments_wallet_balance.php',
                                      method:'POST',
                                      headers:{
                                          'Content-Type':'application/json',
                                          'Content-Length':transferJSON.length
                                      }
                                  }
                                  const req=https.request(options,res=>{
                                  
                                     res.setEncoding('utf8')
                                     res.on('data',function(chunk){
                                         var Response=('Response:'+chunk)
                                         console.log(Response)
                                        
                                     })
                                   
                                      })
                                  
                                  req.on('error',error=>{console.error()}
                                  )
                                  req.write(transferJSON)
                                  req.end()
                                  }

}