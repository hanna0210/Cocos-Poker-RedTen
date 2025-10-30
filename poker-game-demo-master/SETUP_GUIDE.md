# Poker Game Demo - Setup and Run Guide

This is a poker game demo with client-server architecture. The client uses Cocos Creator, and the server uses Node.js.

## Project Structure

- **client**: Cocos Creator game client
- **server**: Node.js game server (WebSocket + MySQL)
- **client_console**: CLI testing client for simulating players

## Prerequisites

1. **Node.js** (v12 or higher)
2. **MySQL** server
3. **Cocos Creator** (latest version) - for running the game client
4. **npm** (comes with Node.js)

## Setup Instructions

### Step 1: Database Setup

1. Create a MySQL database named `hongshi`:
   ```sql
   CREATE DATABASE hongshi;
   ```

2. Import the database schema:
   ```bash
   mysql -u root -p hongshi < server/hongshi.sql
   ```

3. Update the MySQL connection settings in `server/config.js`:
   ```javascript
   mysql: {
       host: "localhost",
       port: 3306,
       user: "root",        // Your MySQL username
       password: "", // Your MySQL password
       database: "hongshi",
   },
   ```

### Step 2: Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install required npm packages:
   ```bash
   npm install ws express mysql
   ```
   
   If you get errors, install the missing packages one by one:
   ```bash
   npm install ws
   npm install express
   npm install mysql
   ```

3. Start the main game server (in one terminal):
   ```bash
   node server.js
   ```
   You should see: `Listening on 8011`

4. Start the IP server (optional, in another terminal):
   ```bash
   cd IpGet
   node socket_io_ip_server.js
   ```

5. Start the OAuth login server (optional, in another terminal):
   ```bash
   cd OauthLoginDemo
   node login.js
   ```

6. Start the payment notification server (optional, in another terminal):
   ```bash
   cd PayNotifyDemo
   node paynotice.js
   ```

**Note**: For basic testing, you only need to run the main server (`server.js`).

### Step 3: Client Setup

1. Install **Cocos Creator** from [https://www.cocos.com/](https://www.cocos.com/)

2. Open Cocos Creator

3. Click "Open Project" and select the `client` folder

4. The project will load with three main scenes:
   - `Login.fire` - Login screen
   - `Hall.fire` - Game lobby
   - `Game.fire` - Game scene

5. Before running, you may need to update the server address in the client code. Check `client/assets/scripts/netEngine.js` and update any hardcoded URLs to match your server.

6. Click the "Play" button in Cocos Creator to run the game

### Step 4: Testing with Console Client (Optional)

For testing with multiple players:

1. Navigate to the client_console directory:
   ```bash
   cd client_console
   ```

2. Join a room with a player:
   ```bash
   node game_console.js <roomId> <userId>
   # Example: node game_console.js 123456 100001
   ```

3. Control player actions:
   ```bash
   node assist.js <roomId> <userId> <action> <parameters>
   # Example: node assist.js 123456 100001 roomPrepare roomId:123 prepare:true
   ```

## Troubleshooting

### Database Connection Issues
- Check that MySQL is running
- Verify username/password in `server/config.js`
- Ensure the `hongshi` database exists and has been imported

### Port Already in Use
- Change the port in `server/config.js` if port 8011 is taken
- Update client connection settings accordingly

### Missing npm Packages
- Run `npm install` in the `server` directory
- Install missing packages as suggested by error messages

### Client Cannot Connect to Server
- Verify the server is running (`Listening on 8011`)
- Check firewall settings
- Update server address in client code if not using `localhost`

## Game Server Information

**Ports Used:**
- Main game server: 8011
- IP server: (see IpGet/socket_io_ip_server.js)
- OAuth server: (see OauthLoginDemo/login.js)
- Payment server: (see PayNotifyDemo/paynotice.js)

**Database Tables:**
- `users`: User information and login data
- `room_competition`: Room and game data
- `agent`: Agent information

## Next Steps

1. Run the server: `node server.js`
2. Open the client in Cocos Creator and click Play
3. Create an account or login
4. Create or join a room
5. Start playing!

For more detailed information, see the README files in each directory:
- `server/README.md` - Server architecture
- `client/README.md` - Client architecture  
- `client_console/README.md` - Console testing tools
