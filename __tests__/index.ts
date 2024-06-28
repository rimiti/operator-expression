import { ExpressionAbbreviation, mappings, strToOperator, operatorToStr } from '../src';

describe('strToOperator', () => {
  it.each(Object.keys(mappings))('should return the correct operator for %s', (key) => {
    expect(strToOperator(key as ExpressionAbbreviation)).toBe(mappings[key as ExpressionAbbreviation]);
  });
});

describe('operatorToStr', () => {
  it.each(Object.values(mappings))('should return the correct operator for %s', (value) => {
    expect(operatorToStr(value)).toBe(
      Object.keys(mappings).find((key) => mappings[key as ExpressionAbbreviation] === value) as ExpressionAbbreviation,
    );
  });
});
