(function() {
  //template compiler function
  function initTemplate(templateSelector) {
    var templateText = document.querySelector(templateSelector).innerHTML;
    return Handlebars.compile(templateText);
  }
  //calling template compiler function passing selector
  var filterTemplate = initTemplate('.dropDownsTemplates');
  var filters = document.querySelector('.filters');

  var tableTemplate = initTemplate('.tableTemplate')
  var shoeDetailsHtml = document.querySelector('.shoeDetails');

  //text input DOM

  var showAll = document.querySelector('#showall')
    //Drop down list ajax call
  var sizesBrandsDropDowns = function() {
    var url = "https://shoecatapi.herokuapp.com/api/shoes/sizebrandsdropdowns";
    $.get(url)
      .then(function(results) {
        filters.innerHTML = filterTemplate({
          brand: results.brands,
          size: results.sizes
        });
      });
  };
  //function to get allShoes from the api
  var allShoes = function() {
    var url = "https://shoecatapi.herokuapp.com/api/shoes";
    $.get(url)
      .then(function(all_shoes) {
        shoeDetailsHtml.innerHTML = tableTemplate({
          shoeDetails: all_shoes
        })
      });
  };
  //filter brand only
  var filterBrand = function(brandName) {
    var url = "https://shoecatapi.herokuapp.com/api/shoes/brand/" + brandName;
    $.get(url)
      .then(function(brands) {
        shoeDetailsHtml.innerHTML = tableTemplate({
          shoeDetails: brands
        })
      });
  };
  //filter size only
  var filterSize = function(shoeSize) {
    var url = "https://shoecatapi.herokuapp.com/api/shoes/size/" + shoeSize;
    $.get(url)
      .then(function(sizes) {
        shoeDetailsHtml.innerHTML = tableTemplate({
          shoeDetails: sizes
        })
      });
  };
  //filter size only brand and size
  var filterSizeBrand = function(brandName, shoeSize) {
    var url = "https://shoecatapi.herokuapp.com/api/shoes/brand/" +
      brandName +
      "/size/" + shoeSize;
    $.get(url)
      .then(function(brandSize) {
        shoeDetailsHtml.innerHTML = tableTemplate({
          shoeDetails: brandSize
        })
      });
  };

  //displaying data by calling all functions
  sizesBrandsDropDowns();
  allShoes();
  showAll.addEventListener('click', allShoes)
  //adding event to drop down list
  filters.addEventListener('click', function(evt) {
    if (evt.target.name === 'filterButton') {
      // get the references in the Event Listener as these elements are added dynamically
      var sizeFilter = document.querySelector('.sizeFilter');
      var brandFilter = document.querySelector('.brandFilter');
      //getting the value of selected in drop down list
      var brandSelected = brandFilter.value;
      var sizeSelected = sizeFilter.value;
      //calling our filters
      if (brandSelected && !sizeSelected) {
        filterBrand(brandSelected);
      } else if (sizeSelected && !brandSelected) {
        filterSize(sizeSelected);
      }else if (brandSelected && sizeSelected) {
        filterSizeBrand(brandSelected, sizeSelected)
      }
      brandFilter.value = "";
      sizeFilter.value = "";
    }
  })

})();
