---
lastUpdated: 2026-03-13T12:00:00Z
---

# Chat System

Obsidian Essentials enhances the default Minecraft chat with rank display, private messaging between players, chat lock for admins, and a personal chat clear option.

---

## Chat Rank Display

If enabled by the server administrator, your rank tag will appear before your name in chat. For example:

```
[VIP] Steve: Hello everyone!
[Admin] Alex: Welcome to the server.
```

The rank shown is based on your highest-priority rank.

---

## Private Messages

You can start a private conversation with another player that only the two of you can see.

### Starting a Private Chat

```
!chat [PlayerName]
```

**Example:**
```
!chat Steve
```

Once started, every message you send in chat will be sent privately to that player instead of the public chat.

### Ending a Private Chat

```
!endchat
```

This returns you to normal public chat.

> Both players must be online for private messages to work.

---

## Clearing Your Chat

To clear your own chat screen (only clears it for you, not other players):
```
!clearchat
```

You can also use the slash command:
```
/oe:clearchat
```

---

## Chat Lock

Administrators can lock the chat to prevent regular players from sending messages. When chat is locked:

- Regular players cannot send chat messages.
- Admins can still speak freely.
- Players will see a message explaining that chat is locked.

Chat lock is managed by administrators and can be force-disabled with:
```
/scriptevent realm:chatlock.disable
```

---

## Command Prefix

All commands use a prefix character before the command name. The default prefix is `!`. Your server administrator may have changed this to a different character.

---

## Chat Permissions (Admin)

Administrators can control chat behavior per rank through **Admin Panel > Ranks Editor**:

| Permission | What It Controls |
|---|---|
| **Can Chat** | Whether players of this rank can send chat messages |
| **Can Use Color Codes** | Whether players can use color formatting in chat |
| **Can Use Player Commands** | Whether players can use `!` commands in chat |
| **Bypass Cooldowns** | Whether the rank skips command cooldowns |
| **Allowed Player Commands** | A specific list of commands the rank can use (use `*` for all) |
