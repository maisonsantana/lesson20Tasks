"use strict";

// 1) Написати рекурсивну функцію, яка обчислює факторіал числа.
// Функція повина приймати тип данних: number або bigint, і кидатися помилками.
// Викликати функцію, використовуючи конструкцію try...catch

function factorial(n) {
  if (typeof n !== "number" && typeof n !== "bigint") {
    throw new TypeError();
  } else if (n < 0) {
    throw new RangeError();
  } else if (n === 0) {
    return typeof n === "bigint" ? 1n : 1;
  }
  return n * factorial(n - 1);
}

try {
  console.log(factorial(5));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Type is not correct try again");
  }
  if (error instanceof RangeError) {
    console.log("Wrong range");
  }
  console.log(error);
}
