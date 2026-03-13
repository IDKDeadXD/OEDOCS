---
title: "Slash Commands"
lastUpdated: 2026-03-13T12:00:00Z
---

# Slash Commands

In addition to `!` prefix chat commands, Obsidian Essentials registers native Minecraft slash commands using the `/oe:` namespace. These appear in Minecraft's autocomplete when you type `/oe:`.

---

## Player Commands

Available to all players (Normal permission level):

| Slash Command | Description |
|---|---|
| `/oe:help` | Shows available player commands |
| `/oe:book` | Gives the Community Panel book |
| `/oe:info` | Shows add-on information |
| `/oe:version` | Shows the current add-on version |
| `/oe:balance` | Checks your current balance |
| `/oe:pay <player> <amount>` | Pays another player |
| `/oe:tpa <player>` | Sends a teleport request to a player |
| `/oe:tpaccept` | Accepts a pending teleport request |
| `/oe:tpdeny` | Denies a pending teleport request |
| `/oe:away` | Marks you as AFK |
| `/oe:home <name>` | Teleports to a saved home |
| `/oe:addhome <name>` | Saves your current location as a home |
| `/oe:deletehome <name>` | Deletes a saved home |
| `/oe:listhomes` | Lists all your saved homes |
| `/oe:claim` | Claims the chunk you are standing in |
| `/oe:myclaims` | Opens your claims menu |
| `/oe:unclaim` | Unclaims the chunk you are standing in |
| `/oe:lastseen <player>` | Checks when a player was last online |

---

## Admin Commands

Available to administrators (Admin permission level):

| Slash Command | Description |
|---|---|
| `/oe:adminhelp` | Shows admin commands list |
| `/oe:kick <player> <reason>` | Kicks a player from the server |
| `/oe:broadcast <message>` | Broadcasts a message to all players |
| `/oe:warn <player> <reason>` | Issues a warning to a player |
| `/oe:vanish` | Toggles vanish mode |
| `/oe:admintoggle` | Toggles admin mode (saves inventory, switches to creative) |
| `/oe:lockchat` | Locks or unlocks the chat |
| `/oe:clearchat` | Clears chat for all players |
| `/oe:coinflip` | Flips a coin and announces the result |
| `/oe:givemoney <player> <amount>` | Gives money to a player |
| `/oe:takemoney <player> <amount>` | Takes money from a player |
| `/oe:setmoney <player> <amount>` | Sets a player's money balance |
| `/oe:addlore <text>` | Adds a line of lore to the held item |
| `/oe:removelore` | Removes all lore from the held item |

---

## Notes

- Slash commands appear in Minecraft's autocomplete when you type `/oe:`.
- All other features are also accessible through `!` chat commands or the in-game panel menus.
- For a full list of chat commands, see [Player Commands](player-commands.md) and [Admin Commands](admin-commands.md).
