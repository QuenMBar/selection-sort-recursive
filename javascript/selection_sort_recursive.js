function selectionSortRecursive(arr, sorted = []) {
    if (arr.length === 0) {
        return sorted;
    }
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);

    return selectionSortRecursive(arr, sorted);
}

if (require.main === module) {
    // add your own tests in here
    console.log("Expecting: [-1, 2, 3, 5]");
    console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

    console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
