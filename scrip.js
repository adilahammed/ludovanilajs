
let red=1
let green=1
let yellow=1
let blue=1
let redmov=0
let greenmov=0
let yellowmov=0
let bluemov=0
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
            // red++
            mov=1
            redmov=mov
        }else if(color==="green"){
            val=re+green
            // green++
            mov=40
            greenmov=mov
        }else if(color=="yellow"){
            val=re+yellow
            // yellow++
            mov=27
            yellowmov=mov
        }else if(color=="blue"){
            val=re+blue
            // blue++
            mov=14
            bluemov=mov
        }

        console.log(re);
        document.querySelector(`.num${mov}`).style.backgroundColor=color
        document.querySelector(`.${val}`).style.backgroundColor="white"
        
     
    }else{
        if(color==="red" && redmov!==0){ 
            changemove(color,redmov,num)           
        }else if(color==="yellow" && yellowmov!==0){
            changemove(color,yellowmov,num)
        }
        else if(color==="green" && greenmov!==0){
            changemove(color,greenmov,num)
        }
        else if(color==="blue" && bluemov!==0){
            changemove(color,bluemov,num)
        }
        
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

const changemove=(color,movval,ranndom)=>{
    let fiftcheck=movval+ranndom
    if(fiftcheck>52){
        let ne=fiftcheck-52
        movval=ne
        console.log("morethan 52"+"  "+fiftcheck+"  "+ne);
    }
        document.querySelector(`.num${movval}`).style.backgroundColor="lightcoral"
        console.log("change move called"+color+movval);
        movval=movval+ranndom
        document.querySelector(`.num${movval}`).style.backgroundColor=color
        updatemov(color,movval)
    
}

const updatemov=(color,val)=>{
    if(color==="red"){
        redmov=val
    }else if(color==="green"){
        greenmov=val
    }
    else if(color==="yellow"){
        yellowmov=val
    }
    else if(color==="blue"){
        bluemov=val
    }
}