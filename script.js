// 🧩 [TASK: 1 START] --its Mini Calculator.

// Collecting 3 Input from User
const num1 = Number(prompt("Enter First Number for Calculate."));
const num2 = Number(prompt("Enter Second Number for Calculate."));
const Operation = prompt("Choose Arithmetic Operator to use on your numbers (+  -  *  /  %  **)");

// Ternary Operator 
const check_operator = 
    (Operation === "+") ? num1 + num2 : 
    (Operation === "-") ? num1 - num2 : 
    (Operation === "*") ? num1 * num2 :
    (Operation === "/") ? num1 / num2 : 
    (Operation === "**") ? num1 ** num2 : 
    (Operation === "%") ? num1 % num2 :
    (Operation === null || Operation === "") ? "EMPTY Input!": 
    "You Enter Wong Operator!";

// Stored Value
const All_Arithmetic_Summary = `
👇All Arithmetic Calculation:
Addition: ${num1 + num2}
Subtraction: ${num1 - num2} 
Multiplicaion: ${num1 * num2}
Division: ${num1 / num2}
Remainder: ${num1 % num2}
Exponent Power: ${num1 ** num2}
`;

// Print on Console Window
console.log(`
Your first number: ${num1}
Your second number: ${num2}
Your Selected Operator: ${Operation}
Your ${check_operator}
${All_Arithmetic_Summary}
`);

// Print on Browser screen
document.write(`<h1>
Your first number: <i> ${num1} </i> <br>
Your second number: <i> ${num2} </i> <br>
Your Selected Operator: <i> ${Operation} </i> <br>
Your Answer is: <i> ${num1} ${Operation} ${num2} = ${check_operator} </i> <br><br>
 👇 All Arithmetic Calculation: <br>
Addition <i> ${num1 + num2} </i> <br>
Subtraction <i> ${num1 - num2} </i> <br>
Multiplicaion: <i> ${num1 * num2} </i> <br>
Division: <i> ${num1 / num2} </i> <br>
Remainder: <i> ${num1 % num2} </i> <br>
Exponent Power: <i> ${num1 ** num2} </i>
</h1>`);
// [ TASK: 1 END! ✅]

//🧩 Task 2 [START]:- Smart Login Simulator.

//   👇THIS PROGRAM WORKING LIKE BEGINNER.
// let savedEmail = "student@gmail.com";
// let savedPassword = "12345";
// const userEmail = prompt("Please enter your Email:");
// const userPassword = prompt("Please enter your Password:");

// console.log("--- Individual Checks ---");
// console.log(`Email Match Check: ${userEmail === savedEmail}`); 
// console.log(`Password Match Check: ${userPassword === savedPassword}`); 

// const isLoginSuccessful = (userEmail === savedEmail) && (userPassword === savedPassword);
// console.log("--- Combined Result ---");
// console.log(`Login Successful: ${isLoginSuccessful}`);

// const loginMessage = isLoginSuccessful 
//     ? "Welcome! Login successful." 
//     : "Error: Invalid Email or Password.";
// console.log(`Status Message: ${loginMessage}`);

// 👇I developed this program MySelf.
let new_email = prompt("Create Your Email");
let new_password = prompt("Create Your Password");

alert(`Now You Have New Email: ${new_email} & Password: ${new_password}`);

let login_email = prompt("Enter Your Email to Login:");
let login_password = prompt("Enter Your Password to Login:");

let Checking =
      (!new_email|| !new_password ||!login_email || !login_password) 
      ? "❌ EMPTY Your Email or Password":

      (new_email === login_email && new_password === login_password)
      ? "Login Successfully ✅":

      (new_email !== login_email && new_password !== login_password)
      ? "❌ Both Email & Password are Incorrect!" :

      (new_email !== login_email)
      ? "❌ Incorrect Email!" :

       (new_password !== login_password)
      ? "❌ Incorrect Password!"
        :"❌ Unknown Error!";

alert(Checking);
document.write(`<h1> ${Checking} <br> Your Email:- ${new_email} <br> Your Password:- ${new_password}</h1>`);
// --[Task 2 END!]--


// 🧩 Task 3: Counter Program
let count = 0;
console.log(++count); // 1
console.log(++count); // 2
console.log(--count); // 1
// [Task 3 END!]

// 🧮 “Result Checker”
let Student_marks = 1;
const check_marks =
      (Student_marks >= 100) ? "Grade A+ · Perfect Score"
    : (Student_marks >= 80)  ? "Grade A1 · Excellent"
    : (Student_marks >= 70)  ? "Grade A · Very Good"
    : (Student_marks >= 60)  ? "Grade B · Good"
    : (Student_marks >= 50)  ? "Grade C · Average"
    : (Student_marks >= 0)   ? "Fail · Try Again"
    : "Invalid Input";
console.log(check_marks);


