
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.fname.value;
    const email = event.target.femail.value;
    const phone = event.target.fphone.value;

    const obj = {
        name,
        email,
        phone
    }

    axios.post("https://crudcrud.com/api/29e9418555e74b03b878c1c65b3fe343/app",obj)
    .then((response) =>{
        showUser(response.data)
        console.log(response)
    })

    .catch((err) =>{
        document.body.innerHTML = document.body.innerHTML+" <h4>Something wrong</h4>"
        console.log(err)
    })

    // localStorage.setItem(obj.email, JSON.stringify(obj))
    showUser(obj)
}

window.addEventListener("DOMContentLoaded", () =>{
   
    const localStorageObj = localStorage;
    const localStorageKeys = Object.keys(localStorageObj)

    for(var i=0; i<localStorageKeys.length;i++){
        const key = localStorageKeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showUser(userDetailsObj)
    }
})

function showUser(user){
    var email = document.getElementById('femail').value;
    var name = document.getElementById('fname').value;
    var phone = document.getElementById('fphone').value;
    var result = name+"  "+email+"  "+phone
    document.getElementById('list-of-users').textContent = result;

    const editButton = document.createElement('button');
            editButton.innerText= "EDIT";
            newLi.appendChild(editButton);
            editButton.addEventListener('click', editing);
    // console.log(localStorage.getItem(user.email));
}
