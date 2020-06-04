
import Model from '../src/model';

test('Test if music is on when title start', () => {
  const newMoodel = new Model();
  expect(newMoodel.musicOn).toEqual(true);
});

test('Test if music is On when player  turn it of', () => {
  const newMoodel = new Model();
  newMoodel.musicOn = false;
  expect(newMoodel.musicOn).toEqual(false);
});

test('Test if backgound music are playing on first start', () => {
  const newMoodel = new Model();
  expect(newMoodel.bgMusicPlaying).toEqual(false);
});

test('Test if backgound music are playing on title ', () => {
  const newMoodel = new Model();
  newMoodel.bgMusicPlaying = true;
  expect(newMoodel.bgMusicPlaying).toEqual(true);
});