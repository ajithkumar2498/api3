function bikeData(){
    let bikeData1 = new Promise ((resolve, reject)=>{

        let request= new XMLHttpRequest() 
        request.open('GET',"https://api.citybik.es/v2/networks?")
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
        let input= document.querySelector('.datas').value
        console.log(input)
        
        console.log(data.networks[input].id, data.networks[input].name, data.networks[input].href, data.networks[input].location.city,
          data.networks[input].company,data.networks[input].location.country)
        if(input >= 0 && input <= 676 ){
          document.querySelector('.card-text1').innerHTML =  `ID:      ${data.networks[input].id}` 
          document.querySelector('.card-text2').innerHTML = `Bikename:      ${data.networks[input].name}`
          document.querySelector('.card-text3').innerHTML = `Href:  <a href="${data.networks[input].href}" target=" "> https:/${data.networks[input].href} </a>`
          document.querySelector('.card-text4').innerHTML = `Company:       ${data.networks[input].company}`
          document.querySelector('.card-text5').innerHTML = `Country:       ${data.networks[input].location.country}`
          document.querySelector('.card-text6').innerHTML = `City:       ${data.networks[input].location.city}`
        }
        else{
          
          alert("enter Between 0 to 676")
          input.clear();
        }
        
       

      }).catch((err)=>{console.log(err)})
}

 
  