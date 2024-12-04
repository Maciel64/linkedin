import pastData from "./1. I/data.json" assert { type: "json" };
import data from "./data.json" assert { type: "json" };
import fileSytem from "node:fs";


/* 
  A estrutura de data e pastData é:

  [{ name, uuid, address: { line_1, line_2 }} ..., {}...]

  Sendo que esse array tem mais de 200 posições e cada objeto tem mais uns 15 campos além desses.
*/

// Definitions

const path = "out/filtered.csv";

const errorFunc = (error) => console.log(error ?? "Finalizado.");


// Helpers

const mapFunc = ({ name, address: { line_1, line_2 }, uuid }) => 
    ({ name, line_1, line_2, uuid })

const filterFunc = (item) =>
  pastData.every((pastItem) => pastItem.uuid !== item.uuid);

const sortFunc = (field) => (a, b) => a[field] > b[field] ? 1 : -1;

const reduceFunc = (acc, { name, line_1, line_2 }) => 
    (acc += `${name}\t${uuid}\t${line_1}\t${line_2}\n`);


// Main

const dataResult = data
  .map(mapFunc)
  .filter(filterFunc)
  .sort(sortFunc("line_1"))
  .reduce(reduceFunc, "");

fileSytem.writeFile(path, dataResult, errorFunc);