window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
})

const functionApi = 'https://xodjnmk3i3.execute-api.eu-west-2.amazonaws.com/Prod/visitor-count/';

const getVisitCount = () => {
    fetch(functionApi)
    .then(response =>response.text())
      .then((body) => {
        var obj = JSON.parse(body);
        document.getElementById("counter").innerHTML=obj.visitorCount
      })
      .catch(function(error) {
        console.log(error); 
      });  
    } 