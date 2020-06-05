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

test('Player name should be empy when game start', () => {
  expect(gameOption.playerName).toEqual('');
});

test('Store player name if given', () => {
  gameOption.playerName = 'Certil';
  expect(gameOption.playerName).toEqual('Certil');
});

test('Store player name if given', () => {
  expect(gameOption.spawnRange).toEqual([80, 300]);
});

test('Platform speed range', () => {
  expect(gameOption.platformSpeedRange).toEqual([300, 300]);
});

test('Platform speed range', () => {
  expect(gameOption.platformVerticalLimit).toEqual([0.4, 0.8]);
});

test('Platform speed range', () => {
  expect(gameOption.playerStartPosition).toEqual(200);
});