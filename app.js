const cards = document.querySelectorAll('.card>h1');
const mainLetters= document.querySelectorAll('.card>h1>span');
const btn = document.querySelector('.btn')
const boxCard = document.querySelectorAll('.card');
let cardLeft = document.querySelector('.cardLeft')
let points = document.querySelector('.points')
let col = document.querySelectorAll('.col')
let body = document.querySelector('.game-body');
let popUp = document.querySelector('.pop-up')
//randomise the letters everytime you enter the game

const letters = ['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H']
let number = Math.floor(Math.random() * 8);
let randomNumbersA= [];
let randomNumbersB= [];
let randomNumbers=[];
let colSize= [];
let tempCol = [];
let check = '';
let num = 0;
let cleft = 16;
points.innerText = num;
cardLeft.innerText = cleft;
let colRan = 0;

const colRandom = ()=> {
  
 

  for(let i = 0 ; i < 4 ; i++)
    {
     
      tempCol[i] = col[i];

    }
  col[0] = tempCol[3];
  col[1] = tempCol[2]
  col[2] = tempCol[4]
  col[3]=  tempCol[1]
}


const rendomnise = ()=>{

        for(i = 0 ; i < 8 ;i++ ){  
                    do{
                        number = Math.floor(Math.random() * 8);
                        check =randomNumbersA.includes(number)
                    }
                    while(check)
                  randomNumbersA[i] = number;
                  randomNumbers[i] = randomNumbersA[i];

                }

                for(i = 8 ; i < 16 ;i++ ){  

                  do{
                      number = Math.floor(Math.random() * 8);
                      check = randomNumbersB.includes(number)
                  }
                  while(check)
               
                randomNumbersB[i] = number;
                randomNumbers[i] = randomNumbersB[i];
                
               
              }
               console.log(randomNumbers);
               for(let s = 0 ; s < 16 ; s++)
                {
                  
                  mainLetters[s].innerText = letters[randomNumbers[s]];
                  console.log('hey',mainLetters[s].innerText)
                }
                 
}
let cardStore = [];

btn.addEventListener('click' , ()=>{
  // 
   popUp.style.visibility = 'hidden'
  body.style.backgroundColor ="#22739b"
  rendomnise();
  randomNumbers= [];
  randomNumbersB= [];
  randomNumbersA= [];
  colRandom();
  console.log(randomNumbers);
  btn.innerText = 'Restart'
  cards.forEach((card)=>{
  card.style.color = '#023047';
  card.style.border = `#8ECAE6 .2rem solid`;
  })
  cardStore = []
  num = 0;
  cleft = 16;
  points.innerText = num;
  cardLeft.innerText = cleft;

  mainLetters.forEach(l=>{
    l.style.visibility = 'hidden'
  })

  
})



cards.forEach(box => {
  box.addEventListener('click',()=>{
    if(cardStore.length == 0){

        cardStore.push(box.firstChild) ;
        box.firstChild.style.color = '#8ECAE6'
        box.firstChild.style.visibility = 'visible'
        box.style.border = `#8ECAE6 .2rem solid`;
        console.log(cardStore[0]);
    }
    else{
      box.firstChild.style.visibility = 'visible'      
      console.log(box.firstChild.innerText)

        if(cardStore[0].innerText === box.firstChild.innerText)
          {
            box.firstChild.style.visibility = 'visible'
            box.firstChild.style.color = '#FB8500';
            box.style.border = `#FFB703 .2rem solid`;
            cardStore[0].style.color = '#FB8500';
            cardStore[0].parentElement.style.border = `#FFB703 .2rem solid`;
            num = num +10;
            points.innerText = num;
            cardStore= [];
            cleft = cleft - 2;
            cardLeft.innerText = cleft;
            if(cardLeft.innerText == 0)
              {
                setTimeout(()=>{
                    body.style.backgroundColor ="#023047"
                    cards.forEach(card=>{
                      card.style.backgroundColor ="#023047"
                      card.style.border ="none"
                      card.firstChild.style.visibility  ="hidden"
                      popUp.style.visibility = 'visible'
                      popUp.style.top = '50%'
                      popUp.style.transform = 'translate(-50% , -50%) scale(1)'
                    })
                },3000)
               
              } 
          }
      else{
        box.firstChild.style.visibility = 'visible'
        box.firstChild.style.color = 'red'
        box.style.border = `red .2rem solid`;
            setTimeout(()=>{
              box.firstChild.style.visibility = 'hidden';
              cardStore[0].style.visibility = 'hidden';
              cardStore[0].parentElement.style.border = `0rem`;
              box.style.border = `0rem`;
              cardStore= [];
              num = num - 5 ;
              points.innerText = num;
             
            },2000)
          }
    }
   
  })
})