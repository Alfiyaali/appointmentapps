
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
    axios.get("https://crudcrud.com/api/29e9418555e74b03b878c1c65b3fe343/app")
    .then((response) =>{
        console.log(response)
        for(var i=0;i< response.data.length;i++){
            showUser(response.data[i])
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    // const localStorageObj = localStorage;
    // const localStorageKeys = Object.keys(localStorageObj)

    // for(var i=0; i<localStorageKeys.length;i++){
    //     const key = localStorageKeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showUser(userDetailsObj)
    // }
})

function showUser(user){
   
    document.getElementById('fname').value = '';
    document.getElementById('femail').value = '';
    document.getElementById('fphone').value = '';

    if(localStorage.getItem(user.email)!==null){
        removeUsersFromScreen(user.email);
    }
    const parentNode = document.getElementById("list-of-users");
    
    
    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user._id}')>Delete User</button>
    <button onclick=editUserDetails('${user.email}','${user.name}','${user.phone}','${user._id}')>Edit</button> </li>`
    parentNode.innerHTML += childHTML;
}

function editUserDetails(email, name, phone){
    document.getElementById('femail').value = email;
    document.getElementById('fname').value=name;
    document.getElementById('fphone').value = phone;

    deleteUser(email);
}

function deleteUser(userId){

    axios.delete(`https://crudcrud.com/api/29e9418555e74b03b878c1c65b3fe343/app/${userId}`)
    .then((response) =>{
        removeUsersFromScreen(userId);
        // console.log(response)
    })
    .catch((err)=>{
        console.log(err);
    })
    // console.log(email);
    // localStorage.removeItem(email);
    // removeUsersFromScreen(email);
}

function removeUsersFromScreen(userId){
    const parentNode = document.getElementById('list-of-users');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}
