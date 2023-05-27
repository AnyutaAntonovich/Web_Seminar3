Math.round
let UserInput = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсия: ${UserInput}\nФаренгейт: ${Math.round((9 / 5) * UserInput + 32)}`)