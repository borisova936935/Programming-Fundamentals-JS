function oddOccurrences(data){
    let arr = data.split(' ').map(x => x.toLowerCase());
    let map = arr.reduce((a, b) => {
        if (!a.has(b)) {
            a.set(b, 0);
        }
        a.set(b, a.get(b) + 1)
        return a;
    }, new Map());
 
    let r = '';
    for (const kvp of map) {
        if (kvp[1] % 2 != 0) {
            r += `${kvp[0]} `;
        }
    }
    return r
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')