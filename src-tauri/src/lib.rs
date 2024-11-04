use std::error::Error;

use tauri::Manager;
use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tracing_subscriber::fmt::init();
    tauri::Builder::default()
        .setup(setup_transparency)
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn setup_transparency(app: &mut tauri::App) -> Result<(), Box<dyn Error>> {
    let Some(window) = app.get_webview_window("main") else {
        tracing::warn!("Unable to get main window");
        return Ok(());
    };

    #[cfg(target_os = "macos")]
    apply_vibrancy(&window, NSVisualEffectMaterial::Sidebar, None, Some(9.0))?;

    #[cfg(target_os = "windows")]
    apply_blur(&window, Some((9, 9, 11, 125)))?;
    Ok(())
}
