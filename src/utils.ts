import { ExpressionAbbreviation, mappings } from './mapping';

/**
 * Convert string to operator.
 * @param expression {ExpressionAbbreviation} - Expression abbreviation.
 * @returns {string | null} - Symbol in string, "null" if not found.
 */
export const strToOperator = (expression: ExpressionAbbreviation): string | null => mappings[expression] || null;

/**
 * Convert operator to string.
 * @param symbol {string} - Symbol in string.
 * @returns {ExpressionAbbreviation | null} - Expression abbreviation, "null" if not found.
 */
export const operatorToStr = (symbol: string): ExpressionAbbreviation | null => {
  const key = Object.keys(mappings).find((key) => mappings[key as ExpressionAbbreviation] === symbol);

  return (key as ExpressionAbbreviation) || null;
};
