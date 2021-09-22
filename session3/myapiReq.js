const request=require('request')

getApiResponse =(url,cb)=>{
    request({url,json:true},(err,{body})=>{
        if(err) cb(false,err)
        else cb(body,false)
    })
}