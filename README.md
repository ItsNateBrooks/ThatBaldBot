# Name
ThatBaldBot

<img src="https://cdn.discordapp.com/attachments/522614657400176650/973034937760481290/ThatBaldBot_-_Background.png" width="200" height="200" />

# Description
Discord Bot, currently responds to certain chat messages with gifs and also can play rock paper scissors and 
Tic Tac Toe with the commands !rps and !ttt respectively.

# Contributors
 - Nathaniel Brooks

# Installation
Currently I run the bot on my personal discord servers, but to run it for yourself make a git clone with the command 
"git clone https://github.com/ItsNateBrooks/ThatBaldBot"
then one file will need to be added which is the .env file, basically this contains the needed login info to both the Discord Developer Portal API and the TENOR Gif API.
To make the required .env it is incredibly simple, first make a empty file with the .env extension and then format the file similair to the following screenshot:

![.env](https://cdn.discordapp.com/attachments/522614657400176650/973058484851601438/file.env.png)
  
Save your .env file and make sure it is in the same folder as main.js
To run the bot, navigate to the folder containing the main.js folder using command prompt or another text based file explorer and run the command node main.js.
**NOTE** Certain things will need to be installed to run the node command

# Usage
Any mention of the following words: "boi", "oof", "xqc" or "valheim" will result in the user being replied to with a specific gif
  
For rock paper scissors simply typing !rps followed by either "rock", "paper" , or "scissors" will result in the bot responding with a random response by the bot of
either rock, paper, or scissors followed by a statement that claims who wins or if there is a tie
  
For Tic Tac Toe simply typing !ttt will begin setting up the game, from there users can react to a message sent by the bot to set themselves as either X or O in the
game. For the user to select a spot during the game they can simply react to the message containing the game board and then this places either an X or O in the spot 
they desired. Users will go back and forth until someone wins or if there is a tie.

# Example Images
## Rock Paper Scissors Example
![Rock Paper Scissors](https://cdn.discordapp.com/attachments/522614657400176650/973034214876385300/RockPaperScissors.PNG)
## Tic Tac Toe Example
### Select Roles
![Tic Tac Toe 1](https://cdn.discordapp.com/attachments/522614657400176650/975472109964886056/ttt.PNG)
### Start TTT
![Tic Tac Toe 2](https://cdn.discordapp.com/attachments/522614657400176650/975472578594488350/ttt_start.PNG)
### Game End
![Tic Tac Toe 3](https://cdn.discordapp.com/attachments/522614657400176650/975472109763575838/Game_Win.PNG)
## Oof Example
![oof](https://cdn.discordapp.com/attachments/522614657400176650/973034215128068156/oof.PNG)
