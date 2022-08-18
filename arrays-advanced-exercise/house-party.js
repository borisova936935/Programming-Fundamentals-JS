function houseParty(input) {
    let list = [];
    for (let element of input) {
      let token = element.split(" ");
      let currName = token[0];
      if (token.length < 4) {
        list.push(token[0]);
      }
      if (list.includes(currName)) {
        for (let i = 0; i < list.length; i++) {
          if (list[i - 1] == currName) {
            console.log(`${currName} is already in the list!`);
            list.pop();
            break;
          }
        }
      }
      if (token.length > 3) {
        if (list.includes(currName)) {
          list.pop();
          continue;
        }
        console.log(`${currName} is not in the list!`);
      }
    }
    console.log(list.join("\n"));
}
houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])

houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])