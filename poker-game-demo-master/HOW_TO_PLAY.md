# How to Play the Poker Game

## Current Situation
You've successfully:
- ✅ Connected to the server
- ✅ Logged in
- ✅ Created a room
- ✅ Entered the Game scene

## What's Next

### You're Waiting for Players
This is a **4-player poker game**. You need 4 people to play a full game.

### What You Can Do Now:

1. **Click the "Ready" / "准备" button** - This indicates you're ready to play
2. **Wait for other players** - The room will need 4 players total
3. **The game will start automatically** when 4 players are in the room and all are ready

### To Test with Bots (Optional):

If you want to test with simulated players, you can use the console client:

1. Open a new terminal
2. Navigate to `client_console` folder
3. Run:
   ```powershell
   cd client_console
   node game_console.js <your-room-id> 100002
   node game_console.js <your-room-id> 100003
   node game_console.js <your-room-id> 100004
   ```

This will add 3 bots to your room.

### Game Flow:
1. **Waiting** - Waiting for players to join (current state)
2. **Show Red** - "亮红" phase - players reveal red cards
3. **Gaming** - The actual poker game
4. **Results** - End of round results

## Summary
Just click **"Ready" / "准备"** button in the bottom right, and wait for the game to start!

