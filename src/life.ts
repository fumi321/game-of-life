enum Status {
  Dead,
  Alive,
}

const size = 64;

export let map: Status[][] = new Array(size)
  .fill(Status.Alive)
  .map(() => new Array(size).fill(Status.Dead));

map[32][32] = Status.Alive;

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
