
let red=1
let green=1
let yellow=1
let blue=1

const player=["red","green","blue","yellow"]
let n=0
// console.log(n);
let color=player[n]
document.querySelector(".nowplay").innerHTML=color
const spin=()=>{
    const num=Math.floor(Math.random()*6)+1
    console.log(color);
    console.log(num);
    changename(num)

    if(num===1){
        let re=color
        let val=""
        let mov=0
        if(color==="red"){
            val=re+red
            red++
            mov=1
        }else if(color==="green"){
            val=re+green
            green++
            mov=40
        }else if(color=="yellow"){
            val=re+yellow
            yellow++
            mov=27
        }else if(color=="blue"){
            val=re+blue
            blue++
            mov=14
        }

        console.log(re);
        document.querySelector(`.num${mov}`).style.backgroundColor=color
        document.querySelector(`.${val}`).style.backgroundColor="white"
        
     
    }
    
    n++
    if(n===4){
        n=0
    }
    color=player[n]
    
}


const changename=(num)=>{
    document.querySelector(".nowplay").innerHTML=color
    document.querySelector(".nowscore").innerHTML=num
}