import { render, map, randomizeMap } from "./life.ts";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d")!;
randomizeMap(map);

render(context);

console.table(map);
