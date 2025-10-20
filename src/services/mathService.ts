export function evaluateMath(expression: string): string {
  try {
    const sanitized = expression
      .replace(/[^0-9+\-*/().\s]/g, '')
      .replace(/\s+/g, '');

    if (!sanitized) {
      return '';
    }

    const result = Function(`'use strict'; return (${sanitized})`)();

    if (typeof result === 'number' && !isNaN(result)) {
      return result.toString();
    }

    return '';
  } catch {
    return '';
  }
}

export function detectMathQuery(text: string): boolean {
  const mathPatterns = [
    /\d+\s*[\+\-\*\/]\s*\d+/,
    /what is \d+/i,
    /calculate/i,
    /solve/i,
    /math/i,
  ];

  return mathPatterns.some(pattern => pattern.test(text));
}
