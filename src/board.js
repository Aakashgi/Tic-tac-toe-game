import {useState} from "react"

import "./board.css"

const initialValue=[
  ['','',''],
  ['','',''],
  ['','','']

]
const Board=()=>{
  const[count,setCount]=useState(1)
  const[matrix,setMatrix]=useState(initialValue)
  const[char,setChar]=useState("X")
  const[winner,setWinner]=useState(null)

  function checkWinner(){
    // row
      if(matrix[0][0]&&matrix[0][0]===matrix[0][1]&&matrix[0][1]===matrix[0][2]) setWinner(matrix[0][2] + "  is the winner 🎉🏆");
      if (
        matrix[1][0] &&
        matrix[1][0] === matrix[1][1] &&
        matrix[1][1] === matrix[1][2]
      )
        setWinner(matrix[1][2] + " is the winner 🎉🏆 ");
      if (
        matrix[2][0] &&
        matrix[2][0] === matrix[2][1] &&
        matrix[2][1] === matrix[2][2]
      )
        setWinner(matrix[2][2] + "  is the winner 🎉🏆");

      // column
      if (
        matrix[0][0] &&
        matrix[0][0] === matrix[1][0] &&
        matrix[1][0] === matrix[2][0]
      )
        setWinner(matrix[2][0] + " is the winner 🎉🏆");

  if (
    matrix[0][1] &&
    matrix[0][1] === matrix[1][1] &&
    matrix[1][1] === matrix[2][1]
  )
   setWinner(matrix[2][1] + "  is the winner 🎉🏆");

      if (
        matrix[0][2] &&
        matrix[0][2] === matrix[1][2] &&
        matrix[1][2] === matrix[2][2]
      )
        setWinner(matrix[2][2] + "   is the winner 🎉🏆");

      //  diagonal
      if (
        matrix[0][0] &&
        matrix[0][0] === matrix[1][1] &&
        matrix[1][1] === matrix[2][2]
      ) 
        setWinner(matrix[2][2] + "   is the winner 🎉🏆");
      
      if (
        matrix[0][2] &&
        matrix[0][2] === matrix[1][1] &&
        matrix[1][1] === matrix[2][0]
      )
        setWinner(matrix[2][0] + "   is the winner 🎉🏆");

        if(count===9)setWinner("The  Match Has Been  Drawn 👍")

  }

  function handleClick(r,c){
    if(matrix[r][c]) return;
     const tempMatrix=[...matrix]
     tempMatrix[r][c]=char
     setMatrix(tempMatrix)
     setChar(char==="X"?"O":"X")
      setCount(count + 1);
     checkWinner()
    
  }
 function  handleReset(){
     setWinner("")
      setMatrix([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
      setCount(1)
 }

 function backgroundcolor(value){
    if(value==="X") return "yellow";
    if(value==="O") return "orange";
 }
   return (
     <main className="wholescreen">
       <header className="header aligncenter">
         <h1>Tic Tac Toe </h1>
       </header>
       {/* board */}

       <sectiion className="box aligncenter">
         {!winner && (
           <div>
             <span className="characterturn">{char} </span>turn now
           </div>
         )}
         <div className="board">
           {winner ||
             matrix.map((row, rindex) => (
               <div className="row">
                 {row.map((cell, cindex) => (
                   <div
                     onClick={() => handleClick(rindex, cindex)}
                     className={`cell aligncenter ${backgroundcolor(
                       matrix[rindex][cindex]
                     )}`}
                   >
                     {matrix[rindex][cindex]}
                   </div>
                 ))}
               </div>
             ))}
         </div>

         <button onClick={() => handleReset()} className="restartbtn">
           Restart Game
         </button>
       </sectiion>
     </main>
   );


}

export default Board