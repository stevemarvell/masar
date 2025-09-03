const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement | null;

if (!canvas) {
  throw new Error("Canvas element #mainCanvas not found");
}

const ctx = canvas.getContext("2d");
if (!ctx) {
  throw new Error("2D rendering context not available");
}

function resizeCanvas(): void {
  const dpr: number = Math.max(1, window.devicePixelRatio || 1);

  // DOMRect: always safe on HTMLCanvasElement
  const rect: DOMRect = canvas.getBoundingClientRect();

  // Backing store size in device pixels
  canvas.width = Math.max(1, Math.round(rect.width * dpr));
  canvas.height = Math.max(1, Math.round(rect.height * dpr));

  // Ensure drawing is scaled to CSS pixels
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  draw();
}

function draw(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "16px system-ui, -apple-system, Segoe UI, Roboto, Arial";
  ctx.fillText("Canvas ready", 16, 28);
}

// Respond to resizes
window.addEventListener("resize", resizeCanvas);

// Respond to container size changes
new ResizeObserver(() => resizeCanvas()).observe(canvas.parentElement!);

// Initial sizing
resizeCanvas();
