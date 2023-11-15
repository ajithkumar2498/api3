function bikeData(){
    let bikeData1 = new Promise ((resolve, reject)=>{

        let request= new XMLHttpRequest() 
        request.open('GET',"https://api.citybik.es/v2/networks?fields=id,name,href")
        request.send()
        request.onload = (function (){
                      var data            
                   if(request.status==200){
                    data= JSON.parse(request.response)
                    resolve(data);
                   }else{
                    reject("data")
                   }  }
        )
      })
      bikeData1.then((data)=>{console.log(data) 
      }).catch((err)=>{console.log(err)})
}

 
  