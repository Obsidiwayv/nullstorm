use std::fs;
use tauri;

#[tauri::command]
pub fn get_profiles(_window: tauri::Window) -> Result<String, String> {
    let roaming_folder = dirs::home_dir().expect("Failed to get home directory")
        .join("AppData")
        .join("Roaming");
    let profiles_path = roaming_folder.join(".minecraft").join("launcher_profiles.json");
    fs::read_to_string(profiles_path)
        .map_err(|_e| format!("Failed to read launcher_profiles.json"))
}