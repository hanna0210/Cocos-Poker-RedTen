# How to Add Bots Manually

## Option 1: Run Each Bot in Separate PowerShell Windows

Open **3 separate PowerShell windows** and run these commands:

### PowerShell Window 1:
```powershell
cd C:\Users\1\OneDrive\Desktop\poker-game-demo-master\client_console
node game_console.js 746089 100002
```

### PowerShell Window 2:
```powershell
cd C:\Users\1\OneDrive\Desktop\poker-game-demo-master\client_console
node game_console.js 746089 100003
```

### PowerShell Window 3:
```powershell
cd C:\Users\1\OneDrive\Desktop\poker-game-demo-master\client_console
node game_console.js 746089 100004
```

## Option 2: Check What's in Your Room Currently

Open **PowerShell** and check:
```powershell
cd C:\Users\1\OneDrive\Desktop\poker-game-demo-master\client_console
node game_console.js 746089 100005
```

This will show you the current room state.

## Make Bots Ready

After the bots join, in each bot's terminal window, you might need to make them ready. But since they're console clients, they should auto-ready or you can use:

```powershell
cd C:\Users\1\OneDrive\Desktop\poker-game-demo-master\client_console
node assist.js 746089 100002 roomPrepare roomId:746089 prepare:true
```

Replace `100002` with the bot ID for each one.

## What Should Happen

1. All 3 bots join the room
2. All bots show as "ready" or auto-ready
3. You click "Ready" in your game
4. The game starts with 4 players!

## Troubleshooting

If bots aren't joining:
- Make sure the server is still running (port 8011)
- The room ID 746089 still exists
- Try creating a new room if needed

