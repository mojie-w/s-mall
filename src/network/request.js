import axios from "axios";
/*
关于接口的问题 ,我自己搭建了一个 免费提供给大家
无参数: www.blogry.cn/test/index
有参数: www.blogry.cn/test/blog?title=我的编程经历

老师的
http://123.207.32.32:8000/home/multidata
老师新接口
http://152.136.185.210:7878/api/m5
*/

// 通过Promise封装
export function request(config) {
  //1.创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    // console.log('请求', config)
    return config
  }, err => {
    console.log('请求e', err)
  })
  // 2.2响应拦截
  instance.interceptors.response.use(res => {

    return res.data
  }, err => {
    console.log('响应e', err)
  })
  // 3.发送真正的网络请求
  return instance(config)
}
