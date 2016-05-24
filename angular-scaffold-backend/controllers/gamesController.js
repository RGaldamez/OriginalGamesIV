var game = require('../schemas/game');

exports.getGames = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin','regular','Rokr']
  // },
  
  handler: function(request, reply){
    var games = game.find({}).exec(function(err,Games) {
      if(err){
        alert("Error");
      }else{
        
        console.log(Games);
        return reply(games);
      }
    });
  }
}

exports.createGame = {
  
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin']
  // },
  handler: function(request, reply){
    var newGame = new game({
      isbn: request.payload.isbn,
      rating: request.payload.rating,
      title: request.payload.title,
      developer: request.payload.developer,
    });
    newGame.save(function (err,Game) {
      if(err){
        alert("Error al crear");
      }else{
        console.log(Game);
        return reply('funka');
      }
    });
    
  }
}

exports.getGame = {
  handler: function(request, reply){
    var games = game.find({isbn:request.params.isbn}).exec(function (err,Game) {
      if(err){
        return reply.alert("No se encontro el libro");
      }else{
       return reply(games); 
      }
    });
  }
}

exports.deleteGame = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['Rokr']
  // },
  handler: function(request, reply){
    var games = game.find({isbn:request.params.isbn});
    games.remove().exec(function (err,games) {
      if(err){
        alert("Error");
      }else{
        return reply("Deleted");    
      }
    });
  }
}

exports.postGame2 = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin']
  // },
  handler: function (request, reply) {
    game.create(request.payload, function (err,games) {
      if(err){
        return reply("Error");
      }else{
        console.log(games);
        return reply("Posted");
      }
    });
  }
}

exports.update = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin']
  // },
  handler: function (request,reply) {
    var query = {isbn : request.payload.isbn};
    game.findOneAndUpdate(
      query,
      {$set: 
        {isbn: request.payload.isbn,
         developer: request.payload.developer,
         rating: request.payload.rating,
         title: request.payload.title  
        }        
      },
      {function (err, Game) {
        if(err){
          return reply("Error");
        }else{
          
          console.log(Game);
          return reply(Game)
        }
      }}).exec();
      return reply('don');
  }
}

exports.deleteGames = {
  handler: function(request,reply){
    var games = game.find({});
    games.remove().exec(function(err){
      if (err){
          console.log('immortal');
          return reply('immortal')  
      }else{
        console.log('R.I.P.');
        return reply('R.I.P.'); 
      }
    });
  }
}