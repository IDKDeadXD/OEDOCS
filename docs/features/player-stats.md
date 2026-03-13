---
lastUpdated: 2026-03-13T12:00:00Z
---

# Player Statistics

Obsidian Essentials tracks combat, building, and activity statistics for every player. Stats are visible through the Community Panel and can be compared on server leaderboards.

---

## Viewing Your Stats

1. Type `!book` to open the **Community Panel**.
2. Select **Stats**.
3. Your statistics are displayed across three sections.

---

## What Is Tracked

### Combat Stats

| Stat | Description |
|---|---|
| **Player Kills** | Number of other players you have killed |
| **Deaths** | Total times you have died |
| **K/D Ratio** | Kill/Death ratio (calculated automatically) |
| **Current Kill Streak** | Kills in a row without dying |
| **Max Kill Streak** | Your highest kill streak ever |
| **Entities Killed** | Total non-player mobs you have killed |

### Building Stats

| Stat | Description |
|---|---|
| **Blocks Broken** | Total blocks you have broken |
| **Blocks Placed** | Total blocks you have placed |

### Activity Stats

| Stat | Description |
|---|---|
| **Distance Walked** | Total blocks walked (horizontal distance) |

---

## Leaderboards

From the Stats menu, select **View Leaderboards** to see the top 10 players in each of the following categories:

- **Player Kills**
- **Blocks Broken**
- **Blocks Placed**
- **Max Kill Streak**

Your own rank in each category is shown at the bottom of the leaderboard.

---

## Resetting Your Stats

You can reset all of your own statistics:

1. Open **Community Panel > Stats**.
2. Select the reset option.
3. Type `CONFIRM` in the text field to confirm.

This permanently wipes all your tracked stats and cannot be undone.

---

## Admin: Adjusting Playtime

Administrators can manually correct a player's recorded playtime:

```
!settimeplayed [PlayerName] [Time]
```

Accepted time formats:
- `5h30m` (5 hours, 30 minutes)
- `2d` (2 days)
- `3600` (3600 seconds)

Aliases: `!stp`, `!restoretime`

**Example:**
```
!settimeplayed Steve 10h
```
