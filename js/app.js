(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const actionOfferText = document.querySelector(".action-offer__text");
    if (actionOfferText) if (window.innerWidth < 930) actionOfferText.innerHTML = `Получи <span>спецпредложение</span> у куратора после регистрации`;
    const includesBlockImages = document.querySelectorAll(".includes__item > img");
    if (includesBlockImages) if (window.innerWidth < 480) includesBlockImages.forEach((element => {
        element.src = "img/icon-white.svg";
    }));
    let now = new Date;
    let time = `${now.getHours()}:${now.getMinutes()}`;
    const heroBanner = document.querySelector(".hero__banner");
    if (heroBanner) {
        if (time >= "18:00" && time < "18:20") {
            document.documentElement.classList.add("mode-1");
            heroBanner.innerHTML = `\n    <div class="hero__video">\n      <iframe\n        src="https://www.youtube.com/embed/wVkD89V1-BQ?si=xjKBOZE4MfqE8Q9X"\n        title="YouTube video player"\n        frameborder="0"\n        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n        allowfullscreen\n      ></iframe>\n    </div>`;
        }
        if (time >= "18:20" && time < "21:00") heroBanner.innerHTML = `\n    <div class="hero__video">\n      <iframe\n        src="https://www.youtube.com/embed/wVkD89V1-BQ?si=xjKBOZE4MfqE8Q9X"\n        title="YouTube video player"\n        frameborder="0"\n        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n        allowfullscreen\n      ></iframe>\n    </div>`;
        if (time >= "21:00" && time < "23:59" || time >= "00:00" && time < "18:00") document.documentElement.classList.add("mode-1");
    }
    window["FLS"] = true;
    isWebp();
})();