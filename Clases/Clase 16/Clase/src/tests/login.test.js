import {login} from "./login.js"

const totalTests = 5
let passedTests = 0

// Test 1 - Password is empty
console.log("Test 1 - Password is empty");
const response1 = login("coderUser")
if (response1 === "Password is empty") {
    passedTests++
    console.log("Test 1 passed");
} else {
    console.log("Test 1 failed");
}

// Test 2 - Username is empty
console.log("Test 2 - Username is empty");
const response2 = login(null,"123")
if (response2 === "Username is empty") {
    passedTests++
    console.log("Test 2 passed");
} else {
    console.log("Test 2 failed");
}

// Test 3 - Incorrect password
console.log("Test 3 - Incorrect password");
const response3 = login("coderUser","4444")
if (response3 === "Incorrect password") {
    passedTests++
    console.log("Test 3 passed");
} else {
    console.log("Test 3 failed");
}

// Test 4 - Incorrect username
console.log("Test 4 - Incorrect username");
const response4 = login("coderUser2","123")
if (response4 === "Incorrect username") {
    passedTests++
    console.log("Test 4 passed");
} else {
    console.log("Test 4 failed");
}

// Test 5 - Correct username and password
console.log("Test 5 - Correct username and password");
const response5 = login("coderUser","123")
if (response5 === "Logged in") {
    passedTests++
    console.log("Test 5 passed");
} else {
    console.log("Test 5 failed");
}

console.log(`Passed tests: ${passedTests}/${totalTests}`);