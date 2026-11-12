
window.onload = function () {
 const layers = [
  "pared-1",
  "pared-2",
  "piso"
];
  window.mapper = new Maptastic({
    autoLoad: false,
    autoSave: true,
    layers: layers
  });
  let editing = false;
  window.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.code === "Space") {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (event.repeat) return;
      editing = !editing;
      window.mapper.setConfigEnabled(editing);
    }
  }, true);
};
