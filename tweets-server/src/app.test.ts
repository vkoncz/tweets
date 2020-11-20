import { getMessage } from './app';

it('should return with message', () => {
  const message = getMessage();

  expect(typeof message).toBe('string');
  expect(message).toBe("It's working");
});
