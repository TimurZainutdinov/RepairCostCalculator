// Элементы формы
const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')

// Радиокнопки
const radioType = document.querySelectorAll('input[name="type"]')
const radioBuilding = document.querySelectorAll('input[name="building"]')
const radioRooms = document.querySelectorAll('input[name="rooms"]')

// Чекбоксы
const ceiling = document.querySelector('input[name="ceiling"]')
const walls = document.querySelector('input[name="walls"]')
const floor = document.querySelector('input[name="floor"]')

const basePrice = 6000
const totalPriceElem = document.querySelector('#total-price')

// Связка range с текстовым полем
// Прослушка события input + приравние инпута с инпутом диапозона
squareRange.addEventListener('input', function() {
    squareInput.value = squareRange.value
})

// Связка текстового поля с range
squareInput.addEventListener('input', function() {
    squareRange.value = squareInput.value
})

// Функция пересчета
function calculate() {

    let totalPrice = basePrice * parseInt(squareInput.value)

    for (const radio of radioType) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    for (const radio of radioBuilding) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    for (const radio of radioRooms) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    if (ceiling.checked) {
        totalPrice = totalPrice + parseFloat(ceiling.value) * parseInt(squareInput.value)
    }

    if (walls.checked) {
        totalPrice = totalPrice * parseFloat(walls.value)
    }

    if (floor.checked) {
        totalPrice = totalPrice * parseFloat(floor.value)
    }

    // форматирование чисел путем метода new Intl.NumberFormat()
    const formatter = new Intl.NumberFormat('ru')
    totalPriceElem.innerText = formatter.format(totalPrice)
}

calculate()

for (const input of inputs) {
    input.addEventListener('input', function() {
        calculate()
    })
}