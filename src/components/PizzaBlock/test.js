function func(arr){
  let result= [];
  let max = Math.max(...arr) * 0.9;
  for(let i = 0; i < arr.length; i++ )
  {
    if(arr[i] > max && arr[i] !== Math.max(...arr)){
      result.push(arr[i])
    }
  }
  return result
}

console.log(func([1, 10, 25, 99, 88, 84, 110, 125]))
