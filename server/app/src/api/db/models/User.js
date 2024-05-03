const crypto = require('crypto');

module.exports = class User {
    id = null;
    username = null;
    #passwordHash = null;;
    #salt = null;

    constructor(data) {
        this.id = data.usr_id;
        this.username = data.usr_username;
        this.#salt = data.usr_salt;
        this.#passwordHash = data.usr_password;
    }

    validatePassword(password) {
        return new Promise((resolve, reject) => {
            crypto.pbkdf2(password, this.#salt, 100000, 64, 'sha512', (err, derivedKey) => {
                if (err) { //problem computing digest, like hash function not available
                    reject("Error: " + err);
                }

                const digest = derivedKey.toString('hex');
                if (this.#passwordHash == digest) {
                    resolve(this);
                }
                else {
                    reject("Invalid username or password");
                }
            });
        });
    }

    toJSON() {
        return {
            id: this.id,
            username: this.username
        }
    }
};