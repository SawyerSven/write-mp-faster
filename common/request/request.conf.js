import {urls} from '../../config/index';

import * as instance from '../../api/instance';

const {requestUrl} = urls

const request = function (method,url,data={},headers={},dataType = 'JSON') {
  return new Promise((resolve, reject) => {
    my.request({
      url:requestUrl + url,
      method:method,
      data:data,
      headers:headers,
      dataType:dataType,
      success(res){
        if(res.status === 200){
          resolve(res.data);
        }
        console.log(res.data)
      },
      fail(err){
        reject(err)
      },
      complete(res){},
    })
  });
};

export const post = (url,data,headers,dataType) => request('POST',url,data,headers,dataType)

export const get = (url,data,headers,dataType) => request('POST',url,data,headers,dataType)

export default {post,get,...instance}
