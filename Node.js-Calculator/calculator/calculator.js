let value = 0;

const set = (num = 0) => {
  value = num;
};

const add = (num) => {
  return (value += num);
};
const sub = (num) => {
  return (value -= num);
};
const mult = (num) => {
  return (value *= num);
};
const div = (num) => {
  return (value /= num);
};

module.exports = {
  set,
  add,
  sub,
  mult,
  div,
};
