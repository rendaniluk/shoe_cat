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

  $(".addStock").submit(function(e) {
    var url = "https://shoecatapi.herokuapp.com/api/shoes"; // the script where you handle the form input.

    $.ajax({
      type: "POST",
      url: url,
      data: $(".addStock").serialize(), // serializes the form's elements.
      success: function(data) {
        allShoes();
      }
    });
    e.preventDefault(); // avoid to execute the actual submit of the form.
  });



  var showAll = document.querySelector('#showall')
    //Drop down list ajax call
  var sizesBrandsDropDowns = function() {
    var url =
      "https://shoecatapi.herokuapp.com/api/shoes/sizebrandsdropdowns";
    $.get(url)
      .then(function(results) {
        filters.innerHTML = filterTemplate({
          brand: results.brands.sort(),
          size: results.sizes.sort(function(a, b) {
            return a - b;
          })
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
    var url = "https://shoecatapi.herokuapp.com/api/shoes/brand/" +
      brandName;
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

  var purchase = function(shoeId, shoeQuantity) {
    var url = "https://shoecatapi.herokuapp.com/api/shoes/sold/" +
      shoeId +
      "/qty/" + shoeQuantity;
    $.post(url)
      .then(function(bought) {
 // alert(bought)
        console.log(bought);
        // shoeDetailsHtml.innerHTML = tableTemplate({
        //   shoeDetails: brandSize
        // })
      });
  };


  var upDate = function(shoeId, shoeQuantity) {
    var url = "https://shoecatapi.herokuapp.com/api/shoes/stockadd/" +
      shoeId +
      "/qty/" + shoeQuantity;
    $.post(url)
      .then(function(bought) {

      });
  };
  //displaying data by calling all functions
  sizesBrandsDropDowns();
  allShoes();
  // upDate(109, 100)

  // purchase(108, 9)
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
      } else if (brandSelected && sizeSelected) {
        filterSizeBrand(brandSelected, sizeSelected)
      }
      brandFilter.value = "";
      sizeFilter.value = "";
    }
  })

  var shoes_form = document.querySelector('.shoes_form')
  shoes_form.addEventListener('click', function(evt) {
    if (evt.target.name === 'purchase') {
      // Selecting dom elements for
      var shoeId = document.querySelector('.ID');
      var shoeQuantity = document.querySelector('.quanty');
      //getting the values of text inputs
      var shoeIdTyped = shoeId.value;
      var shoeQuantityTyped = shoeQuantity.value;
      //calling purchase function
      if (shoeIdTyped && shoeQuantityTyped) {
        purchase(shoeIdTyped, shoeQuantityTyped);
      } else {
        alert("Fields Required");
      }
    }
    allShoes();

  })

var updateForm = document.querySelector('.updateForm')
updateForm.addEventListener('click', function(evt){
  if (evt.target.name === 'update') {
    // Selecting dom elements for
    var shoeId = document.querySelector('.IDup');
    var shoeQuantity = document.querySelector('.quantyup');
    //getting the values of text inputs
    var shoeIdTyped = shoeId.value;
    var shoeQuantityTyped = shoeQuantity.value;
    //calling purchase function
    if (shoeIdTyped && shoeQuantityTyped) {
      upDate(shoeIdTyped, shoeQuantityTyped);
    } else {
      alert("Fields Required");
    }
  }
  allShoes();

})

})();
