let allStudents = []

function student(first_name, last_name, birthdate){
  this.first_name = first_name
  this.last_name = last_name
  this.birthdate = new Date(birthdate)
  this.greet = () => console.log(`Hola, soy ${this.first_name}`)
  this.timeToParty = () => {
    let currentMonth = new Date().getMonth()

    return currentMonth < this.birthdate.getMonth() 
    ? `faltan ${this.birthdate.getMonth() - currentMonth} meses para el cumple` 
    : 'ya cumplió'

    /*
    if( currentMonth < this.birthdate.getMonth()){
      return `faltan ${this.birthdate.getMonth() - currentMonth} meses para el cumple`
    } else {
      return 'ya cumplió'
    }
    */
  }
}

const printStudents = () => {
  let container = document.getElementById('studentsList')
  container.innerHTML = ''
  allStudents.forEach( (student, index) => {
    let li = document.createElement('li')

    let name = document.createElement('p')
    name.innerText = `Nombre: ${student.first_name}`

    let birthdate =document.createElement('p')
    birthdate.innerText = student.timeToParty()

    li.appendChild(name)
    li.appendChild(birthdate)
    container.appendChild(li)
  })
}

const createStudent = () => {
  let firstnameField = document.getElementById('first_name')
  let lastnameField = document.getElementById('last_name')
  let birthdateField = document.getElementById('birthdate')
  let newStudent = new student(firstnameField.value, lastnameField.value, birthdate.value)
  allStudents.push(newStudent)
  printStudents()
}