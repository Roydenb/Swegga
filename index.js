//Javascript funtionality
// Getting the references to the information in the html doc
// The id information
let qtyBoxA = document.getElementById('QtyF');
let qtyBoxB = document.getElementById('QtyM');

let totBoxA = document.getElementById('FemaleTotal');
let totBoxB = document.getElementById('MaleTotal');

let grandTot = document.getElementById('Total');
            
//hold the total amount (The female amount 
//and male amount added up.)
let gt = null; 

function calc() {
    let priceA = 150.95;
    let priceB = 180.95;
    gt = 0; 

    // Convert the values in the quantity textboxes to numbers.
    let qtyA = parseInt(qtyBoxA.value, 10);
    let qtyB = parseInt(qtyBoxB.value, 10);
    

    // Placing the information in the reserved table area
    if (qtyA) { totBoxA.textContent = qtyA * priceA; gt += +totBoxA.textContent; }
    if (qtyB) { totBoxB.textContent = qtyB * priceB; gt += +totBoxB.textContent; }
    grandTot.textContent = gt.toFixed(2); 				
}

function getGrandTotal(){
    calc('R');    
}