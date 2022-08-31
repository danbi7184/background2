Module.register("background2", {
    defaults: {
    },

    getStyles: function() {
        return ["background2.css"]
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        var img = document.createElement("img");
        img.src = "modules/background2/photo2.jpg";
        wrapper.appendChild(img);
        return wrapper;
    },
})