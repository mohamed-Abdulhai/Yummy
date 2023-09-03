let openNavBtn = document.getElementById("openNavBtn");
let closeNavBtn = document.getElementById("closeNavBtn");
let nav = document.getElementById("nav") 
let dataContainer = document.getElementById("dataContainer")
let detalsContaine = document.getElementById("detalsContaine")
let categories = document.getElementById("categories")
 let contant = document.getElementById("contant")
function openNav() {
    nav.style.left = 0
    $("#closeNavBtn").removeClass("d-none").addClass("d-block")
    $("#openNavBtn").removeClass("d-block").addClass("d-none")
    $("ul li a").show(500);
}
function closeNav() {
    $("#nav").css("left", "-15%")
    $("#closeNavBtn").removeClass("d-block").addClass("d-none")
    $("#openNavBtn").removeClass("d-none").addClass("d-block")
    $("ul li a").hide(500);
}
let data
async function getData() {
    
    let reqwistData = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    let responsData = await reqwistData.json()
    data = responsData.meals;
    let temp = "";
    for (let i = 0; i < data.length; i++){
        temp += `
  
  
  
    <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-12 " onclick="Detais(`+i+`)" >
                        <div class="item position-relative">
                            <img src="${data[i].strMealThumb}" class="w-100"
                                alt="meal" srcset>
                            <div
                                class="layer d-flex justify-content-center align-items-center">
                                <h4>${data[i].strMeal}</h4>
                            </div>
                        </div>
                    </div>
        `
        
        dataContainer.innerHTML = temp
    }

}
getData()


function Detais(i) {
    let crtona = ""
    dataContainer.classList.add("d-none");
    console.log(data[i]);

    crtona += `
    <div class="col-md-4 py-3">
                        <img src="${data[i].strMealThumb}" class="w-100" alt="maile iamge">
                        <h2>${data[i].strMeal}</h2>
                    </div>
                    <div class="col-md-8 py-3">
                        <div class="contant">
                            <h2>Instructions</h2>
                            <p>${data[i].strInstructions}</p>
                            <h3>Area: <span>${data[i].strArea}</span></h3>
                            <h3>Category: <span>${data[i].strCategory}</span></h3>
                            <h3>Recipes:</h3>
                            <span class="bg-success btn m-1">${data[i].strIngredient1}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient2}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient3}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient4}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient5}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient6}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient7}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient8}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient9}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient10}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient11}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient12}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient13}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient14}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient15}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient16}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient17}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient18}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient19}</span>
                            <span class="bg-success btn m-1">${data[i].strIngredient20}</span>
                            <h3>Tags:</h3>
                            <span class="bg-warning btn m-1">${data[i].strTags}</span>
                            


                            <div class="py-4">
                                <a href="${data[i].strSource}"  target="_blank" class="btn bg-info mx-3">Source</a>
                            <a href="${data[i].strYoutube}" target="_blank" class="btn bg-danger mx-3">Youtupe</a>
                            </div>
                        </div>
                    </div>
    `

    detalsContaine.innerHTML = crtona
}

async function area() {
    closeNav()
    dataContainer.innerHTML = ""
    detalsContaine.innerHTML = ""
    let temp = ""
    let reqwistData = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let responsData = await reqwistData.json()
    for (let i = 0; i < data.length; i++){
        temp += `
    <div class="col-xxl-3 col-lg-4" onclick="getDataArrya(`+data[i].idMeal+`)" >
        <div class="box p-3 border-white rounded-1 border-1 text-white">
                            <i class="fa-solid fa-house w-100"></i>
                            <h4>${data[i].strArea}</h4>
                            </div>
                    </div>
        `
        
        dataContainer.innerHTML = temp
    
    }
}

async function getDataArrya(item) {
    let reqwistDataArrya = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${item}`)
    let responsDataArrya = await reqwistDataArrya.json()
    let data = responsDataArrya.meals
    console.log(data);
    console.log(item);
    let crtona = ""
    
        for (let i = 0; i < data.length; i++) {
            crtona = `

    <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-12 "" >
                        <div class="item position-relative">
                            <img src="${data[i].strMealThumb}" class="w-100"
                                alt="meal" srcset>
                            <div
                                class="layer d-flex justify-content-center align-items-center">
                                <h4>${data[i].strMeal}</h4>
                            </div>
                        </div>
                    </div>
        `
                }
            dataContainer.innerHTML = crtona

}

function validate() {
  
            var user = document.getElementById("e").value;
            var user2 = document.getElementById("e");
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (re.test(user)) {
                alert("done");
                return true;
            }
            else {
                user2.style.border = "red solid 3px";
                return false;
            }
}
        
function contantFun() {
    closeNav()
    dataContainer.innerHTML = ""
    detalsContaine.innerHTML = ""
    let temp = `
    <div class="container">
                <form>
                    <input type="text" class="form-control m-1 w-50"
                        placeholder="Your name">
                    <input type="email" class="form-control m-1  w-50"
                        placeholder="Email" id="e">
                    <input type="text" class="form-control m-1  w-50"
                        placeholder="Your phone">
                    <input type="number" class="form-control m-1  w-50"
                        placeholder="Your age">
                    <input type="password" class="form-control m-1  w-50"
                        placeholder="Password">
                    <input type="password" class="form-control m-1  w-50"
                        placeholder="Renter Password">
                    <input type="submit" onclick="validate()">
                </form>
            </div>
    `
    contant.innerHTML = temp

}

