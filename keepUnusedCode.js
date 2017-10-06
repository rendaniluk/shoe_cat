// var User = document.querySelector('.username');
// var lookup = document.querySelector('#btn');
// var brandName = document.querySelector('.options');
// var sizeValue = document.querySelector('.sizes');
// var id = document.querySelector('.id')
// var brand = document.querySelector('.brand')
// var color = document.querySelector('.color')
// var size = document.querySelector('.size')
// var price = document.querySelector('.price')
// var in_stock = document.querySelector('.in_stock')
//


// var filterTemplateSizes = initTemplate('.dropDownsTemplatesSizes');
// var filtersBrands = document.querySelector('.filtersBrands');
// var brands = function() {
//   var url = "http://localhost:5000/api/shoes/brand";
//   $.get(url)
//     .then(function(results) {
//       filtersBrands.innerHTML = filterTemplateBrands({
//         brand: results
//       });
//     });
// };


//function to get shoes by brand from the api
//
// var shoesBrands = function() {
//   var url = "http://localhost:5000/api/shoes/brand/" + brandName.value;
//   console.log(url);
//
//   $.get(url)
//     .then(function(results) {
//       var apiResults = results;
//       // console.log(apiResults);
//       var shoeInfo = myTemplate({
//         shoeDetails: apiResults
//       });
//       shoeDetails.innerHTML = shoeInfo;
//     });
//   brandName.value = "select brand"
// };
// //function to get sizes
// var shoeSizes = function() {
//   var url = "http://localhost:5000/api/shoes/size/" + sizeValue.value;
//   console.log(url);
//
//   $.get(url)
//     .then(function(results) {
//       var apiResults = results;
//       // console.log(apiResults);
//       var shoeInfo = myTemplate({
//         shoeDetails: apiResults
//       });
//       shoeDetails.innerHTML = shoeInfo;
//     });
//   sizeValue.value = "select size"
// };

// //function to get brand and size
// var brandAndSizes = function() {
//   var url = "https://shoecatapi.herokuapp.com/api/shoes/brand/" + brandName.value +
//     "/size/" + sizeValue.value;
//   console.log(url);
//   $.get(url)
//     .then(function(results) {
//       var apiResults = results;
//       // console.log(apiResults);
//       var shoeInfo = myTemplate({
//         shoeDetails: apiResults
//       });
//       shoeDetails.innerHTML = shoeInfo;
//     });
// };

// //function to add Stock
// var addStock = function() {
//   var url = "https://shoecatapi.herokuapp.com/api/shoes/"
//   $.post(url)
//     .then(function(shoes) {
//       var shoes = {
//           id: id.value,
//           color: color.value,
//           brand: brand.value,
//           size: size.value,
//           price: price.value,
//           in_stock: in_stock.value
//         }
//         // var apiResults = results;
//         // console.log(apiResults);
//       var shoeInfo = myTemplate({
//         shoeDetails: apiResults
//       });
//       shoeDetails.innerHTML = shoeInfo;
//     });
// };
// brands();
// sizes();
// brandName.addEventListener('change', shoesBrands);
// sizeValue.addEventListener('change', shoeSizes);
// brandAndSizes();

// lookup.addEventListener('click', allShoes);
