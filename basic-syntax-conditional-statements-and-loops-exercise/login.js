function login(input) {
    let username = input.shift();
    let passwords = input;

    for (let i = 0; i < passwords.length; i++) {
        let currentPassword = new Array(passwords[i])
        
        console.log(currentPassword);
    }
    console.log(passwords);
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
// login(['momo','omom'])
// login(['sunny','rainy','cloudy','sunny','not sunny'])