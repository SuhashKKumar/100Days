if (typeof gap.components !== "undefined" && gap.components == true) {

  window.personalizedMarketingData = window.personalizedMarketingData || {};
  window.personalizedMarketingData.components = window.personalizedMarketingData.components || {};

  // FH
  window.personalizedMarketingData.components["react-flexHeadline-032525-us"] = {
    "type": "sitewide",
    "name": "FlexHeadline",
    "experimentRunning": true,
    "instanceName": "react-flexHeadline-032525-us",
    "data": {
      "shouldWaitForOptimizely": true,
      "includePageTypes": [
        "ShoppingBag"
      ],
      "lazy": false,
      "placeholderSettings": {
        "useGreyLoadingEffect": false,
        "desktop": {
          "backgroundColor": "transparent",
          "width": "0px",
          "height": "0px",
          "margin": "0px auto"

        },
        "mobile": {
          "width": "0px",
          "height": "0px"

        }
      },
      "defaultHeight": {
        "large": "0px",
        "small": "0px"
      },
      "styles": {
        "root": {
          "base": {
            "backgroundColor": "#eeeeee",
            "justifyContent": "center",
            "textAlign": "center"
          },
          "desktop": {
            "padding": "15px 5%",
            "position": "relative",
            "flexWrap": "wrap"

          },
          "mobile": {
            "backgroundColor": "#fff",
            "padding": ".5em 1%",
            "flexDirection": "row",
            "flexWrap": "wrap",
            "width": "100%",
            "maxWidth": "414px",
            "margin": "auto",
            "line-height": "1em"
          }
        },
        "flexItemElement": {
          "base": {
            "color": "#003764",
            "paddingRight": "5px"
          },
          "mobile": {
            "fontSize": "0.75em"
          },
          "desktop": {
            "fontSize": "14px"
          }
        }
      },
      "flexItems": [
        {
          "elements": [
            {
              "text": "In-store & Online"
            },
            {
              "text": "Cardmember Exclusive"
            }
          ]
        },
        {
          "elements": [
            {
              "text": "Extra $15 Off $75+ or $20 Off $100+",
              "style": {
                "base": {
                  "fontWeight": "bold",
                  "textTransform": "uppercase"
                }
              }
            }
          ]
        },
        {
          "elements": [
            {"text": "use code"},
            {
              "text": "BONUS",
              "style": {
                "base": {
                  "fontWeight": "bold",
                  "textTransform": "uppercase"
                }
              }
            },
            {
              "text": "ends 6/2",
              "style": {
                "base": {
                  "textTransform": "uppercase"
                }
              }
            },
            {
              "text": "details",
              "modalProps": {
                "src": "/Asset_Archive/AllBrands/promoAPI/promo_lookup_details.html?promoId=1102577",
                "closeButtonAriaLabel": "close modal",
                "height": "400px"
              },
              "style": {
                "base": {
                  "textDecoration": "underline"
                }
              }
            }
          ]
        }
      ]
    }
  }
}
