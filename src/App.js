import { useState } from 'react'
import Icon from './Components/Icon'

import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



let tikArray=new Array(9).fill("")
const App=()=>{
  let[isCross, setIsCross]=useState(true)
  let[winMessage,setWinMessage]=useState("")

// play again

  const playAgain=()=>{
    tikArray.fill("")
    setIsCross(true)
    setWinMessage("")

  }

  // FindWinner

  const findWinner=()=>{
  // row1 
  if(tikArray[0]==tikArray[1] && tikArray[0]==tikArray[2] && tikArray[0]!=""){
    setWinMessage(tikArray[0] +" "+ "has Won")
  }

   // row2 
   else if(tikArray[3]==tikArray[4] && tikArray[3]==tikArray[5] && tikArray[3]!=""){
    setWinMessage(tikArray[3]+ " "+ "has Won")
  }

   // row3 
   else if(tikArray[6]==tikArray[7] && tikArray[6]==tikArray[8] && tikArray[6]!=""){
    setWinMessage(tikArray[6]+ " "+ "has Won")
  }


   // column1
   else if(tikArray[0]==tikArray[3] && tikArray[0]==tikArray[6] && tikArray[0]!=""){
    setWinMessage(tikArray[0]+ " "+ "has Won")
  }

   // column2
   else if(tikArray[1]==tikArray[4] && tikArray[1]==tikArray[7] && tikArray[1]!=""){
    setWinMessage(tikArray[1]+ " "+ "has Won")
  }

   // column3
   else if(tikArray[2]==tikArray[5] && tikArray[2]==tikArray[8] && tikArray[2]!=""){
    setWinMessage(tikArray[2]+ " "+ "has Won")
  }

   // diagonal 1
   else if(tikArray[0]==tikArray[4] && tikArray[0]==tikArray[8] && tikArray[0]!=""){
    setWinMessage(tikArray[0]+ " "+ "has Won")
  }
   // diagonal 2
   else if(tikArray[2]==tikArray[4] && tikArray[2]==tikArray[6] && tikArray[0]!=""){
    setWinMessage(tikArray[2]+ " "+ "has Won")
  }

  else if(tikArray.indexOf("") == -1) {
    setWinMessage("Draw")
 }
  }

  
   // changeItem

   const changeItem = (index) => {
    // make some changes later

    if(winMessage){
       return  toast("Game has already been over")
    }
    
    if(tikArray[index] !=""){
           return toast("Open your eyes dude where are you tapping")
    }
    else if(tikArray[index] == ""){
        tikArray[index] =  isCross== true ? "cross" : "circle"
     
        setIsCross(!isCross)
        findWinner()
    }
       
}

//    const getKey=()=>{
//       return Date.now().toString()
//    }


 return(
     <div>
             <ToastContainer  position="bottom-center"/>
           {  
             winMessage?(
               <div>
                      <h1>{winMessage.toUpperCase()}</h1>
                      <button onClick={playAgain}>Play Again</button>
               </div>
             )
             : 
             (<h1> Chance is of {isCross?"Cross": "Circle"}</h1>)
           }
           

             <div className="grid">
                         {
                             tikArray.map((value, index)=>(
                                 <div key={index} className="box" onClick={()=>changeItem(index)}> 
                                     <Icon ic={value}/>
                                 </div>
                             ))
                         }
             </div>


     </div>
 )

}

export default App
