import gameOption from '../src/config/gameOptions';

test('player Gravity', () => {
  expect(gameOption.playerGravity).toEqual(900);
});

test('Default Score', () => {
  expect(gameOption.score).toEqual(0);
});

test('player Number of jumps', () => {
  expect(gameOption.jumps).toEqual(2);
});

test('Coin percent', () => {
  expect(gameOption.coinPercent).toEqual(25);
});

test('Platform heigh scale', () => {
  expect(gameOption.platformHeighScale).toEqual(20);
});