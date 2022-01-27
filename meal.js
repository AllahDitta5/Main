function getData() {

    const res = new XMLHttpRequest();
    res.open("Get", "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
    res.onload = function () {
// console.log(xhr.responseText);
const datax =JSON.parse(res.responseText);
var data =datax.meals;
// console.log(data);
var outPut=''; 
for(let i=0; i<8; i++){
    outPut+=`<div class="col-lg-3"><a href="#"><img src="${data[i].strMealThumb}" width="250" height="250"></img>
    <p>Chivito uruguayo</p></a></div>`
        }
        document.getElementById("lat-meal").innerHTML = outPut;
        // document.getElementById("pop-ing").innerHTML = outPut;
        // document.getElementById("ran-meal").innerHTML = outPut;    
        }
        
        res.send();
     
    }
    getData();




    function popularIng() {

        const xhr = new XMLHttpRequest();
            xhr.open("Get", "https://www.themealdb.com/api/json/v1/1/categories.php");
            xhr.onload = function () {
    // console.log(xhr.responseText);
    const datax =JSON.parse(xhr.responseText);
    var data =datax.categories;
    // console.log(data);
    var outPut=''; 
    for(let i=0; i<4; i++){
        outPut+=`<div class="col-lg-3"><a href="#"><img src="${data[i].strCategoryThumb}" width="250" height="250"></img>
        <p>Chivito uruguayo</p></a></div>`
            }
         
            document.getElementById("popularIng").innerHTML = outPut;    
            }
            
            xhr.send();
         
        }
        popularIng();





    function randomMeal() {

        const xhr = new XMLHttpRequest();
            xhr.open("Get", "https://www.themealdb.com/api/json/v1/1/categories.php");
            xhr.onload = function () {
    // console.log(xhr.responseText);
    const datax =JSON.parse(xhr.responseText);
    var data =datax.categories;
    // console.log(data);
    var outPut=''; 
    for(let i=0; i<8; i++){
        outPut+=`<div class="col-lg-3"><a href="#"><img src="${data[i].strCategoryThumb}" width="250" height="250"></img>
        <p>Chivito uruguayo</p></a></div>`
            }
        
            document.getElementById("ran-meal").innerHTML = outPut;    
            }
            
            xhr.send();
         
        }
        randomMeal();



    //   function randomIngredients(){
    //       const req = new XMLHttpRequest();
    //       req.open("Get", "https://www.themealdb.com/api/json/v1/1/categories.php");
    //       req.onload = function(){
    //           const arrayData =JSON.parse(req.responseText);
    //           var data = arrayData.randomIngred;
    //           console.log(data);
    //           var output = '';
    //           for(let i=0; i<4; i++){
    //               output += ` <div class="col-lg-3"><a href="#"><img src="${data[i].img}"></img>
    //               <p>${data[i].imgName}</p></a></div>
                  
    //               `
    //           }
    //           document.getElementById("randomIngredients").innerHTML = output;
    //       }
    //       req.send();
    //   }
    //   randomIngredients();


     



















    // var arr = [
    //     "categories.php",
    //     "random.php",
    //     "filter.php?i=chicken_breast",
    // ]
    // for(let i in arr){
    // console.log("https://www.themealdb.com/api/json/v1/1/"+arr[i]);  


// if(xhr.status===200){
            //     console.log("ok");
            // }
            // console.log(xhr.status);
            // console.log(xhr.readyState);



//     <ul>
//     <li> <img src="${data[i].strMealThumb} "></li>
//      <li>${data[i].idMeal}</li>
//      <li>${data[i].strMeal}</li>
//      <li>${data[i].strIngredient2}</li>
//      <li></li>
//   </ul>