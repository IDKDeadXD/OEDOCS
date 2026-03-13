---
lastUpdated: 2026-03-13
---

# Admin Commands

These commands are available to players with admin permissions or higher. They are entered in chat using the `!` prefix (or your server's configured prefix).

> Players without admin permissions will not be able to use these commands.

---

## Panel & Help

| Command | Aliases | Description |
|---|---|---|
| `!adminhelp` | `!adc` | Displays the list of admin commands |
| `!adminpanel` | `!ap` | Gives you the Admin Panel book |
| `!admintoggle` | `!at` | Toggles admin mode (saves your inventory, switches to creative) |

---

## Player Management

| Command | Description |
|---|---|
| `!kick [Player] [Reason]` | Kicks a player from the server |
| `!warn [Player] [Reason]` | Issues a formal warning to a player (logged) |
| `!broadcast [Message]` | Sends a message to all players on the server |
| `!command [Command]` | Runs a Minecraft command through the add-on |
| `!xpget [Player]` | Checks a player's current XP level |

**Examples:**
```
!kick Steve Breaking the rules
!warn Alex Spamming in chat
!broadcast Server restarting in 5 minutes!
!xpget Steve
```

---

## Vanish

| Command | Aliases | Description |
|---|---|---|
| `!vanish` | `!v` | Toggles vanish mode (makes you invisible to players) |

---

## Economy

Money management is handled through the **Admin Panel > Players** menu. Select a player and adjust their balance from there.

---

## Redemption Codes

| Command | Description |
|---|---|
| `!addcode [ID] [Uses] [OnePerPlayer] [Command]` | Creates a new redemption code |
| `!deletecode [ID]` | Deletes an existing redemption code |
| `!listcodes` | Lists all active redemption codes |

**Example:**
```
!addcode welcome1 100 true give @s diamond 5
!deletecode welcome1
!listcodes
```

**Parameter Reference:**
- `[ID]` - The code players will type (no spaces)
- `[Uses]` - Total number of redemptions allowed
- `[OnePerPlayer]` - `true` = one use per player, `false` = unlimited per player
- `[Command]` - The command to run when the code is redeemed

---

## Item Tools

| Command | Description |
|---|---|
| `!addlore [Text]` | Adds a line of lore to the item you are holding |
| `!removelore` | Removes all lore from the item you are holding |

**Examples:**
```
!addlore Forged in the Nether
!removelore
```

---

## Kit Management

| Command | Description |
|---|---|
| `!save-kit [Name]` | Saves your current inventory as a named kit |

**Example:**
```
!save-kit starter
```

---

## Utilities

| Command | Aliases | Description |
|---|---|---|
| `!coinflip` | - | Flips a coin and announces the result to all players |
| `!settimeplayed [Player] [Time]` | `!stp`, `!restoretime` | Manually sets a player's recorded playtime |

**Time Format for settimeplayed:**
- `5h30m` - 5 hours and 30 minutes
- `2d` - 2 days
- `3600` - 3600 seconds

**Examples:**
```
!coinflip
!settimeplayed Steve 10h30m
```

---

## Chat Lock

Chat lock is controlled through the `/scriptevent realm:chatlock.disable` command if you need to force-disable it. Regular toggling is done from within the Admin Panel.

---

## Slash Commands (Admin)

| Slash Command | Description |
|---|---|
| `/oe:rank add [Player] [RankName]` | Adds a rank to a player |
| `/oe:rank remove [Player] [RankName]` | Removes a rank from a player |
| `/oe:rank list [Player]` | Lists a player's current ranks |
| `/oe:rank priority [Player] [RankName] [Priority]` | Sets a rank's priority for a player |
| `/oe:rank create [RankName]` | Creates a new rank |

---

## Script Event Commands

These use the Minecraft `/scriptevent` system and require OP permissions.

| Command | Description |
|---|---|
| `/scriptevent realm:setup` | Designates yourself as the server owner (OP only, one-time) |
| `/scriptevent realm:dev.warps create:[Name]` | Creates a temporary dev warp at your location |
| `/scriptevent realm:dev.warps tp:[Name]` | Teleports to a dev warp |
| `/scriptevent realm:dev.warps delete:[Name]` | Deletes a dev warp |
| `/scriptevent realm:dev.warps list` | Lists all dev warps |
| `/scriptevent realm:dev.lastseen.edit [Player]:[Date]` | Manually sets a player's last-seen date |
| `/scriptevent realm:chatlock.disable` | Forces chat lock off (emergency override) |

> Dev warps created via scriptevent are temporary and will be lost when the server restarts.

---

## Notes

- All admin commands require appropriate rank permissions configured in the Ranks Editor.
- Warning and kick actions are logged and viewable in **Admin Panel > Logs**.
- The `!admintoggle` command saves your survival inventory and switches you to creative mode. Toggle again to restore.
