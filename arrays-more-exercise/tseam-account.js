function tseamAccount(arr) {
    let account = arr.shift().split(" ");

    for (let i = 0; i < arr.length - 1; i++) {
        let [command, game] = arr[i].split(" ");
        if (command === "Install") {
            if (!account.includes(game)) {
                account.push(game);
            }
        }
        if (command === "Uninstall") {
            if (account.includes(game)) {
                let index = account.indexOf(game);
                account.splice(index, 1)
            }
        }
        if (command === "Update") {
            if (account.includes(game)) {
                let index = account.indexOf(game);
                let updated = account.splice(index, 1);
                updated = updated.toString();
                account.push(updated)
            }
        }
        if (command === "Expansion") {
            game = game.split('-');
            if (account.includes(game[0])) {
                let index = account.indexOf(game[0]);
                account.splice(index + 1, 0, `${game[0]}:${game[1]}`);

            }
        }

    }
    console.log(account.join(" "));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])
