if (typeof gap.components !== "undefined" && gap.components == true) {

    window.personalizedMarketingData = window.personalizedMarketingData || {};
    window.personalizedMarketingData.components = window.personalizedMarketingData.components || {};

    // PD
    window.personalizedMarketingData.components[
        "promoDrawer-en_US"
    ] = {
        "name": "PromoDrawerComponentV2",
        "type": "sitewide",
        "sitewide-promodrawer-ciid": "US121224",
        "instanceName": "promoDrawer-en_US",
        "experimentRunning": true,
        "data": {
            "shouldWaitForOptimizely": true,
            "buildInfo": [
                "18949643",
                "ON"
            ],
            "style": {
                "height": "293px"
            },
            "options": {
                "desktopVisible": true,
                "mobileVisible": true,
                "excludePageTypes": [
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
                    "utility"
                ]
            },
            "autoFire": "scroll",
            "disabledAutoFirePageTypes": [
                "category",
                "product",
                "Profile",
                "home"
            ],
            "promos": [
                {
                    "bannerContent": {
                        "name": "HTMLInjectionComponent",
                        "isBannerClickable": false,
                        "type": "sitewide",
                        "data": {
                            "html": "<style>\n.pd_two-cta-m4ddkgdc {\n  background-color: #fff; /* default */\n  color: #fff; /* default */\n  height: 100%;\n  position: relative;\n  width: 100%;\n  line-height: normal;\n}\n.pd_two-cta-m4ddkgdc img {\n  margin: 0 auto;\n  max-width: 100%;\n}\n.pd_two-cta-m4ddkgdc .pd_two-cta--cta-container {\n  bottom: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 0 3%;\n  position: absolute;\n  width: 100%;\n  width: 100%;\n  gap: 5px;\n  justify-content: space-around;\n}\n.pd_two-cta-m4ddkgdc .pd_two-cta_button {\n  background-color: transparent;\n  box-sizing: border-box;\n  border: 1px solid #fff;\n  color: #fff;\n  font-size: 0.625rem;\n  font-weight: 400;\n  min-height: 24px;\n  height: 24px;\n  padding: 5px 8px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 100%;\n  max-width: 142px;\n}\n@media only screen and (max-width: 767px) {\n  .pd_two-cta-m4ddkgdc .pd_two-cta--cta-container {\n    gap: 3px;\n    bottom: 10px;\n  }\n  .pd_two-cta-m4ddkgdc .pd_two-cta_button {\n    min-height: inherit;\n    height: inherit;\n    padding: 2px;\n    max-width: 110px;\n  }\n}\n</style>\n\n\n<div class=\"pd_two-cta-m4ddkgdc\">\n  <a href=\"/stores?mlink=5151,1,PD_1\" id=\"pd_atagwrap\" class=\"pd_atag-wrapper\" target=\"_blank\"  >\n    <img id=\"PDImageTag\" src=\"https://oldnavyprod.a.bigcontent.io/v1/static/241201_87P-M4157_STOREONLY50OffSweatshirtsHoodies_2DO_Site_PD_US\" alt=\"2 days only! In-store exclusive, ends 12/22. 50% off sweatshirts, hoodies & sweatpants for the fam.\">\n  </a>\n  <div class=\"pd_two-cta--cta-container\">\n    <a href=\"/stores?mlink=5151,1,PD_1_a\" class=\"pd_two-cta_button\" target=\"_blank\"  >find a store</a>\n    <a href=\"/browse/women/sweatshirts-and-sweatpants?cid=72808&mlink=5151,1,PD_1_b\" class=\"pd_two-cta_button\">sneak a peek</a>\n  </div>\n</div>",
                            "style": {},
                            "classes": "promoDrawer__content__item__banner"
                        },
                        "id": "pd_tile1"
                    },
                    "applicationDetails": {
                        "type": "auto",
                        "overlay": "Code will be applied at bag",
                        "defaultMessage": "",
                        "isTappedMessage": "applied at checkout"
                    },
                    "legalDetails": {
                        "popupTextLink": "DETAILS",
                        "legalOverride": "50% Off Sweatshirts, Hoodies & Sweatpants for the Family: Offer valid 12/21/24-12/22/24 at Old Navy stores in the United States (including Puerto Rico) only. Offer not valid at Old Navy online. Excludes Clearance (merchandise ending in $.47, $.96 and $.97), Active, Licensed & Maternity. Select styles only. While supplies last. No adjustments on previous purchases. Cannot be combined with other offers or discounts, including Gap Inc. employee discount.",
                        "genericCodeId": "",
                        "genericCode": ""
                    },
                    "promoId": "m4ddjyvf"
                },
                {
                    "bannerContent": {
                        "name": "HTMLInjectionComponent",
                        "isBannerClickable": false,
                        "type": "sitewide",
                        "data": {
                            "html": "<style>\n.pd_four-cta-lr9macc8 {\n  background-color: #fff; /* default */\n  color: #fff; /* default */\n  height: 100%;\n  position: relative;\n  width: 100%;\n}\n.pd_four-cta-lr9macc8 img {\n  margin: 0 auto;\n  max-width: 100%;\n}\n.pd_four-cta-lr9macc8 .pd_four-cta--cta-container {\n  bottom: 10px;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 0 3%;\n  position: absolute;\n  width: 100%;\n  width: 100%;\n  gap: 5px;\n  justify-content: space-around;\n}\n.pd_four-cta-lr9macc8 .pd_four-cta_button {\n  background-color: transparent;\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 0.625rem;\n  font-weight: 400;\n  min-height: 24px;\n  height: 24px;\n  padding: 5px 8px;\n  text-align: center;\n  text-transform: uppercase;\n  width: 100%;\n  max-width: 142px;\n}\n\n@media only screen and (max-width: 767px) {\n  .pd_four-cta-lr9macc8 .pd_four-cta--cta-container {\n    gap: 3px;\n    bottom: 10px;\n  }\n  .pd_four-cta-lr9macc8 .pd_four-cta_button {\n    min-height: inherit;\n    height: inherit;\n    padding: 2px;\n    max-width: 110px;\n  }\n}\n\n</style>\n\n\n<div class=\"pd_four-cta-lr9macc8\">\n  <a href=\"/browse/women/clearance?cid=96964&mlink=5151,1,PD_2\" id=\"pd_atagwrap\" class=\"pd_atag-wrapper\">\n    <img id=\"PDImageTag\" src=\"https://oldnavyprod.a.bigcontent.io/v1/static/231101_NS-N3851_GenericClearance_Evergreen_Site_PD_USCA_2x\" alt=\"Clearance\">\n  </a>\n  <div class=\"pd_four-cta--cta-container\">\n    <a href=\"/browse/women/clearance?cid=96964&mlink=5151,1,PD_2_a\" class=\"pd_four-cta_button\">Women</a>\n    <a href=\"/browse/men/clearance?cid=97035&mlink=5151,1,PD_2_b\" class=\"pd_four-cta_button\">Men</a>\n    <a href=\"/browse/girls/clearance?cid=96906&mlink=5151,1,PD_2_c\" class=\"pd_four-cta_button\">Girls</a>\n    <a href=\"/browse/boys/clearance?cid=96945&mlink=5151,1,PD_2_d\" class=\"pd_four-cta_button\">Boys</a>\n  </div>\n</div>\n",
                            "style": {},
                            "classes": "promoDrawer__content__item__banner"
                        },
                        "id": "pd_tile2"
                    },
                    "applicationDetails": {
                        "type": "auto",
                        "overlay": "Code will be applied at bag",
                        "defaultMessage": "",
                        "isTappedMessage": "applied at checkout"
                    },
                    "legalDetails": {
                        "popupTextLink": "",
                        "legalOverride": "",
                        "genericCodeId": "",
                        "genericCode": ""
                    },
                    "promoId": "lp0crcuu"
                }
            ],
            "drawerToggle": {
                "template": {
                    "name": "LayoutComponent",
                    "type": "sitewide",
                    "data": {
                        "desktopAndMobile": {
                            "shouldDisplay": true,
                            "data": {
                                "components": [
                                    {
                                        "name": "LayoutComponent",
                                        "type": "sitewide",
                                        "data": {
                                            "desktopAndMobile": {
                                                "shouldDisplay": true,
                                                "data": {
                                                    "components": [
                                                        {
                                                            "name": "TextHeadline",
                                                            "type": "sitewide",
                                                            "data": {
                                                                "className": {
                                                                    "desktop": "promoDrawer__title",
                                                                    "mobile": "promoDrawer__title"
                                                                },
                                                                "text": "{--! headerText !--}",
                                                                "style": {
                                                                    "mobile": {
                                                                        "fontSize": "0.6875em !important",
                                                                        "lineHeight": "normal"
                                                                    },
                                                                    "desktop": {
                                                                        "fontSize": "0.75em !important",
                                                                        "lineHeight": "normal"
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        {
                                                            "name": "TextHeadline",
                                                            "type": "sitewide",
                                                            "data": {
                                                                "className": {
                                                                    "desktop": "promoDrawer__subtitle",
                                                                    "mobile": "promoDrawer__subtitle"
                                                                },
                                                                "text": "{--! subHeaderText !--}",
                                                                "style": {
                                                                    "mobile": {
                                                                        "fontSize": "0.6875em !important",
                                                                        "lineHeight": "normal"
                                                                    },
                                                                    "desktop": {
                                                                        "lineHeight": "normal"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "style": {
                                                        "flex-direction": "column"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        "name": "LayoutComponent",
                                        "type": "sitewide",
                                        "data": {
                                            "desktopAndMobile": {
                                                "shouldDisplay": true,
                                                "data": {
                                                    "components": [],
                                                    "style": {
                                                        "transitionDuration": ".2s",
                                                        "transitionTimingFunction": "ease-out"
                                                    },
                                                    "classes": "promoDrawer__handlebar__icon"
                                                }
                                            }
                                        }
                                    }
                                ],
                                "style": {}
                            }
                        }
                    }
                },
                "openedState": {
                    "headerText": "my offers",
                    "subHeaderText": "(2 available)",
                    "iconAltText": "Open icon"
                },
                "closedState": {
                    "headerText": "2 days only, in-store exclusive! 50% off sweatshirts, hoodies & sweatpants",
                    "subHeaderText": "tap for more ways to save",
                    "iconAltText": "Closed icon"
                },
                "aria-label": "2 days only, in-store exclusive! 50% off sweatshirts, hoodies & sweatpants"
            },
            "pd_id": "pdid_m43a2xvt"
        }
    }
}
