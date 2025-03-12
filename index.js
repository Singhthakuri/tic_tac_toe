const playerTurn=document.getElementById("choice");
const boxes=document.querySelectorAll("#grid");
const newGame=document.getElementById("newgame");
let currentPlayer;
let grid;
const winningCases=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// lets start the game 
const startGame=()=>{
    // this is the selection of the player and initalization of the 3x3 board 
        currentPlayer="X";
        grid=['','','','','','','','',''];
        playerTurn.innerText=`Player ${currentPlayer} Turn`;

        //lets play with boxes
        boxes.forEach((element,index)=>{
           element.textContent=""
            element.style.pointerEvents="all"
            element.classList.remove("win")
        })
        
    
}
startGame();

const clickHandler=(index)=>{
    if(grid[index]==="")
    {
        boxes[index].textContent=currentPlayer;
        grid[index]=currentPlayer;
        boxes[index].style.pointerEvents='none'
        switchPlayer();
        playerTurn.innerText=`Player ${currentPlayer} Turn`;
       
        checkGameOver();
    }
}
boxes.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        clickHandler(index);
    })
})
const checkGameOver=()=>{
    let winner="";
    winningCases.forEach((position)=>{
        if((grid[position[0]]!=="" || grid[position[1]] !=="" || grid[position[2]]!=="")
             && (grid[position[0]]===grid[position[1]]) &&(grid[position[1]]===grid[position[2]]))
        {
            if(grid[position[0]]==="X")
            {
                winner="X";
            }else
            {
                winner="O";
            }
            boxes.forEach((item)=>{
                item.style.pointerEvents="none"
            })
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }

    })
    if(winner!=="")
    {    playerTurn.textContent=`Congratulation player ${winner} win`
        newGame.classList.add("active")
        return
    }

    let filledBoxcount=0;
    grid.forEach((element)=>{
        if(element!=="")
        {
            filledBoxcount++;
        }
    })
        console.log(filledBoxcount)
    if(filledBoxcount==9)
    {
        playerTurn.textContent="Game is Tie";
        newGame.classList.add("active")
    }
}



const switchPlayer=()=>{
    currentPlayer==="X"?currentPlayer="O":currentPlayer="X";
}

newGame.addEventListener("click",()=>{
    startGame();
    newGame.classList.remove("active")
});




