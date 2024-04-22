import { BaseDirectory, createDir, exists, readDir, readTextFile } from "@tauri-apps/api/fs";

export async function dirExists(directory: string) {
    return await exists(directory, { dir: BaseDirectory.Resource });
}

export async function createDirIfNotExists(name: string) {
    if (!await exists(name, { dir: BaseDirectory.AppLocalData })) {
        await createDir(name, { dir: BaseDirectory.AppLocalData, recursive: true });
    }
}