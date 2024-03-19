import { render, Status, randomizeMap, computeNextGeneration } from "./life.ts";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d")!;

const size = 64;
let map: Status[][] = new Array(size).fill([]).map(() => new Array(size).fill(Status.Dead));

map[30][30] = Status.Alive;
map[30][31] = Status.Alive;
map[30][32] = Status.Alive;
map[31][32] = Status.Alive;
map[32][31] = Status.Alive;

setInterval(() => {
  render(context, map);
  map = computeNextGeneration(map);
}, 100);
