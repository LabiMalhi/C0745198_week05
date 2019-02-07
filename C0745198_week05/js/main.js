// Your code here!
function myFunction(a, b) {
    return  a + b;
}


function arrays() {
    var pens;
    pens = ["red", "orange", "green", "blue", "purple"];
    markers = pens;
    console.log(pens);
    console.log(pens[3]);

    for (i = 0; i < pens.length; i++) {
        alert(pens[i]);
    }
    alert("Length of arrays is " + i);
    alert("Length of arrays is " + pens.length);
}