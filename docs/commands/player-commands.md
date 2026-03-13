---
lastUpdated: 2026-03-13
---

# Player Commands

These commands are available to all players, subject to rank restrictions configured by the server administrator. All commands use the `!` prefix by default (your server may use a different prefix - check with your admin).

---

## General

| Command | Aliases | Description |
|---|---|---|
| `!help` | `!h` | Displays a list of all commands available to you |
| `!book` | `!b` | Gives you the Community Panel book |
| `!info` | - | Shows add-on and server information |
| `!version` | - | Displays the current add-on version |

---

## Economy

| Command | Aliases | Description |
|---|---|---|
| `!balance` | `!bal` | Shows your current money balance |
| `!pay [Player] [Amount]` | - | Transfers money to another player |
| `!withdraw [Amount]` | `!wd` | Converts money into a physical money item |
| `!sell [Amount]` | - | Sells items from your hand |
| `!sell all` | - | Sells all applicable items in your inventory |

**Examples:**
```
!balance
!pay Steve 500
!withdraw 100
!sell all
```

---

## Homes

| Command | Description |
|---|---|
| `!addhome [Name]` | Saves your current location as a home |
| `!home [Name]` | Teleports you to a saved home (with countdown) |
| `!deletehome [Name]` | Deletes a saved home |
| `!listhomes` | Lists all of your saved homes |

**Examples:**
```
!addhome base
!home base
!deletehome mine1
!listhomes
```

---

## Teleportation

| Command | Description |
|---|---|
| `!tpa [Player]` | Sends a teleport request to another player |
| `!accept` | Accepts an incoming teleport request |
| `!deny` | Denies an incoming teleport request |

**Examples:**
```
!tpa Steve
!accept
!deny
```

---

## Land Claims

| Command | Description |
|---|---|
| `!claim` | Opens the land claims menu for your current chunk |

---

## Kits

| Command | Description |
|---|---|
| `!kits` | Lists all kits available to you |
| `!kit [KitName]` | Claims the specified kit |

**Examples:**
```
!kits
!kit starter
```

---

## Chat

| Command | Aliases | Description |
|---|---|---|
| `!clearchat` | `!cc` | Clears your personal chat screen |
| `!away` | - | Marks you as AFK |
| `!chat [Player]` | - | Starts a private chat with a player |
| `!endchat` | - | Ends your current private chat |

---

## Other

| Command | Description |
|---|---|
| `!lastseen [Player]` | Shows when a player was last online |
| `!code [CodeID]` | Redeems a redemption code |

**Examples:**
```
!lastseen Steve
!code welcome2024
```

---

## Slash Commands

A small number of slash commands are also available directly from the Minecraft command bar:

| Slash Command | Description |
|---|---|
| `/oe:clearchat` | Clears your chat |
| `/oe:menu` | Opens the Community Panel |
| `/oe:rank` | Manage player ranks (admin only) |

---

## Notes

- Commands are typed directly into the chat box.
- The `!` prefix is the default. Your server may use a different prefix.
- Some commands in this list may be restricted to certain ranks on your server.
- Type `!help` in-game to see the commands you personally have access to.
