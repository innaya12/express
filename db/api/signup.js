const connection = require('../config');
const query = 'insert into users (role_id, first_name, last_name, email, password, phone, status) values (2, ?, ?, ?, ?, ?,1)'

function addUser(firstName, lastName,email, passwordHashed, phone){
    return new Promise((resolve, reject) => {
        connection.query(query, [firstName, lastName,email, passwordHashed, phone], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {addUser}