---
title: "Moderation Tools"
lastUpdated: 2026-03-13T18:58:00Z
---

# Moderation Tools

Obsidian Essentials includes moderation tools for managing player behavior: warnings, kicks, bans, and chat controls.

---

## Warning a Player

Warnings are formal notices issued to players for breaking rules. They are recorded with a timestamp and reason so you can track repeat offenders.

```
!warn [PlayerName] [Reason]
```

**Example:**
```
!warn Steve Spamming in chat
!warn Alex Using offensive language
```

The player will receive the warning notification in-game. The warning is logged and visible to all admins.

### Viewing a Player's Warnings

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Players**.
3. Select the player.
4. Their warning history will be visible, including dates and reasons.

---

## Kicking a Player

Kicking removes a player from the server immediately. They can rejoin afterwards.

```
!kick [PlayerName] [Reason]
```

**Example:**
```
!kick Steve Please read the server rules before playing.
```

The player will see the kick reason when removed. The kick is logged.

---

## Banning a Player

The ban system blocks a player from rejoining the server.

### Banning via the Admin Panel

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Ban**.
3. Select **Ban Player**.
4. Enter the player's name and reason.
5. Confirm the ban.

### Unbanning a Player

1. Open the **Admin Panel**.
2. Go to **Ban**.
3. Select **Unban Player**.
4. Enter the player's name and confirm.

---


## Clearing Chat

To clear the chat for all players (admin slash command):
```
/oe:clearchat
```

To clear just your own chat screen:
```
!clearchat
```

---

## Broadcasting a Message

To send an important message to all players:
```
!broadcast [Message]
```
or the alias:
```
!bc [Message]
```

**Example:**
```
!broadcast Server restart in 10 minutes. Please find a safe spot!
```

---

## Viewing Logs

All moderation actions (warnings, kicks, bans) are logged and viewable from the Admin Panel:

1. Open the **Admin Panel**.
2. Go to **Logs**.
3. Browse the action history.

---

## Player Reports

Players can submit reports through the Community Panel. Admins can review these:

1. Open the **Admin Panel**.
2. Go to **Reports**.
3. Browse submitted reports and take action as needed.

---

## Moderator Permissions (Admin)

From **Admin Panel > Ranks Editor**, configure what each rank can do:

| Permission | What It Allows |
|---|---|
| **Can Kick** | Use the kick command |
| **Can Ban** | Use the ban system |
| **Can Mute** | Silence individual players |
| **Can Use Admin Commands** | Access to admin chat commands |
| **Allowed Admin Commands** | Specific commands permitted (or `*` for all) |
| **Can Use Admin Panel** | Access to the Admin Panel menu |
