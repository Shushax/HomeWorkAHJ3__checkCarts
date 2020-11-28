import luhnaAlgorithm from '../js/luhnaAlgorithm';

test('invalid', () => {
  expect(luhnaAlgorithm('234234')).toBeFalsy();
});

test('invalid', () => {
  expect(luhnaAlgorithm('4532171045035753')).toBeTruthy();
});
