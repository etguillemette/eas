const submit = document.querySelector(".submit");


function drawGrid(){
    const drawArea = document.querySelector(".drawarea");
    drawArea.innerHTML = ''; 
    let drawSize = drawArea.offsetWidth;

    let rowsField = document.querySelector("#rows");
    let columnsField = document.querySelector("#columns");
    
    let numRows = rowsField.value;
    let numColumns = columnsField.value;

    let cellWidth = drawSize/numColumns;
    let cellHeight = drawSize/numRows;

    for(let r = 0; r < numRows; r++){
    
        //console.log('derp');
    
        const row = document.createElement('div');
        row.classList.add('row');
        
        for(let c = 0; c < numColumns; c++){
            
            //console.log('dederp');
            
            const cell = document.createElement('div');
            cell.classList.add('cell');
            //cell.classList.add('activated');

            

            row.appendChild(cell);
        }
    
        drawArea.appendChild(row);
    }

}


submit.addEventListener('click',function(){

   drawGrid();
    

});

drawGrid();

cells = document.querySelectorAll('cell');
cells.forEach(c =>{
    c.addEventListener('mouseover', function(){
        console.log('blah');
        c.classList.add('activated');
    });
});