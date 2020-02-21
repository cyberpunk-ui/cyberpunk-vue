export function unique (array) {
  // return [...new Set(array)]
  // array = [1 1 2 3 4 5 20]
  const object = {}
  array.map((number) => {
    object[number] = true
  })
  return Object.keys(object).map((s) => parseInt(s, 10))
}