function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
}

const arr = [10, 7, 8, 9, 1, 5];

selectionSort(arr);

console.log(arr);
