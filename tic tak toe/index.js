const btns = document.querySelectorAll("button")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const body = document.querySelector("body")

const start = document.querySelector("#start")
let user = "player1"
let bodycl = ["red","blue","green","yellow","skyblue"]
function newGame(){

for(btn of btns){
       btn.addEventListener("click",myFunction) 
    function myFunction(e,obj){
         obj = {once:true}
         let color = Math.floor(Math.random(bodycl.length)*2)
         console.log(color)
         body.style.backgroundColor = bodycl[color]
         
    
        if(document.querySelector("h1").innerText=="TIC TAC TOE"){
            
             if(user == "player1"){
                e.target.innerHTML="X"
                checkCondition()
                user = "player2"
                document.querySelector("p").innerText = user
            }else {
                e.target.innerHTML = "O"
                checkCondition()
                user = "player1"
                document.querySelector("p").innerText = user
    
         } 
        
        } else {
            document.querySelector("#refresh").innerText = `REFRESH THE PAGE!!! ${document.querySelector("h1").innerHTML} `

        }      
    }  
    }}

function checkCondition(){
    if(btn1.innerHTML=="X"&&btn1.innerHTML==btn2.innerHTML&&btn2.innerHTML==btn3.innerHTML){
        document.querySelector("h1").innerText = `${user} wins` 
        
    } else if(btn1.innerHTML== "O"&&btn1.innerHTML==btn2.innerHTML&&btn2.innerHTML==btn3.innerHTML){
        document.querySelector("h1").innerText = `${user} wins` 
        
    }  
    
    else if(btn1.innerHTML=="X"&&btn1.innerHTML==btn4.innerHTML&&btn4.innerHTML==btn7.innerHTML){
        document.querySelector("h1").innerText = `${user} wins` 
        
    }else if(btn1.innerHTML=="O"&&btn1.innerHTML==btn4.innerHTML&&btn4.innerHTML==btn7.innerHTML){
        document.querySelector("h1").innerText = `${user} wins` 
        
    }

    else if(btn4.innerHTML=="X"&&btn4.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn6.innerHTML){
        document.querySelector("h1").innerText =`${user} wins` 
        
    } else if(btn4.innerHTML=="O"&&btn4.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn6.innerHTML){
        document.querySelector("h1").innerText =`${user} wins` 
        
    } 
    else if(btn7.innerHTML=="X"&&btn7.innerHTML==btn8.innerHTML&&btn8.innerHTML==btn9.innerHTML){
        document.querySelector("h1").innerText = `${user} wins`
        
    }else if(btn7.innerHTML=="O"&&btn7.innerHTML==btn8.innerHTML&&btn8.innerHTML==btn9.innerHTML){
        document.querySelector("h1").innerText = `${user} wins`
        
    }
    else if(btn3.innerHTML=="X"&&btn3.innerHTML==btn6.innerHTML&&btn9.innerHTML==btn9.innerHTML){
        document.querySelector("h1").innerText = `${user} wins`
        
    }else if(btn3.innerHTML=="O"&&btn3.innerHTML==btn6.innerHTML&&btn9.innerHTML==btn9.innerHTML){
        document.querySelector("h1").innerText = `${user} wins`
        
    }
     else if(btn3.innerHTML=="X"&&btn3.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn7.innerHTML){
        document.querySelector("h1").innerText = `${user} wins` 
        
    }else if(btn3.innerHTML=="O"&&btn3.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn7.innerHTML){
        document.querySelector("h1").innerText = `${user} wins` 
        
    }
    else if(btn1.innerHTML=="X"&&btn1.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn9.innerHTML){
        document.querySelector("h1").innerText = `${user} wins` 
        
    
    }else if(btn1.innerHTML=="O"&&btn1.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn9.innerHTML){
        document.querySelector("h1").innerText = `${user} wins` 
        
    
    }
}
start.addEventListener("click",newGame,{once:true})


