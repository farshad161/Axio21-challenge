import { existsSync, createReadStream } from "fs";
import { parse } from "csv-parse";
import { rotate } from "./app";

const createCsv = (content: string[]) => {
  const output: any = ["id,json,is_valid"];
  content.forEach((row) => {
    const [id, targetArray] = row;

    const rotatedArray = rotate(JSON.parse(targetArray));
    const outputRow = [
      id,
      JSON.stringify(rotatedArray),
      Boolean(rotatedArray.length),
    ].join(",");
    output.push(outputRow);
  });

  return output.join("\n");
};
process.argv.forEach(async (arg, index) => {
  if (index === 2) {
    const file = arg;
    if (!existsSync(file)) {
      throw new Error("file does not exist");
    }

    try {
      const csvContent: Array<string> = await new Promise((resolv, reject) => {
        const content: string[] = [];
        createReadStream(file)
          .pipe(parse({ delimiter: ",", fromLine: 2 }))
          .on("data", function (row) {
            content.push(row);
          })
          .on("end", function () {
            resolv(content);
          })
          .on("error", function (error) {
            reject(error.message);
          });
      });

      const output = createCsv(csvContent);
      console.log(output);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
});
