function secondLargest(arr) {
    let largest = 0;
    let secondLargest = 0;
    let[] arr = (7, 2, 5, 54, 17);

    for (let i =0; i < arr.length, i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest= arr[1];
        }else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest(arr);
  
}

module.exports = secondLargest