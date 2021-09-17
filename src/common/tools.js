// 防抖函数
export function debounce(func, delay) {
  let timer = null

  function fun(timer) {
    console.log(timer)
  }
  fun()
  return function (...args) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
