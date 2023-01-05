const form = document.getElementById('contact-form')
const name = document.getElementById('contact-name')
const phone = document.getElementById('contact-phone')
listPhones = [];
let contacts = '';


form.addEventListener('submit', (event) => {
  event.preventDefault();
  addContact();
})

function addContact(){
    if (listPhones.includes(phone.value)){
        alert('Este número de telefone já está cadastrado na agenda!');
    } else {
        contacts += `<tr><td>${name.value.toUpperCase()}</td><td>${phone.value}</td></tr>`;
        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = contacts;
        listPhones.push(phone.value);
    }
    name.value = '';
    phone.value = '';
}
