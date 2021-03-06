// import vue from 'vue'
import axios from 'axios'
// import qs from 'qs'

axios.defaults.timeout = 60000                        // 响应时间
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'          // 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'          // 配置请求头
axios.defaults.baseURL = '/api'   // 配置线上接口地址
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  // if (config.method === 'post') {
  //   config.data = qs.stringify(config.data)
  // }
  return config
}, (error) => {
  return Promise.reject({
    stat: 'error',
    msg: '参数错误！'
  })
})
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  if (res.status == '200') {
    return res.data
  } else {
    return Promise.reject({
      stat: 'error',
      msg: '服务出错，请重试！'
    })
  }
}, (error) => {
  var msg = ''
  if (error.response) {
    if (error.response.status == '404') {
      msg = '服务出错，请稍候再试！'
    } else if (error.response.status == '408') {
      msg = '响应超时，请重试！'
    } else {
      msg = '服务出错，请稍候再试uuuu！'
    }
  } else {
    if (error.code == 'ECONNABORTED') {
      msg = '请求超时，请重试！'
    } else {
      msg = '网络异常，请检查网络是否正常打开！'
    }
  }
  return Promise.reject({
    stat: 'error',
    msg: msg
  })
})

// 返回一个Promise(发送post请求)
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

// 返回一个Promise(发送get请求)
export function getFetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params}).then(response => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {

  Login(params) {
    return fetch('/user/login', params)
  },
  Register(params){
    return fetch('/user/register', params)
  },
  EditBaseInfo(params){
    return fetch('/user/editBaseInfo', params)
  },
  ForgorPass(params){
    return fetch('/user/forgetPass', params)
  },
  EditEntrScore(params){
    return fetch('/score/editEntrScore', params)
  },
  GetEntrScore(params){
    return fetch('/score/getEntrScore', params)
  },
  EditTuCoer(params){
    return fetch('/score/editTuCoer', params)
  },
  GetTuCoer(params){
    return fetch('/score/getTuCoer', params)
  },
  GetAllScore(params){
    return fetch('/score/getAllScore', params)
  },
  EditAllScore(params){
    return fetch('/score/editAllScore', params)
  },
  EditHonor(params){
    return fetch('/prize/editHonor', params)
  },
  ShowHonors(params){
    return fetch('/prize/getHonors', params)
  },
  DeleHonor(params){
    return fetch('/prize/deleHonor', params)
  },
  GetAllPrizes(params){
    return fetch('/prize/getPrizes', params)
  },
  EditPaper(params){
    return fetch('/prize/editPaper', params)
  },
  ShowPapers(params){
    return fetch('/prize/getPapers', params)
  },
  DelePaper(params){
    return fetch('/prize/delePaper', params)
  },
  EditPatent(params){
    return fetch('/prize/editPatent', params)
  },
  ShowPatents(params){
    return fetch('/prize/getPatents', params)
  },
  DelePatent(params){
    return fetch('/prize/delePatent', params)
  },
  EditCompetition(params){
    return fetch('/prize/editCompetition', params)
  },
  ShowCompetitions(params){
    return fetch('/prize/getCompetitions', params)
  },
  DeleCompetition(params){
    return fetch('/prize/deleCompetition', params)
  },
  EditInnoPro(params){
    return fetch('/prize/editInnoPro', params)
  },
  ShowInnoPros(params){
    return fetch('/prize/getInnoPros', params)
  },
  DeleInnoPro(params){
    return fetch('/prize/deleInnoPro', params)
  },
  EditEntrPro(params){
    return fetch('/prize/editEntrPro', params)
  },
  ShowEntrPros(params){
    return fetch('/prize/getEntrPros', params)
  },
  DeleEntrPro(params){
    return fetch('/prize/deleEntrPro', params)
  },
  EditEngiPro(params){
    return fetch('/prize/editEngiPro', params)
  },
  ShowEngiPros(params){
    return fetch('/prize/getEngiPros', params)
  },
  DeleEngiPro(params){
    return fetch('/prize/deleEngiPro', params)
  },
  EditAcadExch(params){
    return fetch('/prize/editAcadExch', params)
  },
  ShowAcadExchs(params){
    return fetch('/prize/getAcadExchs', params)
  },
  DeleAcadExch(params){
    return fetch('/prize/deleAcadExch', params)
  },
  EditWork(params){
    return fetch('/prize/editWork', params)
  },
  ShowWorks(params){
    return fetch('/prize/getWorks', params)
  },
  DeleWork(params){
    return fetch('/prize/deleWork', params)
  },
  EditMasterPaper(params){
    return fetch('/prize/editMasterPaper', params)
  },
  ShowMasterPapers(params){
    return fetch('/prize/getMasterPapers', params)
  },
  DeleMasterPaper(params){
    return fetch('/prize/deleMasterPaper', params)
  },

  DownLoad(params){
    return getFetch('/file/printImg', params)
  },
  EditProject(params){
    return fetch('/prize/editProject', params)
  },
  ShowProjects(params){
    return fetch('/prize/getProjects', params)
  },
  DeleProject(params){
    return fetch('/prize/deleProject', params)
  },
}
