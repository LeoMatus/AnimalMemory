# Animal Memory

Animal Memory is a simple game of memory that can be played on any device. It does not matter if you are a child that is trying the game for the first time, or an experienced adult. Animal memory provides difficulties suitable for all users.

![mockup](docs/mockup-animal.jpg)

## Features

### Header with Difficulties and Attempts Counter

On the top of the page you find a simple header containing the name of the page "Animal Memory". Beneth the header there is an option to select the difficulty you wish to play on rangeing from easy to hard. Each difficulty level represents the number of attempts the player has to solve the memory game. If a player is mid game and tries to switch difficulty it resets the game by unflipping all cards, re-shuffeling the board and reseting the number of attempts.

Next to the difficulties you find an attempt counter. The counter starts at the max number of attempts the player has and subtracts one attempt for each wrong guess the player makes. When the number of attempts reaches zero the game is over and no more cards can be clicked.

![Header](docs/animal-memory-header.jpg)

### Memory Game

The rest of the page consists of the game area containing 24 cards of 12 different animals. The game is simple, click a card to make it flip and show the animal on the other side, then click another card. If the two animals are the same you get a point and the cards remain facig animal side up. If the cards dont match the cards will be flipped back and your job is to try to memorize the position of the animals until you encounter its matching counterpart.

![Memory game](docs/memory-game.jpg)

### Features Left to Implement

I think that the game lacks the option to chose the number of cards you want to play with. So a feature that either adds more memory cards to the game or removes cards from the game to change the difficulty of it would be a good thing to add.

## Testing

Every time a new feature was implemented some testing had to be made to see if the code worked well together.

I started by creating the game area and the memory cards. To see if the cards worked as intended i tested them by clicking the cards to make them flip. If I got a match the animals were supposed to stay visable. When two cards did not match they had to get flipped back after 1.5 seconds. I tried spam clicking many cards after I had clicked two cards to make sure it was not possible to flip cards before the reflipping animation was done.

I refreshed the page many times to make sure the cards were shuffled and placed on a random spot each time the page was refreshed.

When I added the difficultiy buttons I had to make sure the correct number of attempts were added to the corresponding button. This was done by selecting a difficulty and checking if the correct number of "remaining attempts" was dispalyed on the top right. I also tried to use all of the attempts on each difficulty to see if the "gameOver" was implemented which locks the board preventing the player from keep on playing the game. This was done for every difficulty.

If a player was in the middle of playing the game and decided to change difficulty the cards that were already showing had to get reflipped and reshuffled. At first the cards did this in the wrong order which made it possible for the player to see the new position of the cards they had already flipped when a new game started. A function was created that made the cards flip back to show the backside before shuffeling the cards again. 

To check if my media queries worked as intended i tried my website on a 4k screen and my mobile phone (Samsung Galaxy s10). Both worked fine and i liked the way they turned out. For some reason though, the media queiries did not get applied to the generated mockup picture. I could not find the reason for this and decided to share the image anyways. On the mobile version the cards have way less padding than shown on the picture making the cards bigger and less seperated. 

## Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fleomatus.github.io%2FAnimalMemory%2F)
  - The validator however recomended that I used a header in the section element. In my opinion however I dont see the need for one and think that the website looks better without it.

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fleomatus.github.io%2FAnimalMemory%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- JS
  - No syntax errors! [beautifytools](https://beautifytools.com/javascript-validator.php)
  - There are 18 functions in this file. Function with the largest signature take 1 arguments, while the median is 0. Largest function has 11 statements in it, while the median is 2.The most complex function has a cyclomatic complexity value of 5 while the median is 1. [jshint](https://jshint.com/)

### Unfixed Bugs

Because the memory cards are images, you are able to click and drag them. This doesnt cause any serious problems but can be annoying when trying to click a card and it instead gets dragged.

## Credits

### Content

I was not sure about how a forEach loop was used and learnd that from [StackedOverflow](stackoverflow.com)

### Media

All the african animal images were taken from [unsplash](https://unsplash.com/s/photos/african-wildlife)

- This includes
    - Baboon
    - Elephant
    - Giraffe
    - Lion

The shark image was taken from [wallpaperflare](https://www.wallpaperflare.com/big-shark-profile-great-white-shark-ocean-wallpaper-uvgku)

The polar bear picture was taken from [wallpapaerflare](https://www.wallpaperflare.com/photography-animals-polar-bears-wallpaper-crvng)

The picture of the parrots was taken from [piterest](https://www.pinterest.com/pin/452752568799940859/?d=t&mt=login)

The cards backside image was taken from [thepanicroomonline](https://thepanicroomonline.net/products/welcome-to-the-jungle-puzzle-cards)
