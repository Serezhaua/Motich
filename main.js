const roomlength = 5 //Ширина комнаты
const roonWidth = 30 //Длина комнаты

//Получаем площадь комнаты (первая комната)
const squareBtn = document.querySelector('.one')
squareBtn.addEventListener('click', (e) => {
    e.preventDefault()
    alert(`${roomlength * roonWidth} метров квадратных`)
})

const roomlengthTwo = 15 //Ширина комнаты
const roonWidthTwo = 40 //Длина комнаты

//Получаем площадь комнаты (вторая комната)
const squareBtnTwo = document.querySelector('.two')
squareBtnTwo.addEventListener('click', (e) => {
    e.preventDefault()
    alert(`${roomlengthTwo * roonWidthTwo} метров квадратных`)
})

//Общая площадь
const allSquare = document.querySelector('.all')
const allRoom = roomlength * roonWidth + roomlengthTwo * roonWidthTwo
allSquare.addEventListener('click', (e) => {
    e.preventDefault()
    alert(`${allRoom} метров квадратных`)
})
