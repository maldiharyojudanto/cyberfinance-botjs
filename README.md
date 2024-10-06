# cyberfinance-botjs

cyber finance botjs auto tap multiple account https://t.me/CyberFinanceBot

<img width="789" alt="Code_iy1l5P0Lqa" src="https://github.com/user-attachments/assets/a1616ce5-4eff-4ced-87a4-a70c5a422944">

## Features
- Auto create token
- Auto daily
- Auto start/claim
- Auto claim task
- Auto upgrade hammer & egg
- Auto refresh token

## Requirement
- Node.js

## How to run
1. Clone/download this repository
2. Extract and go to folder
3. Setting .env file
4. Open cmd file folder
5. > npm install
6. > node index
7. Fill query.txt

## How to get query_id?
1. Open telegram web/desktop
2. Go to Settings - Advanced - Experimental settings - Enable webview inspecting
3. Open bot https://t.me/CyberFinanceBot
4. Press F12 or right click then select inspect element
5. Go to Application tab - Session storage - Select g.cyberfin.xyz - Select '__telegram__initParams' - Select tgWebAppData and copy value start with ```query_id=``` or ```user=```
6. Separate query_id= or user= with the newline (for multiple account)
