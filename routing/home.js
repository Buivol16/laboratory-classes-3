const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("index", {
    headTitle: "Home",
    menuLinks: require("../constants/navigation").MENU_LINKS,
    activeLinkPath: "/",
    path: "/"
  });
});

module.exports = router;
