let container = document.getElementsByClassName('grid-container')[0];

creatingGrid()
styleRows()

function creatingGrid(){
    for (i = 1; i <= 16; i++){

        createRow()
        

            for(j = 1; j <= 16; j++){
                
                createColumn()

            }
    }
}

function createRow(){

    let row = document.createElement('div');

    container.appendChild(row)
    row.classList.add('row' + i);

    return document.querySelector('row' + i)
}

function createColumn(){

    let columnContainer = document.getElementsByClassName('row' + i)[0];
    let column = document.createElement('div')

    columnContainer.appendChild(column);
    column.classList.add('column' + j);

    return document.querySelector('column' + j)
}

function styleRows(){

    let allRows = document.getElementsByClassName('grid-container')[0].children;


    const rowStyles = {
        display: 'flex',
        width: '100%',
        height: '6.25%',
        padding: '0',
        margin: '0',
        border: 'solid black 1px',
    }
    const colStyles = {
        width: '6.25%',
        height: '100%',
        padding: '0',
        margin: '0',
        border: 'solid black 1px',
    }

    for (i = 0; i < allRows.length; i++){

        Object.assign(allRows[i].style, rowStyles)
        let allCols = document.getElementsByClassName('row' +(i+1))[0].children;

            for (j = 0; j < allCols.length; j++){

                Object.assign(allCols[j].style, colStyles)

                allCols[j].addEventListener('mouseover', (e) =>{

                    e.target.style.backgroundColor = 'black';
                    
                })
            }
    }
         
}

