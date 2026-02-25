/*
Store:
Account balance
Withdrawal amount
Use ternary to check:
Sufficient balance or not
Use if–else to:
Deduct balance if valid
Show error if insufficient
Use loop to:
Simulate 3 withdrawal attempts
Print final balance
*/ 

let accountBalance = 1000;
let withdrawalAmount = 300;
for (let i = 1; i <= 3; i++) {
    let sufficientBalance = accountBalance >= withdrawalAmount ? "Sufficient" : "Insufficient";
    console.log(`Attempt ${i}: ${sufficientBalance} balance.`);
    if (sufficientBalance === "Sufficient") {
        accountBalance -= withdrawalAmount;
        console.log(`Withdrawal successful. Remaining balance: ${accountBalance}`);
    } else {
        console.log(`Withdrawal failed. Insufficient balance.`);
    }
}
console.log(`Final balance: ${accountBalance}`);  