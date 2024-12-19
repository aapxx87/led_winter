const matrix_grid = document.querySelector('.grid_matrix')

const rows = 42
const cols = 20


const create_cell = function (row, col) {

  const cell = document.createElement('div')
  cell.classList.add('cell')
  cell.id = `${row}-${col}`
  matrix_grid.appendChild(cell)

}


const fill_grid = function () {

  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {

      create_cell(row, col)

    }

  }

}

fill_grid()

const fill_cells_color = function (arr__cells, color_class) {

  arr__cells.forEach(function (cell_id) {
    document.getElementById(cell_id).classList.add(color_class)
  })

}


fill_cells_color(
  [
    '42-1', '42-2', '42-3', '42-4', '42-5', '42-6', '42-7', '42-8', '42-9', '42-10', '42-11', '42-12', '42-13', '42-14', '42-15', '42-16', '42-17', '42-18', '42-19', '42-20',
    '41-1', '41-2', '41-3', '41-4', '41-5', '41-6', '41-7', '41-8', '41-9', '41-10', '41-11', '41-12', '41-13', '41-14', '41-15', '41-16', '41-17', '41-18', '41-19', '41-20',
    '40-2', '40-3', '40-13', '40-20',
    '37-4', '37-12',
    '36-5', '36-14', '36-18',
    '35-6', '35-10', '35-15', '35-17',
    '34-7', '34-9', '34-11', '34-16',
    '33-8',
  ], 'color_white')



fill_cells_color(
  [
    '39-15', '39-17',
    '38-14', '38-15', '38-17', '38-18',
    '37-14', '37-15', '37-16', '37-17', '37-18',
    '36-15', '36-16', '36-17',
    '35-16',
  ], 'color_green')


fill_cells_color(
  [
    '40-5', '40-6', '40-7', '40-9', '40-10', '40-11', '40-16',
    '39-5', '39-7', '39-9', '39-11', '39-16',
    '38-5', '38-7', '38-8', '38-9', '38-11', '38-16',
    '37-6', '37-7', '37-8', '37-9', '37-10',
    '36-11',
    '35-11',
  ], 'color_brown')


fill_cells_color(
  [
    '38-4', '38-12',
    '37-5', '37-11',
    '36-6', '36-7', '36-8', '36-9', '36-10',
    '35-7', '35-8', '35-9',
    '34-8'
  ], 'color_silver')


fill_cells_color(
  [
    '40-8',
    '39-8'
  ], 'color_orange')


fill_cells_color(
  [
    '39-6', '39-10',
    '38-6', '38-10',
  ], 'color_blue')



const drop_snow = function (cell_id, stop_row) {


  let row = Number(cell_id.split('-')[0])
  let col = Number(cell_id.split('-')[1])

  const interval = 300

  const timer = setInterval(function () {


    let prevRow;

    if (row - 1 === 0) {
      prevRow = 1; // Если col-1 равно 0, переключаемся на последний столбец
    } else {
      prevRow = row - 1; // В остальных случаях уменьшаем col на 1
    }

    document.getElementById(`${prevRow}-${col}`).classList.remove('color_white')

    document.getElementById(`${row}-${col}`).classList.add('color_white')

    row = row + 1

    if (row === stop_row) {
      row = 1
    }

  }, interval)

}


// drop_snow('1-1', 41)
// drop_snow('1-3', 37)
// drop_snow('1-4', 36)
// drop_snow('1-6', 34)
// drop_snow('1-9', 35)
// drop_snow('1-11', 41)
// drop_snow('1-13', 36)
// drop_snow('1-14', 35)
// drop_snow('1-16', 37)


let count = 1

const timer = setInterval(function () {

  count = count + 1

  drop_snow('1-3', 41)
  drop_snow('1-5', 37)
  drop_snow('1-6', 36)
  drop_snow('1-8', 34)
  drop_snow('1-11', 35)
  drop_snow('1-13', 41)
  drop_snow('1-15', 36)
  drop_snow('1-16', 35)
  drop_snow('1-18', 37)

  if (count === 5) {
    clearInterval(timer); // Останавливаем таймер
  }

}, 4000)

// drop_snow('1-1', 14)
