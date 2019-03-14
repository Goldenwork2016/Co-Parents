export const emptyFields = (keys = [], obj) => {
  let empty = false;
  keys.forEach(key => {
    const val = obj[key]
    if(val === null || val === undefined) empty = true;
    else if (typeof(val) === 'string' && val.trim() === '') empty = true;
  });
  return empty;
}