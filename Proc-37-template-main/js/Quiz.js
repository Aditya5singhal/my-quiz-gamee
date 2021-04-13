class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background ("yellow")
    //write code to show a heading for showing the result of Quiz
    text("result of the quiz",200,100)
    text("__________________",200,110)

    //call getContestantInfo( ) here
    Contestant. getPlayerInfo();

  if(allContestants  !== undefined){
  fill ("blue")
  textsize(20);
  text("*NOTE contestant who answered correct are highlighted in green color!",130,230);

}
    //write condition to check if contestantInfor is not undefined
for(var plr in allContestants){
  var correctAns="2";
  if(correctAns===allContestants[plr].answer)
  fill("green")
  else
  fill("red")
  display_Answer+=30
  text(allContestants [plr].name+':'+allContestants [plr].answer,250,display_Answer)
}

    //write code to add a note here
    //text("*NOTE contestant who answered correct are highlighted in green color!",130,230);
 //   text("*NOTE contestant who gave incorrect answer will be highlighted red color!",130,240);
    //write code to highlight contest who answered correctly
   // text("swayam gave the correct answer!",200,400)
   // text("jack gave the incorrect answer!",200,410)
  }

}
