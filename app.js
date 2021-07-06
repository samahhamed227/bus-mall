'use strict';


let leftimgelement=document.getElementById("left-image");
let centerimgelement=document.getElementById("center-image");
let rightimgelement =document.getElementById("right-image");
let section =document.getElementById("sec-one");
let btn =document.getElementById("btn");
let counttime=0;
let maxattempt =25;
let arrofnames =[];
let arrofvotes =[];
let last = [];
// when maxattempt = counttime stop the event

function product(name,source ){
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.showing=0;
    product.globArr.push(this);
    arrofnames.push(this.name);
   
    saveToLs();

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

function renderThreeimages(){
    leftIndex = generateRandomIndex();  
    centerIndex = generateRandomIndex();  

    rightIndex = generateRandomIndex();

   console.log('Before',leftIndex);
   console.log('Before',centerIndex);

   console.log('Before',rightIndex);
 
  while(leftIndex === rightIndex ||leftIndex === centerIndex||centerIndex===rightIndex ||
    last.includes(leftIndex)||
    last.includes(centerIndex)||
    last.includes(rightIndex)){
    leftIndex = generateRandomIndex(); 
    rightIndex = generateRandomIndex(); 
    centerIndex = generateRandomIndex(); 

  
  }
  last =[];
last.push(leftIndex,rightIndex,centerIndex);
console.log( "this is ",last);





  leftimgelement.src = product.globArr[leftIndex].source;
  centerimgelement.src = product.globArr[centerIndex].source;
  rightimgelement.src = product.globArr[rightIndex].source;
  product.globArr[leftIndex].showing++;
  product.globArr[centerIndex].showing++;
  product.globArr[rightIndex].showing++;

  console.log(product.globArr);                                       


}

renderThreeimages();
 product.newarr =[];


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
      const strigglob =JSON.stringify(product.globArr);
     localStorage.setItem(product.globArr,strigglob)
      btn.addEventListener('click', handleShow);
      section.removeEventListener('click',handleClick)
    }

    saveToLs();

  }

  
  function handleShow(){
    renderList();
    getchart();
saveToLs();
    btn.removeEventListener('click',handleShow);

  } 



  function saveToLs(){

    // we need to convert this array of objects
    const convertedArr = JSON.stringify(product.globArr);
    console.log( "length :"+convertedArr.length);
    localStorage.setItem('image', convertedArr);


  }
   function getstorage(){
     const data = localStorage.getItem('image');
  //   //console.log(data); //null
  //   //[{"name":"bashar","size":"6","isHot":"on","drinkType":"blackCoffee","milk":"regular"}]



    const convertedArr2 =JSON.parse(data);

     if(convertedArr2 != null){
      new product(convertedArr2.name,convertedArr2.source,convertedArr2.votes,convertedArr2.showing)
      console.log('-------');
      console.log(product.globArr);
      product.globArr=convertedArr2;
    
  }

     handleShow();

    
   }
  


  let arrofshow =[];
  function renderList(){
    const ul = document.getElementById('unList');
    for(let i = 0 ; i < product.globArr.length; i++){
      arrofvotes.push(product.globArr[i].votes);
      arrofshow.push(product.globArr[i].showing);

      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `* ${product.globArr[i].name} has this number of showing ${product.globArr[i].showing} has this number of times the votied  ${product.globArr[i].votes  }  .`
    }
    
  }



  function generateRandomIndex(){
    return Math.floor(Math.random() * product.globArr.length);
                      
}
  
function getchart(){

  let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:arrofnames ,
        datasets: [{
            label: 'number of Votes',
            data:arrofvotes ,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
        },{
          label: '# of Shown',
          data: arrofshow,
          backgroundColor: [
            'rgb(54, 162, 235)'
          ]
        }]
    },
})
}
  