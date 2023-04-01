// function loadUsers2(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUsers2(data))
// }

// function displayUsers2(data){
//    const ul = document.getElementById('users-list');
//    for(const user of data){
//     console.log(user.name);
//     const li = document.createElement('li')
//     li.innerText = user.name;
//     ul.appendChild(li);
//    }
// }


// function loadUsers2(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => codeUser1(data))
// }

// function codeUser1(data){
//     const ul = document.getElementById('users-list');
//     for(const user of data){
//         console.log(user.name);
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
// }


// function loadUsers3(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => codeUser2(data))
// }

// function codeUser2(data){
//     const ul = document.getElementById('users-list')
//     for(const user of data){
//         console.log(user.email);
//         const li = document.createElement('li');
//         li.innerText = user.email;
//         ul.appendChild(li);
//     }
// }



function usersAddress(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => allUsersAddress(data))
}

function allUsersAddress(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.address);
        const li = document.createElement('li');
        li.innerText = user.address;
        ul.appendChild(li);
    }

}














