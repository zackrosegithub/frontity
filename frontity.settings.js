const settings = {
  "name": "wpcamp-demo",
  "state": {
    "frontity": {
      "url": "https://activegear.club/",
      "title": "Zack's Test",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/bootstrap-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://activegear.club/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
