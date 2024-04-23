type ProfileManifest = {
    name: string,
    lastVersionId: string,
    resolution: {
        width: number,
        height: number,
        fullscreen: boolean
    },
    type: string,
    created: string,
    lastUsed: string
}

type PalletFileMetadata = {
    version: string;
    name: string;
    color: {
        background: string;
        text: string;
    };
}

type LauncherEvents = {
    profile: ProfileManifest;
};

type PlayButtonState = "disabled" | "ready";

type ProfileManifestObject = { profiles: Record<string, ProfileManifest> };