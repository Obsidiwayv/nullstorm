interface VersionManifest {
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

interface PalletFileMetadata {
    version: string;
    name: string;
    color: {
        background: string;
        text: string;
    };
}