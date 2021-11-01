//1
// Create two paramaters for number agruements
function greatestOfTwo(int1, int2) {
    // return greatest number bewteen the two
    return Math.max(int1, int2)
}
// Call
// console.log(greatestOfTwo(-2, 2))

//2
// Create three paramaters for number agruements
function greatestOfThree(int1, int2, int3) {
    // if int1 is larger than both int2 and int3
    // return int1
    if (int1 > int2 && int1 > int3) {
        return int1;
    }
    // if int2 is larger than both int1 and int3
    // return int2
    else if (int2 > int1 && int2 > int3) {
        return int2;
    }
    // if int3 is larger than both int1 and int2
    // return int3
    else if (int3 > int1 && int3 > int2) {
        return int3;
    }
    // Troubleshooting faluty code
    else {
        return "Code not working";
    }
}
// Call
// console.log(greatestOfThree(3, 2, 11));

//3
// Create four paramaters for number agruements
function greatestOfFour(int1, int2, int3, int4) {
    // if int1 is larger than int2 and int3 and int4
    // return int1
    if (int1 > int2 && int1 > int3 && int1 > int4) {
        return int1;
    }
    // if int2 is larger than both int1 and int3 and int4
    // return int2
    else if (int2 > int1 && int2 > int3 && int2 > int4) {
        return int2;
    }
    // if int3 is larger than both int1 and int2 and int4
    // return int3
    else if (int3 > int1 && int3 > int2 && int3 > int4) {
        return int3;
    // else return int4 if other else if are false
    } else {
        return int4;
    }
}

// console.log(greatestOfFour(10, 2, 6, 11));


//4
// Create two paramaters for number agruements
function leastOfFour(int1, int2, int3, int4) {
    // if int1 is less than int2 and int3 and int4
    // return int1
    if (int1 < int2 && int1 < int3 && int1 < int4) {
        return int1;
    }
    // if int2 is less than both int1 and int3 and int4
    // return int2
    else if (int2 < int1 && int2 < int3 && int2 < int4) {
        return int2;
    }
    // if int3 is less than both int1 and int2 and int4
    // return int3
    else if (int3 < int1 && int3 < int2 && int3 < int4) {
        return int3;
    // else return int4 if other else if are false
    } else {
        return int4;
    }
}

// console.log(leastOfFour(1, 2, 6, 0));
