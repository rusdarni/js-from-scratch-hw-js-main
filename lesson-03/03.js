// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    let largeNum = 0;
    if (num1 > num2 && num1 > num3) {
        largeNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        largeNum = num2
    } else {
        largeNum = num3
    }
    return largeNum;
}
