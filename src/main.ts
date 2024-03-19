import { render, Status, randomizeMap, computeNextGeneration } from "./life.ts";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d")!;

const size = 64;
let map: Status[][] = new Array(size).fill([]).map(() => new Array(size).fill(Status.Dead));

randomizeMap(map);

setInterval(() => {
  render(context, map);
  map = computeNextGeneration(map);
}, 100);
