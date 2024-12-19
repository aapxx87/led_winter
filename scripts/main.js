const matrix_grid = document.querySelector('.grid_matrix')

const rows = 16
const cols = 16


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
    '15-1', '15-2', '15-3', '15-4', '15-5', '15-6', '15-7', '15-8', '15-9', '15-10', '15-11', '15-12', '15-13', '15-14', '15-15', '15-16',
    '16-1', '16-2', '16-3', '16-4', '16-5', '16-6', '16-7', '16-8', '16-9', '16-10', '16-11', '16-12', '16-13', '16-14', '16-15', '16-16',
    '14-1', '14-11',
    '11-2', '11-10',
    '10-3', '10-12', '10-16',
    '9-4', '9-8', '9-13', '9-15',
    '8-5', '8-7', '8-9', '8-14',
    '7-6',
  ], 'color_white')



fill_cells_color(
  [
    '13-13', '13-15',
    '12-12', '12-13', '12-15', '12-16',
    '11-12', '11-13', '11-14', '11-15', '11-16',
    '10-13', '10-14', '10-15',
    '9-14',
  ], 'color_green')


fill_cells_color(
  [
    '14-3', '14-4', '14-5', '14-7', '14-8', '14-9', '14-14',
    '13-3', '13-5', '13-7', '13-9', '13-14',
    '12-3', '12-5', '12-6', '12-7', '12-9', '12-14',
    '11-4', '11-5', '11-6', '11-7', '11-8',
    '10-9',
    '9-9',
  ], 'color_brown')


fill_cells_color(
  [
    '12-2', '12-10',
    '11-3', '11-9',
    '10-4', '10-5', '10-6', '10-7', '10-8',
    '9-5', '9-6', '9-7',
    '8-6'
  ], 'color_silver')


fill_cells_color(
  [
    '14-6',
    '13-6'
  ], 'color_orange')


fill_cells_color(
  [
    '13-4', '13-8',
    '12-4', '12-8',
  ], 'color_blue')



const drop_snow = function (cell_id, stop_row) {

  console.log(cell_id.split('-')[0]);


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


drop_snow('1-1', 15)
drop_snow('1-3', 11)
drop_snow('1-4', 10)
drop_snow('1-6', 8)
drop_snow('1-9', 9)
drop_snow('1-11', 15)
drop_snow('1-13', 10)
drop_snow('1-14', 9)
drop_snow('1-16', 11)

// drop_snow('1-1', 14)
