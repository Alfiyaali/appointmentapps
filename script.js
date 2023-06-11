const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const playload = new FormData(form);
    console.log([...playload]);

    axios.get('https://crudcrud.com/api/fce2c1d7821b480c8bb319ed6c087a37/users')
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))

    const user ={
        name: document.getElementById('fname').value,
        price: document.getElementById('fprice').value,
        table: document.getElementById('ftable')
    };
    axios.post('https://crudcrud.com/api/fce2c1d7821b480c8bb319ed6c087a37/users', user)
.then((res)=>console.log(res))
.catch((err) => console.log(err))
})



function showDataOnScreen(){
    var name = document.getElementById('fname').value;
    var price =  document.getElementById('fprice').value;
    var table = document.getElementById('ftable').value;

    document.getElementById('user').innerHTML = "Choclate name- "+name+" Price- "+price+" Table- "+form.ftable[form.ftable.selectedIndex].text;
}