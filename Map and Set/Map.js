function getAdmins(map){
    let admins = [];
    
    for([key, value] of map){
        
        if(value === 'Admin'){
            admins.push(key)
        }
    }

    return admins;
}


function getUsers(map){
    let users = [];

    for([key, value] of map){
        if(value === 'User'){
            users.push(key)
        }
    }

    return users;
}


function getGuests(map){
    let guests = [];

    for([key, value] of map){
        if(value === 'Guest'){
            guests.push(key)
        }
    }

    return guests;
}


const usuarios = new Map();


usuarios.set('Luiz', 'Admin');
usuarios.set('Gabriel', 'Admin');
usuarios.set('Matheus', 'Admin');
usuarios.set('Bruna', 'User');
usuarios.set('Carla', 'User');
usuarios.set('Dante', 'Guest');
usuarios.set('Douglas', 'Guest');

console.log(getAdmins(usuarios));
console.log(getUsers(usuarios));
console.log(getGuests(usuarios));