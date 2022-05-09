# Name
ThatBaldBot
![ThatBaldBot](https://cdn.discordapp.com/attachments/522614657400176650/973034937760481290/ThatBaldBot_-_Background.png)

# Description
Discord Bot, currently responds to certain chat messages with gifs and also can play rock paper scissors and 
Tic Tac Toe with the commands !rps and !ttt respectively.

# Contributors
 - Nathaniel Brooks

# Installation
Currently I run the bot on my personal discord servers, but to run it for yourself make a git clone with the command 
"git clone https://github.com/ItsNateBrooks/ThatBaldBot"
then one file will need to be added which is the .env file, basically this contains my login info to both the Discord Developer Portal API and the TENOR Gif API.
To make the .env required it is incredibly simple, first make a empty file with the .env extension and then edit the file and write the following

TOKEN = <YOUR DISCORD TOKEN>
TENORKEY = <YOUR TENOR API TOKEN>
  
Save your .env file and make sure it is in the same folder as main.js
To run the bot, navigate to the folder containing the main.js folder using command prompt or another text based file explorer and run the command node main.js.
**NOTE** Certain things will need to be installed to run the node command

# Usage
Any mention of the following words: "boi", "oof", "xqc" or "valheim" will result in the user being replied to with a specific gif
  
For rock paper scissors simply typing !rps followed by either "rock", "paper" , or "scissors" will result in the bot responding with a random response by the bot of
either rock, paper, or scissors followed by a statement that claims who wins or if there is a tie
  
For Tic Tac Toe simply typing !ttt, from there users will be instructed to do specific thing like choosing being X or O and both players saying that they want to
be a player in the game. For the user to select a spot they do !ttt <1-9> and then this places either an X or O in the spot they desired. Users will go back and
forth until someone wins or if there is a tie.

# Example Images
## Rock Paper Scissors Example
![Rock Paper Scissors](https://cdn.discordapp.com/attachments/522614657400176650/973034214876385300/RockPaperScissors.PNG)
## Tic Tac Toe Example
![Tic Tac Toe](https://cdn.discordapp.com/attachments/522614657400176650/973034214612172861/ttt.PNG)
## Oof Example
![oof](https://cdn.discordapp.com/attachments/522614657400176650/973034215128068156/oof.PNG)
