const add = (a, b) => a + b;

const generateGreeting = (name = "Anonymous") => (`Hello ${name}!`);

test('should add two numbers', () => expect(add(5, 12)).toBe(17));

test('should generate greeting for name passed"', () => expect(generateGreeting('Shane')).toBe('Hello Shane!'));

test('should generate greeting for no name', () => expect(generateGreeting()).toBe('Hello Anonymous!'));