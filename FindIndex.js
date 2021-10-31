function FindIndex(a, k){
  let i = 0;
  for(i; i<a.length; i++) {
    if(a[i] == k)
    return i;
  }
  return -1;
}

module.exports = {FindIndex}
