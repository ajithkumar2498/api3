
// on click event triggers bikeData Function
function bikeData(){
    let bikeData1 = new Promise ((resolve, reject)=>{
    //create new XMLHTTP Request
        let request= new XMLHttpRequest() 
        //open request
        request.open('GET',"https://api.citybik.es/v2/networks?")
        //sending request
        request.send()
        // request loading using function
        request.onload = (function (){
                      var data            
                   if(request.status==200){
                    //converting requesting in to reable stream
                    data= JSON.parse(request.response)
                    resolve(data);
                   }else{
                    reject("data")
                   }  }
        )
      })
      //converting data into JSOn format
      bikeData1.then((data)=>{console.log(data) 
        // get number of Bike from user
        let input= document.querySelector('.datas').value
        // Check if the number greater than 0 and lesser than 676
        if((input > 0) && (input < 677) ){
          //display data in cards
          document.querySelector('.card-text1').innerHTML = `<b style="font-size:22px;">ID:</b>       ${data.networks[input].id}` 
          document.querySelector('.card-text2').innerHTML = `<b style="font-size:22px;">Bikename:</b>       ${data.networks[input].name}`
          document.querySelector('.card-text3').innerHTML = `<b style="font-size:22px;">Href:</b>  <a href="${data.networks[input].href}" target=" "> https:/${data.networks[input].href} </a>`
          document.querySelector('.card-text4').innerHTML = `<b style="font-size:22px;">Company:</b>        ${data.networks[input].company}`
          document.querySelector('.card-text5').innerHTML = `<b style="font-size:22px;">Country:</b>        ${data.networks[input].location.country}`
          document.querySelector('.card-text6').innerHTML = `<b style="font-size:22px;">City:</b>        ${data.networks[input].location.city}`
          
        }
        else{
         // if the above condition fails alert message shows 
          alert("enter Between 0 to 676")
          input.clear();
        }
        
       
// catch the error if error occcurs and display error message
      }).catch((err)=>{console.log(err)})
}

 
  