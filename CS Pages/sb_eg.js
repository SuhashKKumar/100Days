function getShoppingBagConfig(instance, assetPath) {
    window.personalizedMarketingData = window.personalizedMarketingData || {};
    window.personalizedMarketingData.components =
        window.personalizedMarketingData.components || {};
    //Shop Bag EN
    window.personalizedMarketingData.components[instance] = {
        instanceName: instance,
        name: "LayeredContentModule",
        type: "sitewide",
        useGreyLoadingEffect: false,
        data: {
            background: {
                linkData: {
                    to: "",
                    title: "",
                },
                image: {
                    alt: "",
                    srcUrl: assetPath,
                },
            },
            container: {
                className: "shopping-bag-tile",
                style: {
                    display: "none",
                },
            },
        },
    };
}
if (typeof gap.components !== "undefined" && gap.components == true) {
    var locale = window.__OPTLY_STATE__.shared.getStateValue("locale");

    if (locale === "en_CA") {
        getShoppingBagConfig(
            "shopbag-ilp-en",
            "/Asset_Archive/ONWeb/content/0019/595/575/assets/220331_NS_N2827_ILP_CAPilotExp_OptInBonus_Site_ShoppingBag.svg"
        );
    } else if (locale === "fr_CA") {
        getShoppingBagConfig(
            "shopbag-ilp-fr",
            "/Asset_Archive/ONWeb/content/0019/595/575/assets/220331_NS_N2827_ILP_CAPilotExp_OptInBonus_Site_ShoppingBag.svg"
        );
    }
}
