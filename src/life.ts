enum Status {
  Dead,
  Alive,
}

const size = 64;

export let map: Status[][] = new Array(size)
  .fill(Status.Alive)
  .map(() => new Array(size).fill(Status.Dead));

export function render(context: CanvasRenderingContext2D) {
  const size = window.innerHeight / map.length;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == Status.Alive) {
        context.fillStyle = "green";
        context.fillRect(i * size, j * size, size, size);
      }
    }
  }
}

export function randomizeMap(map: Status[][]) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      map[i][j] = Math.round(Math.random());
    }
  }
}

function doesCollideWalls(map: any[][], x: number, y: number): boolean {
  if (x < 0 || x > map.length || y < 0 || y > map[0].length) return true;
  return false;
}

function countNeighbors(map: Status[][], x: number, y: number): number {
  let count = 0;
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (doesCollideWalls(map, x, y)) continue;
      if (map[i][j] == Status.Alive) {
        count++;
      }
    }
  }
  if (map[y][x] == Status.Alive) {
    count--;
  }
  return count;
}
