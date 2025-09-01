
// --- App signals/state ---
import {Signal} from "./signal";

const topBarText = new Signal("Top Bar");
const leftBarText = new Signal("Left Bar");
const mainPanelText = new Signal("Main Panel (Canvas Below)");
const bottomBarText = new Signal("Bottom Bar");

// --- DOM update subscriptions ---
topBarText.subscribe(val => {
  const el = document.querySelector(".top-bar");
  if (el) el.textContent = val;
});

leftBarText.subscribe(val => {
  const el = document.querySelector(".left-bar");
  if (el) el.textContent = val;
});

mainPanelText.subscribe(val => {
  const el = document.querySelector(".main-panel");
  if (el) el.textContent = val;
});

bottomBarText.subscribe(val => {
  const el = document.querySelector(".bottom-bar");
  if (el) el.textContent = val;
});

// --- Example: clicking top bar changes main text ---
document.querySelector(".top-bar")?.addEventListener("click", () => {
  mainPanelText.set("Top Bar Clicked at " + new Date().toLocaleTimeString());
});

// --- Canvas example (optional, blank for now) ---
const canvas = document.getElementById("world-canvas") as HTMLCanvasElement | null;
if (canvas) {
  canvas.width = 400;
  canvas.height = 300;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#1976d2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "20px sans-serif";
    ctx.fillText("Canvas Ready", 50, 150);
  }
}