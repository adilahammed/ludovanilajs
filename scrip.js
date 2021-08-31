
let red=1
let green=1
let yellow=1
let blue=1

const player=["red","green","blue","yellow"]
let n=0
// console.log(n);
let color=player[n]
const spin=()=>{
    const num=Math.floor(Math.random()*6)+1
    console.log(color);
    console.log(num);
    if(num===1){
        let re=color
        let val=""
        
        if(color==="red"){
            val=re+red
            red++
        }else if(color==="green"){
            val=re+green
            green++
        }else if(color=="yellow"){
            val=re+yellow
            yellow++
        }else if(color=="blue"){
            val=re+blue
            blue++
        }

        console.log(re);
        document.querySelector(".num1").style.backgroundColor="red"
        document.querySelector(`.${val}`).style.backgroundColor="white"

    }
    n++
    if(n===4){
        n=0
    }
    color=player[n]
    
}