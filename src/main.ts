document.addEventListener("DOMContentLoaded", function () {
  const leftBar = document.getElementById("left-bar");
  const collapseBtn = document.getElementById("collapse-left-btn");
  let collapsed = false;

  function setCollapsed(state) {
    if (leftBar) {
      leftBar.classList.toggle("collapsed", state);
    }
  }

  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      collapsed = !collapsed;
      setCollapsed(collapsed);
    });
  }

  // Canvas fix: explicitly type/cast before using getContext!
  const canvas = document.getElementById("world-canvas");
  if (canvas && 'getContext' in canvas) {
    // @ts-ignore (if you ever see a warning in .js)
    const ctx = /** @type {HTMLCanvasElement} */ (canvas).getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#03396c";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "bold 34px Segoe UI, Arial, sans-serif";
      ctx.fillStyle = "#a7c7e7";
      ctx.textBaseline = "middle";
      ctx.fillText("MASAR World", 60, canvas.height / 2);
    }
  }
});
