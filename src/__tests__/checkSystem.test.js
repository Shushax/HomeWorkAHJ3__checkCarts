import checkSystem from '../js/checkSystem';

test('undefined', () => {
  expect(checkSystem('78')).toBe(undefined);
});

test('mir', () => {
  expect(checkSystem('2')).toBe('mir');
});

test('dinersclub', () => {
  expect(checkSystem('30')).toBe('dinersclub');
});

test('dinersclub1', () => {
  expect(checkSystem('36')).toBe('dinersclub');
});

test('dinersclub2', () => {
  expect(checkSystem('38')).toBe('dinersclub');
});

test('jcb', () => {
  expect(checkSystem('31')).toBe('jcb');
});

test('jcb1', () => {
  expect(checkSystem('35')).toBe('jcb');
});

test('ae', () => {
  expect(checkSystem('34')).toBe('ae');
});

test('ae', () => {
  expect(checkSystem('37')).toBe('ae');
});

test('visa', () => {
  expect(checkSystem('4')).toBe('visa');
});

test('maestro', () => {
  expect(checkSystem('50')).toBe('maestro');
});

test('maestro1', () => {
  expect(checkSystem('56')).toBe('maestro');
});

test('maestro2', () => {
  expect(checkSystem('57')).toBe('maestro');
});

test('maestro3', () => {
  expect(checkSystem('58')).toBe('maestro');
});

test('maestro4', () => {
  expect(checkSystem('63')).toBe('maestro');
});

test('maestro5', () => {
  expect(checkSystem('67')).toBe('maestro');
});

test('mastercard', () => {
  expect(checkSystem('51')).toBe('mastercard');
});

test('mastercard1', () => {
  expect(checkSystem('52')).toBe('mastercard');
});

test('mastercard2', () => {
  expect(checkSystem('53')).toBe('mastercard');
});

test('mastercard3', () => {
  expect(checkSystem('54')).toBe('mastercard');
});

test('mastercard4', () => {
  expect(checkSystem('55')).toBe('mastercard');
});

test('discover', () => {
  expect(checkSystem('60')).toBe('discover');
});

test('unionpay', () => {
  expect(checkSystem('62')).toBe('unionpay');
});
