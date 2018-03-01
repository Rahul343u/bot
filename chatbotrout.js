var ObjectId = require('mongodb').ObjectID;
module.exports = function (app,dbs){

  app.post('/chappie',function (req,response)
       {
dbs.taffybot.collection("chappie").find({"query":{ $regex :req.body.query } },{answer:1}).toArray(function(err, ans)
                    {
                      if (err) throw err;

                      console.log(ans);

                      if(ans[0] !== undefined){
                         response.send({data:ans});
                       }

                       if(ans[0] == undefined){
                         ans =[{answer:'Can you please help me out what you want exactly ?'}]
                          response.send({data:ans});
                        }
                    });

        });


        app.post('/trainChappie',function (req,response)
             {

               var data =req.body;
               console.log(data);
               dbs.taffybot.collection("chappie").insertOne(data,function(err, res) {
                 if (err) throw err;
     ans =[{answer:'Thank you for Teaching me this '+"'"+req.body.query+"'"}]
      response.send({data:ans});

  });




              });


  return app;
  };
