"use strict";

import { HeaderLogin } from "./header-login.js";
import { HeaderSearch } from "./header-search.js";
import { Data } from "./data.js";
import { Databaze } from "./databaze.js";
import { UserHandler } from "./user-handler.js";

document.addEventListener("DOMContentLoaded", function () {
  const headerLogin = new HeaderLogin();
  const headerSearch = new HeaderSearch();
  const data = new Data();
  const databaze = new Databaze();
  const userHandler = new UserHandler();
  const pathname = window.location.pathname;

  headerLogin._insertLogin();

  if (pathname === "/pc.html") {
    data._insertDataPc();
  } else if (pathname === "/tablet.html") {
    data._insertDataTablet();
  } else if (pathname === "/mobil.html") {
    data._insertDataPhone();
  }
  if (window.location.pathname === "/logged-user.html") {
    databaze._getLocalStorage();
    const loggedUser = databaze._evidence.find((user) => user._logged === true);
    headerLogin._insertUserInfo(loggedUser);
  }

  data._cartDataProgress();
  headerLogin._getTime();
  headerLogin._checkLoggedStatus();
});
