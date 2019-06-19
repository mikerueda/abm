let allStudents = []

const createStudent = () => {
  let firstnameField = document.getElementById('first_name')
  let lastnameField = document.getElementById('last_name')
  let birthdateField = document.getElementById('birthdate')
  let student = {
    first_name: firstnameField.value,
    last_name: lastnameField.value,
    birthdate: birthdateField.value
  }
  allStudents.push(student)
}