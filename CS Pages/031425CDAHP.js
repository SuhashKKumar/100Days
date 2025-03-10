if (typeof gap.components !== "undefined" && gap.components == true) {
    var locale = __OPTLY_STATE__.shared.getStateValue("locale");

    if (locale === "en_CA") {
        window.personalizedMarketingData =
            window.personalizedMarketingData || {};
        window.personalizedMarketingData.components =
            window.personalizedMarketingData.components || {};
        // HP
        let components =
        __OPTLY_STATE__.shared.getContentData().home.components;

        // optly:ampliance (to replace ampliance content to optly)
        let placement = {
            "031425_CA_HOMEPAGE_01": "031425_CA_HOMEPAGE_07",
            "031425_CA_HOMEPAGE_03": "031425_CA_HOMEPAGE_13",
            "031425_CA_HOMEPAGE_02": "031425_CA_HOMEPAGE_11",
            "031425_CA_HOMEPAGE_04": "031425_CA_HOMEPAGE_09",
            "031425_CA_HOMEPAGE_07": "031425_CA_HOMEPAGE_12",
            "031425_CA_HOMEPAGE_13": "031425_CA_HOMEPAGE_10",
            "031425_CA_HOMEPAGE_11": "031425_CA_HOMEPAGE_08",
            "031425_CA_HOMEPAGE_09": "031425_CA_HOMEPAGE_01",
            "031425_CA_HOMEPAGE_12": "031425_CA_HOMEPAGE_03",
            "031425_CA_HOMEPAGE_10": "031425_CA_HOMEPAGE_02",
            "031425_CA_HOMEPAGE_08": "031425_CA_HOMEPAGE_04",
        };

        components.forEach((c) => {
            // Keep it only if there is a cache issue
            if (c.video === undefined) {
                c.video = "";
                c.videoOverlay = "";
            }
            if (c.image === undefined) {
                c.image = c.video.link || "";
                c.imageOverlay = "";
            }
            if (placement[c.instanceName]) {
                window.personalizedMarketingData.components[
                    placement[c.instanceName]
                ] = {
                    content: c,
                };
            }
        });
        //8-5-4
    } else if (locale === "fr_CA") {
        window.personalizedMarketingData =
            window.personalizedMarketingData || {};
        window.personalizedMarketingData.components =
            window.personalizedMarketingData.components || {};
        // FR
        let components =
            __OPTLY_STATE__.shared.getContentData().home.components;

        // optly:ampliance (to replace ampliance content to optly)
        let placement = {
            "031425_FR_HOMEPAGE_01": "031425_FR_HOMEPAGE_11",
            "031425_FR_HOMEPAGE_03": "031425_FR_HOMEPAGE_07",
            "031425_CA_HOMEPAGE_02": "022625_FR_HOMEPAGE_13",
            "031425_FR_HOMEPAGE_05": "031425_FR_HOMEPAGE_09",
            "031425_FR_HOMEPAGE_11": "031425_FR_HOMEPAGE_08",
            "031425_FR_HOMEPAGE_07": "031425_FR_HOMEPAGE_10",
            "022625_FR_HOMEPAGE_13": "031425_FR_HOMEPAGE_12",
            "031425_FR_HOMEPAGE_09": "031425_FR_HOMEPAGE_01",
            "031425_FR_HOMEPAGE_08": "031425_FR_HOMEPAGE_03",
            "031425_FR_HOMEPAGE_10": "031425_CA_HOMEPAGE_02",
            "031425_FR_HOMEPAGE_12": "031425_FR_HOMEPAGE_05",
        };
        components.forEach((c) => {
            // Keep it only if there is a cache issue
            if (c.video === undefined) {
                c.video = "";
                c.videoOverlay = "";
            }
            if (c.image === undefined) {
                c.image = c.video.link || "";
                c.imageOverlay = "";
            }
            if (placement[c.instanceName]) {
                window.personalizedMarketingData.components[
                    placement[c.instanceName]
                ] = {
                    content: c,
                };
            }
        });
    }
}
