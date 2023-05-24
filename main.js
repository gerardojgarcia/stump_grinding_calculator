





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

var xLargeTotal = 0
var largeTotal = 0
var mediumTotal =  0

 var smallTotal = 0
       

        var xLargeTotal = (firstXLargePrice * Math.min(1, xLarge) + (additionalXLargePrice * Math.max(0, xLarge - 1)))
        var largeTotal =(firstLargePrice * Math.min(1, large) + (additionalLargePrice * Math.max(0, large - 1)))
        var mediumTotal =  (firstMediumPrice * Math.min(1, medium) + ( additionalMediumPrice * Math.max(0, medium - 1)))

        var smallTotal = (firstSmallPrice * Math.min(1, small) + (additionalSmallPrice * Math.max(0, small - 1)))
    
        

    var greaterThanMedium = xLargeTotal + largeTotal
    var greaterThanSmall  = greaterThanMedium + mediumTotal

    var smallPriceDifference = (smallTotal - firstSmallPrice) + additionalSmallPrice

    var smallCalculation = (greaterThanSmall <= 0 ? smallTotal : (smallPriceDifference))

    var mediumPriceDifference = (mediumTotal - firstMediumPrice) + additionalMediumPrice

        



        var total = (

            
        (xLargeTotal ) + (xLarge === 0 ? largeTotal : (largeTotal - firstLargePrice) + additionalLargePrice) + (large + xLarge === 0 ? mediumTotal :  (mediumTotal - firstMediumPrice) + additionalMediumPrice)) + ((large + xLarge + medium)  === 0 ? smallTotal : ((smallTotal * small ) - firstSmallPrice) )
            
            
                

            



            
    
        document.getElementById("calculationResult").textContent = "Total: $" + total;


        console.log('xlargeTotal',xLargeTotal)
        console.log('large totatl', largeTotal)
        console.log('mediumTotal',mediumTotal)
        console.log('small total',smallTotal)
        console.log('medium calculation' ,mediumPriceDifference <= 0 ? mediumTotal : (mediumTotal - firstMediumPrice) + additionalMediumPrice)
        console.log('medium calculation 2',greaterThanMedium > 0 ? (mediumTotal - firstMediumPrice) + additionalMediumPrice  :  mediumTotal)



        console.log('')
        console.log('medium price difference', mediumPriceDifference)

        console.log('small price difference', smallPriceDifference)

        console.log('large calculation', (xLargeTotal < 1 ? largeTotal : (largeTotal - firstLargePrice) + additionalLargePrice) )

        console.log('greater medium', greaterThanMedium)

        console.log('small calculation', ( ((smallTotal + additionalSmallPrice) * small) + firstSmallPrice))
            console.log("greate small",greaterThanSmall)

        console.log('mediumTotal',mediumTotal)

        console.log('xlargetotal', (xLargeTotal > 1 ? xLargeTotal : xLargeTotal))

            console.log(total)



        
    }


    function reset(){


(document.getElementById("smallInput").value) = 0;
(document.getElementById("mediumInput").value) = 0;
(document.getElementById("largeInput").value) = 0;
(document.getElementById("xLargeInput").value) = 0;

        var total = 0

        document.getElementById("calculationResult").textContent = "Total: $" + total;

       window.location.reload()

    }


    
    
    
