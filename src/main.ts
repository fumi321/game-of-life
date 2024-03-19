import { render, Status, randomizeMap, computeNextGeneration } from "./life.ts";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d")!;

const size = 64;
let map: Status[][] = new Array(size)
  .fill(Status.Alive)
  .map(() => new Array(size).fill(Status.Dead));

randomizeMap(map);

render(context, map);

setInterval(() => {
  map = computeNextGeneration(map);
  render(context, map);
}, 1000);

console.table(map);
