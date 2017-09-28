

var wins = 0;
var losses = 0;
var gypsumNumber = Math.floor(Math.random() * 12) + 1;
var quartzNumber = Math.floor(Math.random() * 12) + 1;
var diamondNumber = Math.floor(Math.random() * 12) + 1;
var crystalNumber = Math.floor(Math.random() * 12) + 1;
var computerNumber = Math.floor(Math.random() * 122) + 1;
var gCounter = 0;
var qCounter = 0;
var dCounter = 0;
var cCounter = 0;
var addGypsum = gypsumNumber * gCounter
var addQuartz = quartzNumber * qCounter
var addDiamond = diamondNumber * dCounter
var addCrystal = crystalNumber * cCounter
var numberBank = 0;

$(document).ready(function(){

  $("#computerCollection").text(computerNumber);

      $("#gypsum").on("click", function(){
        //console.log("gypsum");
        gCounter++
       var addGypsum = gypsumNumber * gCounter
        $("#userCollection").text(numberBank + gypsumNumber);
        $("#clicker").text("You clicked gypsum " + gCounter + " times.")
        numberBank = numberBank + gypsumNumber;
        // console.log(numberBank);
        // console.log(gypsumNumber);
        // console.log(computerNumber);

        if (numberBank == computerNumber) {
        wins++
        $("#statement").text("You won that round!")
        $("#winner").text("Wins: " + wins)
        console.log("win");
        //var newSecret = Math.floor(Math.random() * 122) + 1;
        // computerNumber = newSecret
        // $("#computerCollection").text(newSecret)
        // var crySecret = Math.floor(Math.random() * 12) + 1;
        // gypsumNumber = crySecret
        // $("#userCollection").text(numberBank + crySecret)
        reset();
        //$("#statement").text("")
        }

        if (numberBank > computerNumber) {
        losses++
        $("#statement").text("You lost that round!")
        $("#loser").text("Losses: " + losses)
        console.log("lose");
        // var newSecret = Math.floor(Math.random() * 122) + 1;
        // computerNumber = newSecret
        // console.log(newSecret);
        // $("#computerCollection").text(newSecret)
        // var crySecret = Math.floor(Math.random() * 12) + 1;
        // gypsumNumber = crySecret
        // console.log(crySecret);
        // $("#userCollection").text(crySecret)
        reset();
        //$("#statement").text("")
        }
      });

      $("#quartz").on("click", function(){
        //console.log("quartz");
        qCounter++
        var addQuartz = quartzNumber * qCounter
        $("#userCollection").text(numberBank + quartzNumber);
        $("#clicker").text("You clicked quartz " + qCounter + " times.")
        numberBank = numberBank + quartzNumber;
        // console.log(numberBank);
        // console.log(quartzNumber);
        // console.log(computerNumber);
      
        if (numberBank == computerNumber) {
        wins++
        $("#statement").text("You won that round!")
        $("#winner").text("Wins: " + wins)
        reset();
        }

        if (numberBank > computerNumber) {
        losses++
        $("#statement").text("You lost that round!")
        $("#loser").text("Losses: " + losses)
        reset();
        }
      });

      $("#diamond").on("click", function(){
        //console.log("diamond");
        dCounter++
        var addDiamond = diamondNumber * dCounter
        $("#userCollection").text(numberBank + diamondNumber)
        $("#clicker").text("You clicked diamond " + dCounter + " times.")
        numberBank = numberBank + diamondNumber;
        // console.log(numberBank);
        // console.log(diamondNumber);
        // console.log(computerNumber);
      
        if (numberBank == computerNumber) {
        wins++
        $("#statement").text("You won that round!")
        $("#winner").text("Wins: " + wins)
        $("#winner").text("Wins: " + wins)
        reset();
        }
      
        if (numberBank > computerNumber) {
        losses++
        $("#statement").text("You lost that round!")
        $("#loser").text("Losses: " + losses)
        reset();
        }

      });
            
      $("#crystal").on("click", function(){
        //console.log("crystal");
        cCounter++
        var addCrystal = crystalNumber * cCounter
        $("#userCollection").text(numberBank + crystalNumber)
        $("#clicker").text("You clicked crystal " + cCounter + " times.")
        numberBank = numberBank + crystalNumber;
        // console.log(numberBank);
        // console.log(crystalNumber);
        // console.log(computerNumber);
      
        if (numberBank == computerNumber) {
        wins++
        $("#statement").text("You won that round!")
        $("#winner").text("Wins: " + wins)
        reset();
        }
        
        if (numberBank > computerNumber) {
        losses++
        $("#statement").text("You lost that round!")
        $("#loser").text("Losses: " + losses)
        reset();
        }

      });

      var reset = function(){
        //$("#statement").text("")
        numberBank = 0;
        var newSecret = Math.floor(Math.random() * 122) + 1;
        computerNumber = newSecret
        $("#computerCollection").text(newSecret)
        var gypSecret = Math.floor(Math.random() * 12) + 1;
        var crySecret = Math.floor(Math.random() * 12) + 1;
        var diaSecret = Math.floor(Math.random() * 12) + 1;
        var quaSecret = Math.floor(Math.random() * 12) + 1;
        gypsumNumber = gypSecret
        crystalNumber = crySecret
        diamondNumber = diaSecret
        quartzNumber = quaSecret

        $("#userCollection").text(numberBank)
      }

});

