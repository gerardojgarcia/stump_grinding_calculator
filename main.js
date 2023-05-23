function calculateTotal() {
    var small = parseInt(document.getElementById("smallInput").value) || 0;
    var medium = parseInt(document.getElementById("mediumInput").value) || 0;
    var large = parseInt(document.getElementById("largeInput").value) || 0;
    var xLarge = parseInt(document.getElementById("xLargeInput").value) || 0;
  
    var firstSmallPrice = 125;
    var firstMediumPrice = 200;
    var firstLargePrice = 275;
    var firstXLargePrice = 350;
  
    var additionalSmallPrice = 25;
    var additionalMediumPrice = 75;
    var additionalLargePrice = 125;
    var additionalXLargePrice = 175;

    var xLargeTotal = (firstXLargePrice * Math.min(1, xLarge) + (additionalXLargePrice * Math.max(0, xLarge - 1)))
    var largeTotal =(firstLargePrice * Math.min(1, large) + (additionalLargePrice * Math.max(0, large - 1)))
    var mediumTotal =  (firstMediumPrice * Math.min(1, medium) + ( additionalMediumPrice * Math.max(0, medium - 1)))

    var smallTotal = (firstSmallPrice * Math.min(1, small) + (additionalSmallPrice * Math.max(0, small - 1)))
  
    
var greaterThanMedium = xLargeTotal + largeTotal
var greaterThanSmall  = xLargeTotal + largeTotal + mediumTotal

    



    var total = (

        
       xLargeTotal + (xLargeTotal < 1 ? largeTotal : largeTotal - firstLargePrice + additionalLargePrice  ) + (greaterThanMedium > 1 ? mediumTotal - firstMediumPrice + additionalMediumPrice : mediumTotal) + (greaterThanSmall > 1 ? smallTotal - firstSmallPrice + additionalSmallPrice : smallTotal)
        
        
        )




  
    document.getElementById("calculationResult").textContent = "Total: $" + total;
    console.log(xLargeTotal)
    console.log(largeTotal)


    
  }
  
  
