let controller = {
  initialLoad: function() {
    let loadingVeil, body;
    loadingVeil = document.getElementById("loadingVeil");
    body = document.getElementById("body");
    view.toggleClass(body, "overflow-hidden");
    setTimeout(function() {
      view.hide(loadingVeil);
      view.toggleClass(body, "overflow-hidden");
    }, 2000);
  },
  menuTapClick: function() {
    let header, menu, menuPaddingTop, main, body;
    header = document.getElementById("header");
    menu = document.getElementById("menu");
    menuPaddingTop = model.returnTotalHeight(header);
    main = document.getElementById("main");
    view.changePaddingTop(menu, menuPaddingTop);
    controller.toggleMenuSwitch();
    //view.toggleClass(main, "overflow-hidden");
    //Shit's complicated
    if (main.classList.contains("main-fade") == false) {
      view.removeClass(main, "main-fade-fast");
      view.removeClass(menu, "main-fade-slow");
      view.removeClass(main, "menu-open-fast");
      view.removeClass(menu, "menu-open-slow");
      view.addClass(main, "main-fade-fast");
      view.addClass(menu, "menu-open-slow");
      controller.toggleMain(main, "main-fade");
      //view.toggleClass(main, "height-0vh");
      controller.toggleMenu(menu, "menu-open");
    } else {
      view.removeClass(main, "main-fade-fast");
      view.removeClass(menu, "main-fade-slow");
      view.removeClass(main, "menu-open-fast");
      view.removeClass(menu, "menu-open-slow");
      view.addClass(main, "main-fade-slow");
      view.addClass(menu, "menu-open-fast");
      controller.toggleMenu();
      //view.toggleClass(main, "height-0vh");
      controller.toggleMain();
    }
  },
  closeMeTapClick: function(closeme, project) {
    view.toggleClass(closeme, "close-me-closed")
  },
  toggleMenuSwitch: function() {
    let menuSwitch, className;
    menuSwitch = document.getElementById("menuSwitch");
    view.toggleClass(menuSwitch, "menu-switch-open");
  },
  toggleMenu: function() {
    let menu, className;
    menu = document.getElementById("menu");
    view.toggleClass(menu, "menu-open");
  },
  toggleMain: function() {
    let main, className;
    main = document.getElementById("main");
    view.toggleClass(main, "main-fade")
  },
  openOverlay: function(target) {
    target = document.getElementById(target);
    view.removeClass(target, "z-index-0");
    view.addClass(target, "z-index-3");
    view.removeClass(target, "opacity-0");
  },
  hideProjectOverlay: function(overlay) {
    let target = document.getElementById(overlay);
    view.removeClass(target, "z-index-3");
    view.addClass(target, "z-index-0");
    view.removeClass(target, "opacity-1");
    view.addClass(target, "opacity-0");
  }
};
let model = {
  returnTotalHeight: function(element) {
    let contentPaddingBorderHeight, marginTopHeight, marginTopHeightPX, marginBottomHeight, marginBottomHeightPX, returnHeight;
    contentPaddingBorderHeight = element.offsetHeight;
    marginTopHeightPX = window.getComputedStyle(element).marginTop;
    marginTopHeight = parseFloat(marginTopHeightPX.substring(0, marginTopHeightPX.length - 2));
    marginBottomHeightPX = window.getComputedStyle(element).marginTop;
    marginBottomHeight = parseFloat(marginBottomHeightPX.substring(0, marginBottomHeightPX.length - 2));
    returnHeight = contentPaddingBorderHeight + marginTopHeight + marginBottomHeight;
    return returnHeight;
  }
};
let view = {
  toggleClass: function(target, className) {
    target.classList.toggle(className);
    console.log("I toggled " + className);
  },
  removeClass: function(target, className) {
    target.classList.remove(className);
  },
  addClass: function(target, className) {
    target.classList.add(className);
    console.log("I added " + className);
  },
  hide: function(element) {
    element.classList.add("display-none");
  },
  changePaddingTop: function(target, paddingTop) {
    console.log(target);
    console.log(paddingTop);
    target.style.paddingTop = paddingTop + "px";
  },
  changeOverflow: function(target, overflow) {
    target.style.overflow = overflow;
  },
  fadeOutOverlay: function(overlay) {
    overlay.classList.add("project-overlay-fade-out");
  }
};
