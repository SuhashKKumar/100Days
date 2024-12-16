//Match any of these strings
var stringsToMatch = ["Clearance: Price as marked."];

console.log("Overriding these flags:", stringsToMatch);

function updateFlag() {
    document
        .querySelectorAll(
            ".quick-add__marketing-flag, .product-card__marketing-flag, .messaging-wrap .marketing-flag, .pdp-title-box__marketing .marketing-flag, .recommended-product__marketing-flag, .certona_prod_txt--marketing-flag > p, .label-message"
        )
        .forEach(function (marketingFlag, i) {
            // multiple flag targets with one override
            //if (stringsToMatch.indexOf(marketingFlag.innerText) >= 0) {
            //   marketingFlag.style.color = "#D00000";
            //   marketingFlag.innerHTML = "Card Exclusive! Extra 20% Off Clearance: Code VIP";
            //}

            // multiple flag targets with different overrides
            if (marketingFlag.innerText === "Clearance: Price as marked.") {
                // red font
                // marketingFlag.style.color = "#D00000";

                // override 1
                marketingFlag.innerHTML =
                    "Clearance + 20% Off Cardmember Deal! Code: EXTRA";
            } else if (
                marketingFlag.innerText ===
                "Clearance: Final sale. No returns or exchanges."
            ) {
                // red font
                // marketingFlag.style.color = "#D00000";

                // override 2
                marketingFlag.innerHTML =
                    "Final Sale + 20% Off Cardmember Deal! Code: EXTRA";
            }
        });
}

// Select the node that will be observed for mutations
var targetNode;
var pageTypeFound;
if (
    document.getElementById("category-page") ||
    document.getElementById("product-page") ||
    document.getElementById("search-page")
) {
    pageTypeFound = document.getElementById("product-page")
        ? "product-page"
        : document.getElementById("category-page")
        ? "category-page"
        : "search-page";
    targetNode = document.getElementById(pageTypeFound);
}

// Is a product or category page so run and observe page
if (targetNode) {
    console.log("Setting Target to:", pageTypeFound);

    //initiate update for first time
    updateFlag();

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, subtree: true };
    // Callback function to execute when mutations are observed
    var callback = function (mutationsList, observer) {
        updateFlag();
    };
    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
}
