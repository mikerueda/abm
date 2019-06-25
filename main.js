let allStudents = []

function student(first_name, last_name, birthdate){
  this.first_name = first_name
  this.last_name = last_name
  this.birthdate = birthdate
  this.greet = () => console.log(`Hola, soy ${this.first_name}`)
}

const createStudent = () => {
  let firstnameField = document.getElementById('first_name')
  let lastnameField = document.getElementById('last_name')
  let birthdateField = document.getElementById('birthdate')
  let newStudent = new student(firstnameField.value, lastnameField.value, birthdate.value)
  allStudents.push(newStudent)
}