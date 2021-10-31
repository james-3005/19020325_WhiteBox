const {FindIndex}= require('./FindIndex')
test("1", () => {
  expect(FindIndex([1,2,3], 1)).toBe(0);
})
test("2", () => {
  expect(FindIndex([1], 2)).toBe(-1);
})