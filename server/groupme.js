
Meteor.methods({
  groupmeTest: function (post) {
    var API = Meteor.npmRequire('groupme').Stateless;
    const ACCESS_TOKEN = "f487ce307f3601338c7306fd38831e3b";
    const group_id = "18335909";
    API.Users.me(ACCESS_TOKEN, function(err,ret) {
      if (!err) {
        console.log("Your user id is", ret.id, "and your name is", ret.name);
      }
      console.log(err);
    });

    API.Messages.index(ACCESS_TOKEN, group_id, [], function(err,ret){
      if (!err) {
        ret.messages.forEach(function(message){
          if(message.sender_id == '11386760'){
            console.log("we did it");
            //SimpleStorage.set(101);
            //gotText();
          }
        })
      }
    });

    return ACCESS_TOKEN;
  }

})





