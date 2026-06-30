# Kimi Timer

> A minimal, precise, and elegant desktop timer for Windows, built with Electron.

<p align="center">
  <img src="assets/chronometer.ico" width="64" alt="Kimi Timer Icon">
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#download">Download</a> •
  <a href="#usage">Usage</a> •
  <a href="#development">Development</a> •
  <a href="#roadmap">Roadmap</a>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⏳ **Countdown Mode** | Set custom hours, minutes, and seconds. Auto-alerts when time is up. |
| ⏱️ **Stopwatch Mode** | Starts from 00:00:00 and accumulates elapsed time. Pause and resume anytime. |
| 🎯 **Precision Timing** | Uses **timestamp-difference** algorithm. Timer stays accurate even when minimized or in the background. |
| 📌 **Always on Top** | One-click toggle to keep the window floating above all others. |
| 🔊 **Audio Alert** | Built-in three-tone beep sequence (880Hz → 1100Hz → 1320Hz) via Web Audio API. No external files needed. |
| 🔔 **System Notification** | Native Windows toast notification when the countdown finishes. |
| 💡 **Visual Alert** | Interface flashes for 3 seconds when the timer hits zero. |
| 🎨 **Minimal UI** | Dark gradient theme, 400×500 fixed window, no menu bar clutter. |

---

## 📥 Download

Grab the latest portable executable and run it immediately — no installation required.

| Release | File | Size |
|---------|------|------|
| **Latest** | `Kimi Timer 1.0.0.exe` | ~88 MB |

> 📂 Download from the [Releases](https://github.com/your-username/kimi-timer/releases) page.

---

## 🚀 Usage

### Quick Start

1. Double-click **`Kimi Timer 1.0.0.exe`**.
2. The timer window pops up instantly.

### Controls

| Action | How |
|--------|-----|
| Switch Mode | Click **Countdown** or **Stopwatch** tabs at the top. |
| Set Time | Enter hours, minutes, and seconds (Countdown mode only). |
| Start | Click the **▶ Start** button or press `Enter` in the input fields. |
| Pause | Click the **⏸ Pause** button to freeze the timer. |
| Reset | Click the **↺ Reset** button to clear everything. |
| Pin Window | Click the **📌 Pin** button to keep the window always on top. |

### Interface Layout

```
┌─────────────────────────────────┐
│ DESKTOP TIMER           [📌 Pin] │  ← Top bar + always-on-top toggle
├─────────────────────────────────┤
│  [Countdown]  [Stopwatch]        │  ← Mode switch
├─────────────────────────────────┤
│                                 │
│        00:05:23                 │  ← Large timer display (HH:MM:SS)
│        COUNTDOWN                │
│                                 │
│  [  H  ] : [  M  ] : [  S  ]  │  ← Time input (Countdown only)
│                                 │
│    [▶]   [⏸]   [↺]            │  ← Start / Pause / Reset
│  Start  Pause  Reset             │
│                                 │
│  Countdown is running...         │  ← Status bar
└─────────────────────────────────┘
```

- **Theme:** Dark gradient (`#1a1a2e` → `#16213e`), clean white text, gradient buttons.
- **Window Size:** Fixed 400 × 500 pixels, non-resizable.

---

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/kimi-timer.git
cd kimi-timer

# Install dependencies
npm install

# Run in development mode
npm start
```

> **Note:** On Windows with Git Bash, use `npm.cmd` if `npm` is not recognized.

### Build

```bash
npm run build
```

This generates a portable Windows executable under `dist/`.

| Output | Path | Description |
|--------|------|-------------|
| **Portable** | `dist/Kimi Timer 1.0.0.exe` | Single-file, ready to run. |
| Unpacked | `dist/win-unpacked/Kimi Timer.exe` | Pre-extracted directory. |

### Build Config (excerpt from `package.json`)

```json
{
  "build": {
    "appId": "com.kimi.timer.desktop",
    "productName": "Kimi Timer",
    "win": {
      "target": { "target": "portable", "arch": ["x64"] },
      "icon": "assets/chronometer.ico"
    }
  }
}
```

---

## 📁 Project Structure

```
kimi-timer/
├── main.js              # Main process (window, IPC, system notifications)
├── index.html           # Renderer (UI + timer logic + alerts)
├── package.json         # Config & dependencies
├── assets/
│   └── chronometer.ico  # Application icon
├── dist/                # Build output (auto-generated)
├── node_modules/        # Dependencies
└── document/            # Project documentation
    ├── README.md
    ├── CHANGELOG.md
    ├── 技术架构文档.md
    ├── 需求规格文档.md
    ├── 构建与打包指南.md
    ├── 版本发布说明.md
    ├── 开发环境搭建指南.md
    └── 待办清单与路线图.md
```

---

## 🎯 How the Precision Timer Works

Instead of incrementing a counter every 100ms (which drifts when the tab is inactive or the window is minimized), Kimi Timer uses **timestamp differences**:

```javascript
// When starting/resuming:
startTimestamp = Date.now();

// Every 100ms tick:
elapsed = elapsedAccumulated + (Date.now() - startTimestamp);
```

This guarantees absolute accuracy regardless of the app's visibility state, CPU throttling, or system sleep.

---

## 📄 License

[ISC](LICENSE)

---

<p align="center">
  Built with ❤️ and <a href="https://www.electronjs.org/">Electron</a>
</p>
