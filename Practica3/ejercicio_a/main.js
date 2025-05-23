import { restar } from "./utils.js";

const operaciones = [
    [20, 5],
    [10, 10],
    [3, 10],
    [0, 0],
    [13, 15],
    [20, 25],
];

operaciones.forEach(([a, b]) => console.log(restar(a, b)));