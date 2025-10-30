# Cache Clear Instructions for Cocos Creator

## The Problem
The client is still trying to connect to `ws://192.168.2.56:8011` instead of `localhost:8011` because Cocos Creator has cached the old scene data.

## Solution: Clear Cocos Creator Cache

### Method 1: Delete Cache Folders in Cocos Creator

1. **Close Cocos Creator completely**
2. **Delete these folders** in the `client` directory:
   - `library` folder
   - `temp` folder
   - `build` folder (if it exists)
   - `settings/builder.json` (optional, but helps)

3. **Reopen Cocos Creator** and open the `client` project
4. Wait for Cocos Creator to rebuild the project (this may take a minute)
5. Click **Play** button
6. Click **Login** button

### Method 2: Use Cocos Creator Menu

1. In Cocos Creator, go to **Project → Refresh** (or press F5)
2. This should rebuild the project from source files
3. Click **Play** button
4. Click **Login** button

### Method 3: Hard Refresh in Browser

If the game is running in a browser:

1. Open the browser's Developer Tools (F12)
2. Right-click on the **Refresh** button
3. Select **Empty Cache and Hard Reload**
4. Or press **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)

## Why This Happens

The scene file (`Login.fire`) had a hardcoded IP address that was cached in the `library` and `temp` folders. Even though we fixed the source file, the cached version is still being used.

## After Clearing Cache

Once you clear the cache and reload, the client should connect to:
- ✅ `ws://localhost:8011` (instead of the old IP)

## What I Fixed

I updated the server address in:
1. `client/assets/scripts/Basic/hongshi.js` → Changed to `ws://localhost:8011`
2. `client/assets/scenes/Login.fire` → Changed EditBox default to `ws://localhost:8011`
3. `client/assets/scripts/panel/Login.js` → Changed WeChat login and IP detection

But you need to clear the cache for these changes to take effect!
