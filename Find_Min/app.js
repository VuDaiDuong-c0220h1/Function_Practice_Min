//Cách 1:
/*let array = [];
function makearray() {
    let str = document.getElementById("input").value;
    array = str.split(",");
    console.log(array);
}
function findmin() {
    makearray();
    array.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("result").innerHTML = array[0];
}
*/
//Cách 2:
function minArray(arr) {
    let min = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [1, 2, 5, 6, 7];
let min = minArray(arr1);
alert(min);