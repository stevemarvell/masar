document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("world-canvas") as HTMLCanvasElement | null;
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = "#03396c";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold 34px Segoe UI, Arial, sans-serif";
  ctx.fillStyle = "#a7c7e7";
  ctx.textBaseline = "middle";
  ctx.fillText("MASAR World", 60, canvas.height / 2);
});
