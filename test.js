const { power, factorial } = require('./math');

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ ${message} | Ожидалось: ${expected}, Получено: ${actual}`);
    process.exit(1);
  } else {
    console.log(`✅ ${message}`);
  }
}

assertEqual(power(2, 3), 8, '2 в степени 3 = 8');
assertEqual(power(5, 0), 1, '5 в степени 0 = 1');
assertEqual(factorial(5), 120, 'Факториал 5 = 120');
assertEqual(factorial(0), 1, 'Факториал 0 = 1');

console.log("✅ Все тесты прошли успешно!");
