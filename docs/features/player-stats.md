---
lastUpdated: 2026-03-13
---

# Player Statistics

Obsidian Essentials tracks various statistics for each player. Players can view their own stats through the Community Panel.

---

## Viewing Your Stats

To view your personal statistics:

1. Type `!book` to open the **Community Panel**.
2. Select **Stats**.
3. Your statistics will be displayed.

---

## What Is Tracked

The following information is tracked per player:

| Stat | Description |
|---|---|
| **Balance** | Your current money balance |
| **Playtime** | Total time spent on the server |
| **Last Seen** | When you were last online |

Additional stats (such as kills, deaths, money earned, and money spent) may be displayed depending on which features are enabled on your server by the administrator.

---

## Playtime

Your time played on the server is recorded and accumulates across all sessions. This is displayed in a readable format such as hours and minutes.

---

## Admin: Adjusting Playtime

Administrators can manually set a player's recorded playtime if needed:

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

This is intended for correcting data if a player's playtime was lost or inaccurate.
