'use strict';


let leftimgelement=document.getElementById("left-image");
let centerimgelement=document.getElementById("center-image");
let rightimgelement =document.getElementById("right-image");
let section =document.getElementById("sec-one");
let btn =document.getElementById("btn");
let counttime=0;
let maxattempt =25;
// when maxattempt = counttime stop the event

function product(name,source ){
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.showing=0;
    product.globArr.push(this);
  }
  
  product.globArr = [];

  new product('bag','bag.jpg'); // [0]
  new product('banana', 'banana.jpg'); //[1]
  new product('bathroom','bathroom.jpg');//[2]
  new product(' boots','boots.jpg');//[3]
  new product('breakfast','breakfast.jpg');//[4]
  new product('bubblegum','bubblegum.jpg');//[5]
  new product('chair','chair.jpg');//[6]
  new product('cthulhu','cthulhu.jpg')//[7]
  new product('dog-duck','dog-duck.jpg'); // [8]
  new product('dragon', 'dragon.jpg'); //[9]
  new product('pen','pen.jpg');//[10]
  new product('pet-sweep','pet-sweep.jpg');//[11]
  new product('scissors','scissors.jpg');//[12]
  new product('shark','shark.jpg');//[13]]
  new product('sweep','sweep.png');//[14]
  new product('tauntaun','tauntaun.jpg')//[15]
  new product('unicorn','unicorn.jpg')//[16]
  new product('water-can','water-can.jpg')//[17]
  new product('wine-glass','wine-glass.jpg')//[18]


  let leftIndex;
  let centerIndex;
let rightIndex;


function generateRandomIndex(){
    return Math.floor(Math.random() * product.globArr.length);
                      
}


function renderThreeimages(){
    leftIndex = generateRandomIndex();  
    centerIndex = generateRandomIndex();  

    rightIndex = generateRandomIndex();

   console.log('Before',leftIndex);
   console.log('Before',centerIndex);

   console.log('Before',rightIndex);
 
  while(leftIndex === rightIndex ||leftIndex === centerIndex||rightIndex===centerIndex){
    leftIndex = generateRandomIndex(); 
    rightIndex = generateRandomIndex(); 
}

  leftimgelement.src = product.globArr[leftIndex].source;
  centerimgelement.src = product.globArr[centerIndex].source;
  rightimgelement.src = product.globArr[rightIndex].source;
  product.globArr[leftIndex].showing++;
  product.globArr[centerIndex].showing++;
  product.globArr[rightIndex].showing++;

  console.log(product.globArr);                                       


}renderThreeimages();


section.addEventListener('click',handleClick);






function handleClick(event){
    counttime++ ;
  
    if(maxattempt >= counttime){
            if(event.target.id === 'left-image'){
              product.globArr[leftIndex].votes++;
            }else if(event.target.id ==='center-image'){
              product.globArr[centerIndex].votes++;
            }
            else if(event.target.id ==='right-image'){
                product.globArr[rightIndex].votes++;
              }else {

                alert("please click on the img ");
                counttime-- ;
              }
            renderThreeimages();
    }else{
        btn.addEventListener('click', renderList);

    }
   
  }
  
  
  function renderList(){
    const ul = document.getElementById('unList');
    for(let i = 0 ; i < product.globArr.length; i++){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `* ${product.globArr[i].name} has this number of showing ${product.globArr[i].showing} has this number of times the votied  ${product.globArr[i].votes } .`
    }
    
  }
  
  
