myApp.controller("chatController", function($scope,$http,$timeout){


                     var message =[{chat:'Hi, I am Chappie and I am here to help.' ,
                                  classname:'left-chat',
                                  image :'/images/chappie.jpg'}
                   ];

                     $scope.message= message;

                     $scope.myquery = function(){
                       var message1 ={chat:$scope.query,
                                    classname:'right-chat',
                                    image :'/images/man02.png'};
                     message.push(message1);
                      $scope.message= message;
                      setTimeout(function() {
                        var scroll = document.getElementById('chat-section');
                        scroll.scrollTop = scroll.scrollHeight;
                        scroll.animate({scrollTop: scroll.scrollHeight});
                    }, 1);

                    var config = {
                            headers : {
                                'Content-Type': 'application/json'
                            }
                        }
                        var data = {query:$scope.query.toLowerCase()};

                    $http.post("/chappie" , data , config).then(function (data, status, headers, config) {
                      var message1 ={chat:data.data.data[0].answer,
                                   classname:'left-chat',
                                   image :'/images/chappie.jpg'};
                    message.push(message1);
                    setTimeout(function() {
                      var scroll = document.getElementById('chat-section');
                      scroll.scrollTop = scroll.scrollHeight;
                      scroll.animate({scrollTop: scroll.scrollHeight});
                  }, 1);
                  });

                    $scope.query = '';
                   }

                   $scope.trainChappie = function(){
                     var tagtrain1 = '';
                     var tagtrain1 = '';

                     if($scope.tag1tolearn){tagtrain1 = $scope.tag1tolearn.toLowerCase()};
                     if($scope.tag2tolearn){tagtrain2 = $scope.tag2tolearn.toLowerCase()};

                       if($scope.querytolearn && $scope.answertolearn)
                       {
                         var data =  {
                             query: $scope.querytolearn.toLowerCase(),
                             answer: $scope.answertolearn,
                             tag1: tagtrain1,
                             tag2: tagtrain1
                           };
                           var config = {
                                   headers : {
                                       'Content-Type': 'application/json'
                                   }
                               }

                               $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {
                                 var message1 ={chat:data.data.data[0].answer,
                                              classname:'left-chat',
                                              image :'/images/chappie.jpg'};
                               message.push(message1);
                               setTimeout(function() {
                                 var scroll = document.getElementById('chat-section');
                                 scroll.scrollTop = scroll.scrollHeight;
                                 scroll.animate({scrollTop: scroll.scrollHeight});
                             }, 1);
                             });


      // Alternate queries
      if($scope.query1tolearn){
      var data =  {
          query: $scope.query1tolearn,
          answer: $scope.answertolearn,
          tag1: tagtrain1,
          tag2: tagtrain1
        };
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
             $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {});
          };

          if($scope.query2tolearn){
          var data =  {
              query: $scope.query2tolearn.toLowerCase(),
              answer: $scope.answertolearn,
              tag1: tagtrain1,
              tag2: tagtrain1
            };
            var config = {
                    headers : {
                        'Content-Type': 'application/json'
                    }
                }
                 $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {});
              };

              if($scope.query3tolearn){
              var data =  {
                  query: $scope.query3tolearn.toLowerCase(),
                  answer: $scope.answertolearn,
                  tag1: tagtrain1,
                  tag2: tagtrain1
                };
                var config = {
                        headers : {
                            'Content-Type': 'application/json'
                        }
                    }
                     $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {});
                  };

                  if($scope.query4tolearn){
                  var data =  {
                      query: $scope.query4tolearn.toLowerCase(),
                      answer: $scope.answertolearn,
                      tag1: tagtrain1,
                      tag2: tagtrain1
                    };
                    var config = {
                            headers : {
                                'Content-Type': 'application/json'
                            }
                        }
                         $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {});
                      };

                      if($scope.query5tolearn){
                      var data =  {
                          query: $scope.query5tolearn.toLowerCase(),
                          answer: $scope.answertolearn,
                          tag1: tagtrain1,
                          tag2: tagtrain1
                        };
                        var config = {
                                headers : {
                                    'Content-Type': 'application/json'
                                }
                            }
                             $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {});
                          };

                          if($scope.query6tolearn){
                          var data =  {
                              query: $scope.query6tolearn.toLowerCase(),
                              answer: $scope.answertolearn,
                              tag1: tagtrain1,
                              tag2: tagtrain1
                            };
                            var config = {
                                    headers : {
                                        'Content-Type': 'application/json'
                                    }
                                }
                                 $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {});
                              };

                              if($scope.query7tolearn){
                              var data =  {
                                  query: $scope.query7tolearn.toLowerCase(),
                                  answer: $scope.answertolearn,
                                  tag1: tagtrain1,
                                  tag2: tagtrain1
                                };
                                var config = {
                                        headers : {
                                            'Content-Type': 'application/json'
                                        }
                                    }
                                     $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {});
                                  };


                                  if($scope.query8tolearn){
                                  var data =  {
                                      query: $scope.query8tolearn.toLowerCase(),
                                      answer: $scope.answertolearn,
                                      tag1: tagtrain1,
                                      tag2: tagtrain1
                                    };
                                    var config = {
                                            headers : {
                                                'Content-Type': 'application/json'
                                            }
                                        }
                                         $http.post("/trainChappie" , data , config).then(function (data, status, headers, config) {});
                                      };






                       }else{
                         var message1 ={chat:'you need to provide Query and Answer both, So that I can learn properly. You can also provide some alternate queries for same answer. Thanks you.',
                                      classname:'left-chat',
                                      image :'/images/chappie.jpg'};
                       message.push(message1);
                       setTimeout(function() {
                         var scroll = document.getElementById('chat-section');
                         scroll.scrollTop = scroll.scrollHeight;
                         scroll.animate({scrollTop: scroll.scrollHeight});
                     }, 1);
                   };
                 };

                   });







                   // Get the modal
                   var modal = document.getElementById('trainingModal');

                   // Get the button that opens the modal
                   var chatbottraininglink = document.getElementById("chatbottraininglink");

                   // Get the <span> element that closes the modal
                   var span = document.getElementById("closeTaraining");

                   // Get the cancel button element that closes the modal
                   var trainCancel = document.getElementById("trainingCancel");
                   trainCancel.onclick = function() {
                       modal.style.display = "none";
                   };

                   // When the user clicks the button, open the modal
                   chatbottraininglink.onclick = function() {
                       modal.style.display = "block";
                   };

                   // When the user clicks on <span> (x), close the modal
                   span.onclick = function() {
                       modal.style.display = "none";
                   };
                 // When the user clicks on cancel, close the modal

                 ExportCancel.onclick = function() {
                     modal.style.display = "none";
                 };
                 ExportSubmit.onclick = function() {
                     modal.style.display = "none";
                 };

                   // When the user clicks anywhere outside of the modal, close it
                   window.onclick = function(event) {
                       if (event.target == modal) {
                           modal.style.display = "none";
                       }

                 };
