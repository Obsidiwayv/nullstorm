import { fs, invoke } from "@tauri-apps/api";

export default class {
    public static async get() {
        const json = await this.existsFile();
        const return_list: ProfileManifest[] = [];

        if (typeof json === "object") {
            for (const profile of Object.keys(json.profiles)) {
                return_list.push(json.profiles[profile]);
            }
        }

        return return_list;
    }

    /**
     * returns a profile object or boolean if it doesn't exist
     */
    public static async existsFile(): Promise<boolean | ProfileManifestObject> {
        try {
            const json = await invoke("get_profiles");
            return JSON.parse(json as string);
        } catch (err) {
            return false;
        }
    }
}