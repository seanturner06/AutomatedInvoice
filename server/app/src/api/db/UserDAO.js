const db = require('./dbConnection');
const User = require('./models/User');

function getUserByCredentials(username, password) {
    return db.query('SELECT * FROM user WHERE usr_username=?', [username]).then(({ results }) => {
        const user = new User(results[0]);
        if (user) { // we found our user
            return user.validatePassword(password);
        }
        else { // if no user with provided username
            throw new Error("No such user");
        }
    });
}


module.exports = {
    getUserByCredentials: getUserByCredentials,
};
