export enum Status {
  Dead,
  Alive,
}

export function render(context: CanvasRenderingContext2D, map: Status[][]) {
  const size = Math.round(window.innerHeight / map.length);
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == Status.Alive) {
        context.fillStyle = "green";
        context.fillRect(i * size, j * size, size, size);
      } else if (map[i][j] == Status.Dead) {
        context.fillStyle = "white";
        context.fillRect(i * size, j * size, size, size);
      }
    }
  }
}

export function randomizeMap(map: Status[][]) {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      let status = (): Status => {
        if (Math.round(Math.random()) == 1) {
          return Status.Alive;
        } else {
          return Status.Dead;
        }
      };
      map[i][j] = status();
    }
  }
}

function doesCollideWalls(map: any[][], x: number, y: number): boolean {
  if (x < 0 || x >= map.length || y < 0 || y >= map[0].length) return true;
  return false;
}

function countNeighbors(map: Status[][], x: number, y: number): number {
  let count = 0;
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      if (doesCollideWalls(map, j, i)) {
        continue;
      }
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

export function computeNextGeneration(map: Status[][]) {
  let next: Status[][] = structuredClone(map);
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      const alive = countNeighbors(map, j, i);
      if (map[i][j] == Status.Alive) {
        if (alive == 2 || alive == 3) {
          next[i][j] = Status.Alive;
        } else {
          next[i][j] = Status.Dead;
        }
      } else {
        if (alive == 3) {
          next[i][j] = Status.Alive;
        } else {
          next[i][j] = Status.Dead;
        }
      }
    }
  }
  return next;
}
