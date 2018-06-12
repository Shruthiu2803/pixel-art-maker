let brush = "white"

for(let i = 0; i < 20; i++) {
    const row = document.createElement('div');

    row.className = "Row"
    document.body.appendChild(row)
    for (let j = 0; j < 20; j++) {
        const col = document.createElement('div');
        col.className = "Column"
        col.addEventListener("click", function changeColor() {
            col.style.backgroundColor = brush

        })
        row.appendChild(col)
    }

}

const color = document.createElement('div');
color.className = "Color"
color.innerHTML = " Pallete: &nbsp &nbsp "
document.body.appendChild(color)

let colorArray = ["red","orange", "yellow", "green", "blue", "purple", "brown", "gray", "black", "white"]

for(let colors =0 ; colors < colorArray.length ; colors++) {
    const addColor = document.createElement('div')
    addColor.className = "Palette"
    addColor.style.backgroundColor = colorArray[colors]
    addColor.addEventListener('click',function(){
        brush = colorArray[colors]
        currentColor.style.backgroundColor = brush

    })
    color.appendChild(addColor)
}


const currentColorFlex = document.createElement('div');
currentColorFlex.className = "Color"
currentColorFlex.innerHTML = "Current Color: &nbsp &nbsp "
document.body.appendChild(currentColorFlex)

const currentColor = document.createElement('div');
currentColor.className="Palette";
currentColor.style.backgroundColor = brush;
currentColorFlex.appendChild(currentColor)