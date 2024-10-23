if (typeof gap.components !== "undefined" && gap.components == true) {
    window.personalizedMarketingData = window.personalizedMarketingData || {};
    window.personalizedMarketingData.components =
        window.personalizedMarketingData.components || {};

    // PD
    window.personalizedMarketingData.components["promoDrawer-en_US"] = {
        name: "PromoDrawerComponentV2",
        type: "sitewide",
        "sitewide-promodrawer-ciid": "US102124",
        instanceName: "promoDrawer-en_US",
        experimentRunning: true,
        data: {
            shouldWaitForOptimizely: true,
            buildInfo: ["18949643", "ON"],
            style: {
                height: "293px",
            },
            options: {
                desktopVisible: true,
                mobileVisible: true,
                excludePageTypes: [
                    "ShoppingBag",
                    "checkout",
                    "search",
                    "info",
                    "storeLocator",
                    "sign_in",
                    "order_history",
                    "order_detail",
                    "customer_value",
                    "account_summary",
                    "update_personal_info",
                    "address_book",
                    "express_account_settings",
                    "credit_card_summary",
                    "sizeChart",
                    "profile",
                    "Profile",
                    "LoyaltyValueCenter",
                    "utility",
                    "Information",
                ],
            },
            autoFire: "scroll",
            disabledAutoFirePageTypes: [
                "category",
                "product",
                "Profile",
                "home",
            ],
            promos: [
                {
                    bannerContent: {
                        name: "HTMLInjectionComponent",
                        isBannerClickable: false,
                        type: "sitewide",
                        data: {
                            html: '<style>\n.pd_image {\n  background-color: #fff; /* default */\n  color: #fff; /* default */\n  height: 100%;\n  position: relative;\n  width: 100%;\n  line-height: normal;\n}\n.pd_image img {\n  margin: 0 auto;\n  max-width: 100%;\n}\n.pd_image .pd_image--cta-container {\n  bottom: 4%;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 0 3%;\n  position: absolute;\n  width: 100%;\n}\n.pd_image .pd_image_button {\n  background-color: #fff;\n  box-sizing: border-box;\n  color: #122344;\n  font-size: 10px;\n  font-weight: 600;\n  min-height: 24px;\n  padding: 6px 8px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 48.5%;\n}\n.pd_image .pd_image_button:not(:first-child) {\n  margin-left: 3%;\n}\n</style>\n\n<a href="/browse/category.do?cid=85729&mlink=5151,1,PD_1" id="pd_atagwrap" class="pd_atag-wrapper">\n  <div class="pd_image">\n    <img id="PDImageTag" src="https://oldnavyprod.a.bigcontent.io/v1/static/241001_91M-M3796_TIMEBOUNDOLX14WOWJeansUpdated" alt="Today only! Starts at 12 PM/3 PM ET. Online exclusive, 10/21. $14 wow jeans for women. Women.">\n  </div>\n</a>\n',
                            style: {},
                            classes: "promoDrawer__content__item__banner",
                        },
                        id: "pd_tile1",
                    },
                    applicationDetails: {
                        type: "auto",
                        overlay: "Code will be applied at bag",
                        defaultMessage:
                            "discount automatically applied at checkout",
                        isTappedMessage: "applied at checkout",
                    },
                    legalDetails: {
                        popupTextLink: "DETAILS",
                        legalOverride:
                            "$14 Wow Jeans for Women: Offer valid on select women's merchandise only from 10/21/24 at 12:01 pm PT through 10/21/24 at 11:59 pm PT online at oldnavy.gap.com only. While supplies last. Excludes Clearance (merchandise ending in $.47, $.96 and $.97) & Maternity. Select styles only. Not valid on international purchases. Discount applies to merchandise only, not value of gift cards purchased, packaging, applicable taxes or shipping & handling charges. No adjustments on previous purchases. Not valid for cash or cash equivalent. Cannot be combined with other offers or discounts including Gap Inc. employee discount. Gap Inc. is not responsible for lost or stolen coupons. Discount applied at checkout.",
                        genericCodeId: "",
                        genericCode: "",
                    },
                    promoId: "m29iv4t8",
                },
                {
                    bannerContent: {
                        name: "HTMLInjectionComponent",
                        isBannerClickable: false,
                        type: "sitewide",
                        data: {
                            html: '<style>\n.pd_four-cta-m23lxg35 {\n  background-color: #fff; /* default */\n  color: #fff; /* default */\n  height: 100%;\n  position: relative;\n  width: 100%;\n  line-height: normal;\n}\n.pd_four-cta-m23lxg35 img {\n  margin: 0 auto;\n  max-width: 100%;\n}\n.pd_four-cta-m23lxg35 .pd_four-cta--cta-container {\n  bottom: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 0 3%;\n  position: absolute;\n  width: 100%;\n  width: 100%;\n  gap: 5px;\n  justify-content: space-around;\n}\n.pd_four-cta-m23lxg35 .pd_four-cta_button {\n  background-color: transparent;\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 0.625rem;\n  font-weight: 400;\n  min-height: 24px;\n  height: 24px;\n  padding: 5px 8px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 100%;\n  max-width: 142px;\n}\n\n@media only screen and (max-width: 767px) {\n  .pd_four-cta-m23lxg35 .pd_four-cta--cta-container {\n    gap: 3px;\n    bottom: 10px;\n  }\n  .pd_four-cta-m23lxg35 .pd_four-cta_button {\n    min-height: inherit;\n    height: inherit;\n    padding: 2px;\n    max-width: 110px;\n  }\n}\n\n</style>\n\n\n<div class="pd_four-cta-m23lxg35">\n  <a href="/browse/category.do?cid=1185233&mlink=5151,1,PD_2" id="pd_atagwrap" class="pd_atag-wrapper">\n    <img id="PDImageTag" src="https://oldnavyprod.a.bigcontent.io/v1/static/241020_58-M3623_Giftober_OLX50OffEverything_Site_PromoDrawer_1020_1USCA" alt="Online exclusive, ends 10/23. 50% off everything. Exclusions apply. ">\n  </a>\n  <div class="pd_four-cta--cta-container">\n    <a href="/browse/category.do?cid=1185233&mlink=5151,1,PD_2_a" class="pd_four-cta_button">Women</a>\n    <a href="/browse/category.do?cid=1031099&mlink=5151,1,PD_2_b" class="pd_four-cta_button">Men</a>\n    <a href="/browse/category.do?cid=1185229&mlink=5151,1,PD_2_c" class="pd_four-cta_button">Girls</a>\n    <a href="/browse/category.do?cid=1185232&mlink=5151,1,PD_2_d" class="pd_four-cta_button">Boys</a>\n  </div>\n</div>\n',
                            style: {},
                            classes: "promoDrawer__content__item__banner",
                        },
                        id: "pd_tile2",
                    },
                    applicationDetails: {
                        type: "auto",
                        overlay: "Code will be applied at bag",
                        defaultMessage: "price as marked",
                        isTappedMessage: "applied at checkout",
                    },
                    legalDetails: {
                        popupTextLink: "DETAILS",
                        legalOverride:
                            "50% Off Everything: Price as marked. Offer valid on Old Navy merchandise only from 10/20/24 at 12:00 am PT through 10/23/24 at 11:59 pm PT in the US (including Puerto Rico) at Old Navy online at oldnavy.gap.com. Not valid at Old Navy stores. Offer not valid on Gift Cards, Today Only Deals, 2 Days Only Deals, This Week Only Deals, and Clearance (merchandise ending in $.47, $.96 and $.97). While supplies last. No adjustments on previous purchases. Not valid on international purchases. Discount applies to merchandise only, not value of gift cards purchased, packaging, applicable taxes or shipping & handling charges. No adjustments on previous purchases. Not valid for cash or cash equivalent. Cannot be combined with other offers or discounts including Gap Inc. employee discount. Gap Inc. is not responsible for lost or stolen coupons.",
                        genericCodeId: "",
                        genericCode: "",
                    },
                    promoId: "m23lx7a6",
                },
                {
                    bannerContent: {
                        name: "HTMLInjectionComponent",
                        isBannerClickable: false,
                        type: "sitewide",
                        data: {
                            html: '<style>\n.pd_image {\n  background-color: #fff; /* default */\n  color: #fff; /* default */\n  height: 100%;\n  position: relative;\n  width: 100%;\n  line-height: normal;\n}\n.pd_image img {\n  margin: 0 auto;\n  max-width: 100%;\n}\n.pd_image .pd_image--cta-container {\n  bottom: 4%;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 0 3%;\n  position: absolute;\n  width: 100%;\n}\n.pd_image .pd_image_button {\n  background-color: #fff;\n  box-sizing: border-box;\n  color: #122344;\n  font-size: 10px;\n  font-weight: 600;\n  min-height: 24px;\n  padding: 6px 8px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 48.5%;\n}\n.pd_image .pd_image_button:not(:first-child) {\n  margin-left: 3%;\n}\n</style>\n\n<a href="/browse/category.do?cid=72808&mlink=5151,1,PD_3" id="pd_atagwrap" class="pd_atag-wrapper">\n  <div class="pd_image">\n    <img id="PDImageTag" src="https://oldnavyprod.a.bigcontent.io/v1/static/241001_80-M3579_MicroFleeceHalfZipPullover_Site_PromoDrawer_1018_1US" alt="This week only! In-store and online, ends 10/23. $23 fleece half zip. Women.">\n  </div>\n</a>\n',
                            style: {},
                            classes: "promoDrawer__content__item__banner",
                        },
                        id: "pd_tile3",
                    },
                    applicationDetails: {
                        type: "auto",
                        overlay: "Code will be applied at bag",
                        defaultMessage: "",
                        isTappedMessage: "applied at checkout",
                    },
                    legalDetails: {
                        popupTextLink: "DETAILS",
                        legalOverride:
                            "$23 Fleece Half Zip: Offer valid through 10/23/24 at Old Navy stores in the United States (including Puerto Rico) and at Old Navy online. Women’s styles only. Excludes Maternity. Select styles only. While supplies last. No adjustments on previous purchases. Cannot be combined with other offers or discounts, including Gap Inc. employee discount.",
                        genericCodeId: "",
                        genericCode: "",
                    },
                    promoId: "m22fc0j3",
                },
                {
                    bannerContent: {
                        name: "HTMLInjectionComponent",
                        isBannerClickable: false,
                        type: "sitewide",
                        data: {
                            html: '<style>\n.pd_image {\n  background-color: #fff; /* default */\n  color: #fff; /* default */\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n.pd_image img {\n  margin: 0 auto;\n  max-width: 100%;\n}\n.pd_image .pd_image--cta-container {\n  bottom: 4%;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 0 3%;\n  position: absolute;\n  width: 100%;\n}\n.pd_image .pd_image_button {\n  background-color: #fff;\n  box-sizing: border-box;\n  color: #122344;\n  font-size: 10px;\n  font-weight: 600;\n  min-height: 24px;\n  padding: 6px 8px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 48.5%;\n}\n.pd_image .pd_image_button:not(:first-child) {\n  margin-left: 3%;\n}\n</style>\n\n<a href="https://oldnavy.gap.com/my-account/sign-in?creditOffer=barclays&sitecode=ONPDDM&mlink=5151,1,PD_ONR_CARD_ACQ&retUrl=https://oldnavy.gap.com" id="pd_atagwrap" class="pd_atag-wrapper" target="_blank">\n  <div class="pd_image">\n    <img id="PDImageTag" src="https://oldnavyprod.a.bigcontent.io/v1/static/231101_NS-N3840_ONCAcq_Evergreen_Site_PD_2x" alt="Cardmember exclusive. Open and use a Navyist Rewards Credit Card and get an extra 30% off your first purchase. Apply Now.">\n  </div>\n</a>\n',
                            style: {},
                            classes: "promoDrawer__content__item__banner",
                        },
                        id: "pd_tile4",
                    },
                    applicationDetails: {
                        type: "auto",
                        overlay: "Code will be applied at bag",
                        defaultMessage: "",
                        isTappedMessage: "applied at checkout",
                    },
                    legalDetails: {
                        popupTextLink: "DETAILS",
                        legalOverride: "",
                        genericCodeId: "946857",
                        genericCode: "",
                    },
                    promoId: "l49104f8",
                },
                {
                    bannerContent: {
                        name: "HTMLInjectionComponent",
                        isBannerClickable: false,
                        type: "sitewide",
                        data: {
                            html: '<style>\n.pd_image {\n  background-color: #fff; /* default */\n  color: #fff; /* default */\n  height: 100%;\n  position: relative;\n  width: 100%;\n  line-height: normal;\n}\n.pd_image img {\n  margin: 0 auto;\n  max-width: 100%;\n}\n.pd_image .pd_image--cta-container {\n  bottom: 4%;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row nowrap;\n  padding: 0 3%;\n  position: absolute;\n  width: 100%;\n}\n.pd_image .pd_image_button {\n  background-color: #fff;\n  box-sizing: border-box;\n  color: #122344;\n  font-size: 10px;\n  font-weight: 600;\n  min-height: 24px;\n  padding: 6px 8px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 48.5%;\n}\n.pd_image .pd_image_button:not(:first-child) {\n  margin-left: 3%;\n}\n</style>\n\n<a href="/browse/info.do?cid=35433&mlink=5151,1,PD_5" id="pd_atagwrap" class="pd_atag-wrapper" target="_blank"  >\n  <div class="pd_image">\n    <img id="PDImageTag" src="https://oldnavyprod.a.bigcontent.io/v1/static/241001_92AU-M3831_CAM_XC10OffONGiftCardsCARD_Site_PD_1018_1US" alt="Cardmember exclusive. Cardmember month is on! 10% off old navy gift cards with your gap inc. credit card. Exclusions apply. Code TEN">\n  </div>\n</a>\n',
                            style: {},
                            classes: "promoDrawer__content__item__banner",
                        },
                        id: "pd_tile5",
                    },
                    applicationDetails: {
                        type: "tap",
                        overlay: "Code will be applied at bag",
                        defaultMessage: "tap to apply",
                        isTappedMessage: "applied at checkout",
                    },
                    legalDetails: {
                        popupTextLink: "DETAILS",
                        legalOverride: "",
                        genericCodeId: "1059477",
                        genericCode: "TEN",
                    },
                    promoId: "m22fc19y",
                },
            ],
            drawerToggle: {
                template: {
                    name: "LayoutComponent",
                    type: "sitewide",
                    data: {
                        desktopAndMobile: {
                            shouldDisplay: true,
                            data: {
                                components: [
                                    {
                                        name: "LayoutComponent",
                                        type: "sitewide",
                                        data: {
                                            desktopAndMobile: {
                                                shouldDisplay: true,
                                                data: {
                                                    components: [
                                                        {
                                                            name: "TextHeadline",
                                                            type: "sitewide",
                                                            data: {
                                                                className: {
                                                                    desktop:
                                                                        "promoDrawer__title",
                                                                    mobile: "promoDrawer__title",
                                                                },
                                                                text: "{--! headerText !--}",
                                                                style: {
                                                                    mobile: {
                                                                        fontSize:
                                                                            "0.6875em !important",
                                                                        lineHeight:
                                                                            "normal",
                                                                    },
                                                                    desktop: {
                                                                        fontSize:
                                                                            "0.75em !important",
                                                                        lineHeight:
                                                                            "normal",
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        {
                                                            name: "TextHeadline",
                                                            type: "sitewide",
                                                            data: {
                                                                className: {
                                                                    desktop:
                                                                        "promoDrawer__subtitle",
                                                                    mobile: "promoDrawer__subtitle",
                                                                },
                                                                text: "{--! subHeaderText !--}",
                                                                style: {
                                                                    mobile: {
                                                                        fontSize:
                                                                            "0.6875em !important",
                                                                        lineHeight:
                                                                            "normal",
                                                                    },
                                                                    desktop: {
                                                                        lineHeight:
                                                                            "normal",
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    ],
                                                    style: {
                                                        "flex-direction":
                                                            "column",
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    {
                                        name: "LayoutComponent",
                                        type: "sitewide",
                                        data: {
                                            desktopAndMobile: {
                                                shouldDisplay: true,
                                                data: {
                                                    components: [],
                                                    style: {
                                                        transitionDuration:
                                                            ".2s",
                                                        transitionTimingFunction:
                                                            "ease-out",
                                                    },
                                                    classes:
                                                        "promoDrawer__handlebar__icon",
                                                },
                                            },
                                        },
                                    },
                                ],
                                style: {},
                            },
                        },
                    },
                },
                openedState: {
                    headerText: "my offers",
                    subHeaderText: "(5 available)",
                    iconAltText: "Open icon",
                },
                closedState: {
                    headerText: "today only! $14 wow jeans",
                    subHeaderText: "tap for more ways to save",
                    iconAltText: "Closed icon",
                },
                "aria-label": "today only! $14 wow jeans",
            },
            pd_id: "pdid_m28zfaxw",
        },
    };
}
