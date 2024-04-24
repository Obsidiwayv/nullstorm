import banner from "../assets/villager.jpg";

export function getVersionBanner() {
    return banner;
}

export function isSnapshot(content: string | ProfileManifest) {
    return ((typeof content === "object") ? content.type : content).endsWith("-snapshot");
}