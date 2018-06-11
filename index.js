

for(let i = 0; i < 2; i++) {
    const row = document.createElement('div');

    row.className = "Row"
    document.body.appendChild(row)
    for (let j = 0; j < 2; j++) {
        const col = document.createElement('div');
        col.className = "Column"
        col.addEventListener("click", function changeColor() {
            col.style.backgroundColor = "red"
        })
        row.appendChild(col)
    }

}

const color = document.createElement('div');
color.className = "Color"
document.body.appendChild(color)

let colorArray = ["Red","Green","Blue","Orange"]

for(let colors =0 ; colors < colorArray.length ; colors++) {
    const addColor = document.createElement('div')
    addColor.className = "Palette"
    addColor.style.backgroundColor = colorArray[colors]
    color.appendChild(addColor)
}
