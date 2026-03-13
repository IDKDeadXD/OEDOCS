---
title: "Vanish Mode"
lastUpdated: 2026-03-13T18:58:00Z
---

# Vanish Mode

Vanish mode allows administrators to become invisible to regular players. This is useful for monitoring player behavior, investigating reports, or moving around the server without being noticed.

---

## Toggling Vanish

To enable or disable vanish mode:
```
!vanish
```
or the alias:
```
!v
```

Running the command again returns you to your normal state.

---

## How It Works

When vanish is activated:
- You are switched to **Spectator mode**, making you invisible to other players.
- Your original game mode is remembered and restored when you toggle vanish off.
- Depending on server settings, a fake "leave" message may be sent to players when you vanish.

When vanish is deactivated:
- You are returned to your previous game mode.
- Depending on server settings, a fake "join" message may be sent to players when you return.

---

## Admin: Vanish Settings

Vanish behavior can be configured in **Admin Panel > Settings**:

| Setting | What It Controls |
|---|---|
| **Send Leave Message on Vanish** | Whether a fake "player left" message is shown when vanishing |
| **Server Name in Messages** | The server name shown in join/leave messages (e.g., "Realm") |

---

## Notes

- While vanished, you can still interact with the world in spectator mode (flying, phasing through blocks).
- Other admins online may still be able to see that you are in spectator mode depending on their client settings.
