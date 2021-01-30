let debounce = function _debounce(){
  let timeID;
  return (f,n)=>{
    clearTimeout(timeID)
    timeID = setTimeout(f,n)
  }
}()


function _debounce(f,n){
  let timeID;
  console.log('hi')
  return ()=>{
    clearTimeout(timeID)
    timeID = setTimeout(f,n)
  }
}

//对象   对象名和对象值(函数)
let o = {
  name:'ww',
  age:12,
  test: function(){

  },
  test2: function tt1(){

  },
  test1(){},
  
}
export {debounce,_debounce}