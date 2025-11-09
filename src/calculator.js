/**
 * Calculatrice simple pour démonstration GitHub Actions
 */

class Calculator {
  /**
   * Addition de deux nombres
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Soustraction de deux nombres
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication de deux nombres
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division de deux nombres
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division par zéro impossible');
    }
    return a / b;
  }
}

// Export pour utilisation dans les tests
module.exports = Calculator;

// Démonstration si exécuté directement
if (require.main === module) {
  const calc = new Calculator();
  
  console.log('=== Démonstration Calculatrice ===');
  console.log(`5 + 3 = ${calc.add(5, 3)}`);
  console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
  console.log(`6 * 7 = ${calc.multiply(6, 7)}`);
  console.log(`20 / 5 = ${calc.divide(20, 5)}`);
  console.log('=================================');
}