'use strict'
function getValue() {
   let value =  $('input').val();
    console.log(value);
    return value;
}
function handleResponse(response, breed) {
    console.log(response);
    if(response.status === "error") {
      $('.results-img').append(
        `<p>Sorry the breed ${breed} does not exist</p>`
      ) 
    } else {
      $('.results-img').append(
        `<img src="${response.message}" alt="A picture of the breed ${breed}.">`
      )
    }
    $('.results').show();
}

function getDogImage() {
    let value = getValue(); 
      fetch(`https://dog.ceo/api/breed/${value.toLowerCase().replace(/\s/g, '')}/images/random`)
          .then(response => response.json())
          .then(responseJson => handleResponse(responseJson, value))
          .catch(error => alert(`${error} occured. Try again later.`));
}
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }
  
function dogAPI() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
};

$(dogAPI);