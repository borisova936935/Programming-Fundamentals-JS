function distinctArray(array) {
    for (let index = 0; index < array.length; index++) {
        let currentEl = array[index];
        for (let j = index + 1; j < array.length; j++) {
            let nextEl = array[j];
            if (currentEl === nextEl) {
                array.splice(j, 1);
                j = j - 1;
            }
        }
    }
    console.log(array.join(" "));
}
distinctArray([1, 2, 3, 4])

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

distinctArray([20, 8, 12, 13, 4, 4, 8, 5])