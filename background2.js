Module.register("background2", {
    defaults: {
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        var img = document.createElement("img");
        img.src = "modules/background/photo2.jpg";
        wrapper.appendChild(img);
        return wrapper;
    },
})