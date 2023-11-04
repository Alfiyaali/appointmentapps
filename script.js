
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phonenumber',phonenumber);

    const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () =>{
    const localStorageObj = localStorage;
    const localStoragekeys = Object.keys(localStorageObj)

    for(var i=0; i<localStoragekeys.length; i++){
        const key = localStoragekeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);

        showNewUserOnScreen(userDetailsObj);
    }
})

function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value = '';

    // console.log(localStorage.getItem(user.emailId));

    if(localStorage.getItem(user.email)!==null){
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick = deleteUser('${user.email}')>DELETE</button>
    <button onclick = editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>EDIT</button>
    </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function editUserDetails(emailId, name, phonenumber){
    document.getElementById('email').value = emailId;
    document.getElementById('username').value = name;
    document.getElementById('phonenumber').value = phonenumber;

    deleteUser(emailId);
}

function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}