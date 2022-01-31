let Name = document.getElementById('name');
let Email = document.getElementById('email');
let input = document.getElementById('message');
let submit = document.getElementById('submit');

function Message() {
    console.log("Name: " + Name.value);
    console.log("EMail: " + Email.value);
    console.log("My message to you: " + input.value);
}