import { BaseDirectory, exists, readDir, readTextFile } from "@tauri-apps/api/fs";
import { resourceDir } from "@tauri-apps/api/path";

export async function dirExists(directory: string) {
    return await exists(directory, { dir: BaseDirectory.Resource });
}