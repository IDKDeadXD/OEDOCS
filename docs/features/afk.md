---
title: "AFK System"
lastUpdated: 2026-03-13T12:00:00Z
---

# AFK System

The AFK (Away From Keyboard) system automatically detects when players become idle and announces their status to the server. If a player remains AFK for too long, they can be automatically kicked to free up server space.

---

## Going AFK Manually

If you need to step away and want to let others know, you can mark yourself as AFK:
```
!away
```

The server will announce that you have gone AFK. Your AFK status will be visible to other players.

---

## Automatic AFK Detection

You do not need to manually mark yourself as AFK every time. The system tracks player activity automatically. If you stop moving and interacting for a set period of time, you will be automatically marked as AFK.

When this happens:
- The server announces that you are AFK.
- You will be notified that you have been marked AFK.

---

## Returning from AFK

Simply move or interact with anything in the game to return from AFK status. The server will announce that you have returned.

---

## Auto-Kick

If the server has auto-kick enabled, players who remain AFK beyond a set time limit will be automatically kicked from the server. This is to keep server slots available for active players.

You will not be kicked immediately when going AFK - there is a separate, longer timeout before a kick occurs. The exact durations are set by the server administrator.

---

## AFK and Permissions

Some ranks (such as VIP+ or higher) may have the ability to bypass the AFK auto-kick. If your rank includes this bypass, you will not be automatically removed from the server when idle.

Ask your server administrator if your rank includes an AFK kick bypass.

---

## Admin: AFK Settings

Administrators can configure the AFK system through the **Admin Panel**:

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **AFK Settings**.
3. Adjust the available options:

| Setting | What It Controls |
|---|---|
| **AFK Timeout** | How long before a player is marked as AFK |
| **Enable Auto-Kick** | Whether idle players are kicked after extended AFK |
| **Kick Timeout** | How long after going AFK before a player is kicked |
| **Announce AFK** | Whether the server announces when someone goes AFK |
| **Announce Return** | Whether the server announces when someone returns from AFK |
| **Notify Player** | Whether the player is told they have been marked AFK |

Timeouts are specified in time formats such as `5m` (5 minutes), `30m` (30 minutes), or `2h` (2 hours).
