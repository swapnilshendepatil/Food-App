import sum from '../sum';

test('should calculate the sum of two digits', () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});
