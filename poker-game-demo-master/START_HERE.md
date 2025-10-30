# ✅ Poker Game Demo - Ready to Run!

## Current Status

✅ **Server is Running!**
- Server is listening on port **8011** (localhost)
- Dependencies installed (ws, express, mysql)
- Client configuration updated to connect to localhost

## How to Run the Client

### Option 1: Using Cocos Creator (Recommended for full game experience)

1. **Download Cocos Creator** from https://www.cocos.com/creator/ (if not already installed)

2. **Open Cocos Creator** and click "Open Project"

3. **Navigate to and select** the `client` folder in this project

4. **Click the Play button** (▶️) in Cocos Creator to start the game

5. The game will load with the Login scene

### Option 2: Using Console Client (For Testing)

For testing with multiple simulated players:

1. Open a new terminal
2. Navigate to the client_console directory:
   ```powershell
   cd client_console
   ```

3. Join a room:
   ```powershell
   node game_console.js <roomId> <userId>
   # Example: node game_console.js 123456 100001
   ```

## Important Notes

### ⚠️ MySQL Database Setup Required

The server is running but needs a MySQL database to function properly. You need to:

1. **Create the database:**
   ```sql
   CREATE DATABASE hongshi;
   ```

2. **Import the schema:**
   ```bash
   mysql -u root -p hongshi < server/hongshi.sql
   ```

3. **Update database credentials** in `server/config.js`:
   - Change the password from `"password"` to your MySQL root password
   - Adjust username if needed

### Current Configuration

- **Server Address**: `ws://localhost:8011`
- **Server Status**: ✅ Running (PID: 17232)
- **Database**: ❌ Not yet configured (see above)

## Quick Start (Once Database is Setup)

1. The server is already running in the background
2. Open the client in Cocos Creator
3. Click Play
4. Login or create an account
5. Create or join a room
6. Start playing!

## Troubleshooting

### Server Not Running?
```powershell
cd server
node server.js
```

### Check Server Status
```powershell
netstat -ano | findstr :8011
```

### Client Can't Connect?
- Make sure server is running on port 8011
- Check that you've imported the MySQL database
- Verify database credentials in `server/config.js`

## Project Structure

- **Server**: Running on `localhost:8011` (already started)
- **Client**: Cocos Creator project in `client` folder
- **Database**: MySQL database `hongshi` (needs setup)

## Next Steps

1. **Setup MySQL database** (see instructions above)
2. **Open client in Cocos Creator**
3. **Click Play**
4. **Enjoy the game!**
