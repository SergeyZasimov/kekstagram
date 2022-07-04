const getRandomInteger = (a, b, unique = true) => {
  const numbers = [];
  return () => {
    let result;
    const begin = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const end = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

    if (!unique) {
      return Math.floor(Math.random() * (end + 1 - begin) + begin);
    }

    do {
      result = Math.floor(Math.random() * (end + 1 - begin) + begin);
    } while (numbers.includes(result));
    numbers.push(result);
    return result;
  };
};

const checkLength = (string, length) => string.length <= length;

export { getRandomInteger, checkLength };
