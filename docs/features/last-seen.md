---
title: "Last Seen"
lastUpdated: 2026-03-13T12:00:00Z
---

# Last Seen

The Last Seen system tracks when each player was last online. Any player can look up another player's last activity, making it easy to check if a friend has been on recently.

---

## Checking When a Player Was Last Seen

```
!lastseen [PlayerName]
```

**Example:**
```
!lastseen Steve
```

The response will show how long ago that player was last online, formatted in days, hours, and minutes. For example:

```
Steve was last seen 2 days, 4 hours, 30 minutes ago.
```

If the player is currently online, you will see that they are online right now.

---

## Notes

- Last Seen tracks players by their Minecraft account ID, so name changes do not cause issues.
- The system records each player's last activity automatically whenever they leave the server.
- If a player has never been seen before on this server, the system will indicate that.

---

## Admin: Manually Editing Last Seen

In rare cases (such as data restoration), administrators can manually set a player's last-seen date using a script event command:

```
/scriptevent realm:dev.lastseen.edit [PlayerName]:[Date]
```

This is intended for admin correction only and should not be used in normal circumstances.
