// DOM

// Onload
window.onload = function() {
    
}

// When searching
function search() {
    var brand = document.getElementById("brand").value;
    var color = document.getElementById("color").value;
    var redirectUrl = "/view/";
    
    // Generate url based on criteria
    switch (brand) {
        case "brand--all":
            redirectUrl += "?brand=all";
            break;
        case "brand--hp":
            redirectUrl += "?brand=hp";
            break;
        case "brand--lexmark":
            redirectUrl += "?brand=lexmark";
            break;
    }

    switch (color) {
        case "color--all":
            redirectUrl += "&color=all";
            break;
        case "color--black":
            redirectUrl += "&color=black";
            break;
        case "color--cyan":
            redirectUrl += "&color=cyan";
            break;
        case "color--magenta":
            redirectUrl += "&color=magenta";
            break;
        case "color--yellow":
            redirectUrl += "&color=yellow";
            break;
    }

    window.location.href = redirectUrl;
}