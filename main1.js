function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
   if (predicate(element, index)) {
     acc.push(element);
   }
  });
  return acc;
  }
  
  function reduce(array, f, acc) {
  if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
  }
  each(array, function (element, i) {
   acc = f(acc, element, i);
  });
  return acc;
  }
  function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
  function food( name,price, category, images){
    return{
      id:generateID(),
      price:price,
      name:name,
      category:category,
      images:images,
      
    }
  }
  var food1=food("pizza","$10","food",['img/pizza2.jpg','img/pizza1.jpg','img/pizza3.jpg'])
  var food2=food("plate","20$","food",['img/pla1.jpg','img/pla2.jpg','img/pla3.jpg'])
  var food3=food("sundwitch","$5","food",["img/sand1.jpg","img/sand2.jpg","img/sand3.jpg"])
  var food4=food("jus","$7","food",["img/jus1.jpg","img/jus2.jpg",'img/jus3.jpg'])

  $(".container").append(` <div class ='card' id='f1'> <img class='img1'src=${food1.images[0]} /><h2 class='name'>Name: ${food1.name}</h2><h4 class ='price'> price:${food1.price}</h4> <h4 class='catego'> category:${food1.category}</h4> <button class='buy'>buy</button> 
  </div>
  <div class='buyForm'> 
  <h1>${food1.name}</h1>
  <h1>${food1.price}</h1>
  <h1>${food1.category}</h1>
  <img class='img1'src=${food1.images[0]}

  </div>
  `
)
  $(".container").append(` <div class ='card' id='f2'> <img class='img2'src=${food2.images[0]} /><h2 class='name'>Name: ${food2.name}</h2><h4 class ='price1'>price:${food2.price}</h4> <h4 class='catego1'>category:${food2.category}</h4> <button class='buy1'>buy</button> </div>
  <div class='buyForm1'> 
  <h1>${food2.name}</h1>
  <h1>${food2.price}</h1>
  <h1>${food2.category}</h1>
  <img class='img2'src=${food2.images[0]}

  </div>`)
  $(".container").append(` <div class ='card' id='f3'> <img class='img3'src=${food3.images[0]} /><h2 class='name'>Name:${food3.name}</h2><h4 class ='price2'>price:${food3.price}</h4> <h4 class='catego2'>category:${food3.category}</h4> <button class='buy2'>buy</button> </div>
  <div class='buyForm2'> 
  <h1>${food3.name}</h1>
  <h1>${food3.price}</h1>
  <h1>${food3.category}</h1>
  <img class='img3'src=${food3.images[0]}

  </div>`)
  $(".container").append(` <div class ='card' id='f4'>  <img class='img4'src=${food4.images[0]} /><h2 class='name'>Name:${food4.name}</h2><h4 class ='price3'>price:${food4.price}</h4> <h4 class='catego3'>category:${food4.category}</h4> <button class='buy3'>buy</button></div> 
  <div class='buyForm3'> 
  <h1>${food4.name}</h1>
  <h1>${food4.price}</h1>
  <h1>${food4.category}</h1>
  <img class='img4'src=${food4.images[0]}

  </div>`)
$('.buyForm,.buyForm1,.buyForm2,.buyForm3').hide()
$('.buy').click(function(){
  $('.buyForm').show()
  $('.card').hide()

})
$('.buy1').click(function(){
  $('.buyForm1').show()
  $('.card').hide()

})
$('.buy2').click(function(){
  $('.buyForm2').show()
  $('.card').hide()

})
$('.buy3').click(function(){
  $('.buyForm3').show()
  $('.card').hide()

})
  //$('li#name').append(movie1.name)
  //$('li#price').append(movie1.price)
  //$('li#category').append(movie1.category)
  //$('#images').attr('src', movie1.images[0])
  //$('li#date').append(movie1.date)
  var count =0;
  $('.img1').on({
    'click': function () {
      count ++ 
      if(count > food1.images.length-1){
        count = 0
      }
      $('.img1').attr('src', food1.images[count])
    }
  });
  var count =0;
  $('.img2').on({
    'click': function () {
      count ++ 
      if(count > food2.images.length-1){
        count = 0
      }
      $('.img2').attr('src', food2.images[count])
    }
  });
  var count =0;
  $('.img3').on({
    'click': function () {
      count ++ 
      if(count > food3.images.length-1){
        count = 0
      }
      $('.img3').attr('src', food3.images[count])
    }
  });
  var count =0;
  $('.img4').on({
    'click': function () {
      count ++ 
      if(count > food4.images.length-1){
        count = 0
      }
      $('.img4').attr('src', food4.images[count])
    }
  });
  //$('.price,.price1,.price2,.price3').hide()
 // $('.catego,.catego1,.catego2,.catego3').hide()
  //$('.img1').on({
  //  'click': function () {
  //$('.price').toggle()
 // $('.catego').toggle() 
  
  
  //}
//})

