/**
 * Tests pour la classe Calculator
 */

const Calculator = require('../src/calculator');

// Couleurs pour l'affichage
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

// Fonction d'assertion simple
function assert(condition, testName) {
  if (condition) {
    console.log(`${GREEN}✓${RESET} ${testName}`);
    return true;
  } else {
    console.log(`${RED}✗${RESET} ${testName}`);
    return false;
  }
}

// Suite de tests
function runTests() {
  console.log('\n=== Exécution des Tests ===\n');
  
  const calc = new Calculator();
  let passed = 0;
  let failed = 0;

  // Test 1 : Addition
  if (assert(calc.add(2, 3) === 5, 'Addition: 2 + 3 = 5')) {
    passed++;
  } else {
    failed++;
  }

  // Test 2 : Addition avec nombres négatifs
  if (assert(calc.add(-5, 3) === -2, 'Addition: -5 + 3 = -2')) {
    passed++;
  } else {
    failed++;
  }

  // Test 3 : Soustraction
  if (assert(calc.subtract(10, 4) === 6, 'Soustraction: 10 - 4 = 6')) {
    passed++;
  } else {
    failed++;
  }

  // Test 4 : Multiplication
  if (assert(calc.multiply(6, 7) === 42, 'Multiplication: 6 * 7 = 42')) {
    passed++;
  } else {
    failed++;
  }

  // Test 5 : Multiplication par zéro
  if (assert(calc.multiply(5, 0) === 0, 'Multiplication: 5 * 0 = 0')) {
    passed++;
  } else {
    failed++;
  }

  // Test 6 : Division
  if (assert(calc.divide(20, 5) === 4, 'Division: 20 / 5 = 4')) {
    passed++;
  } else {
    failed++;
  }

  // Test 7 : Division avec résultat décimal
  if (assert(calc.divide(7, 2) === 3.5, 'Division: 7 / 2 = 3.5')) {
    passed++;
  } else {
    failed++;
  }

  // Test 8 : Division par zéro (doit lever une erreur)
  let divisionByZeroThrows = false;
  try {
    calc.divide(10, 0);
  } catch (error) {
    divisionByZeroThrows = error.message === 'Division par zéro impossible';
  }
  if (assert(divisionByZeroThrows, 'Division: Division par zéro lève une erreur')) {
    passed++;
  } else {
    failed++;
  }

  // Résumé
  console.log('\n=== Résumé des Tests ===');
  console.log(`${GREEN}Tests réussis: ${passed}${RESET}`);
  console.log(`${RED}Tests échoués: ${failed}${RESET}`);
  console.log(`Total: ${passed + failed}`);
  console.log('========================\n');

  // Code de sortie
  if (failed > 0) {
    console.log(`${RED}❌ Échec des tests${RESET}`);
    process.exit(1);
  } else {
    console.log(`${GREEN}✅ Tous les tests sont passés !${RESET}`);
    process.exit(0);
  }
}

// Exécution des tests
runTests();