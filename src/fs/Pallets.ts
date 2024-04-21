import { BaseDirectory, exists, readDir, readTextFile, writeFile, writeTextFile } from "@tauri-apps/api/fs";
import { dirExists } from "src/Files";
import { fs } from "@tauri-apps/api";

export default class {
    static async search() {
        if (await dirExists("pallets")) {
            return await readDir("pallets", {
                dir: BaseDirectory.Resource,
                recursive: true
            });
        } else {
            return [];
        }
    }

    static async compile() {
        const paths = await this.search();

        function fixEnd(t: string) {
            return t.replace("\r", "").replace("\n", "");
        }

        paths.forEach(async (p) => {
            const file = await readTextFile(p.path);
            const color_json = file.split("$")[3].split("=")[1].trim().split("   ");
            const color_bg = color_json[1];
            const color_text = color_json[2].replace("}", "");
            
            let compiled = {
                version: fixEnd(file.split("$")[1].split(":").reverse()[0]).trim(),
                name: fixEnd(file.split("$")[2].split(":").reverse()[0]).trim(),
                color: {
                    background: fixEnd(color_bg.split(" ")[2]),
                    text: fixEnd(color_text.split(" ")[2])
                }
            };

            if (!(await dirExists(`pallets/${p.path.replace(".pallet", ".json")}`))) {
                await writeFile(`pallets/${p.path.replace(".pallet", ".json")}`, JSON.stringify(compiled), {
                    dir: BaseDirectory.Resource
                });
            }
        });
    }
}