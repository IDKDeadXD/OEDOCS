---
title: "First Setup"
lastUpdated: 2026-03-13T18:47:00Z
---

# First Setup

After installing Obsidian Essentials, follow this guide to complete your initial configuration. This only needs to be done once.

---

## Step 1 - Claim the Owner Role

The first thing you must do is designate yourself as the **server owner**. This gives you full access to every feature in the add-on.

1. Make sure you are **operator (OP)** on the world or realm.
2. Join the world and open chat.
3. Run the following command exactly as written:
   ```
   /scriptevent realm:setup
   ```
4. You will receive a confirmation message that you are now set as the server owner.

> **This can only be done once.** Only the first person to run this command will be set as owner.

---

## Step 2 - Open the Admin Panel

Once you are the server owner, you have access to the Admin Panel.

1. Type in chat:
   ```
   !adminpanel
   ```
   or the shorter alias:
   ```
   !ap
   ```
2. A book item called **Admin Panel** will appear in your inventory.
3. Hold the book and right-click (or use it on mobile/console) to open the menu.

---

## Step 3 - Configure Settings

Open the **Admin Panel** and go to **Settings**. The Settings menu is organized into the following sections:

**General Settings**
- **Add-on Settings**: Toggle whether the Community Panel book is given to players upon respawn.
- **Community Panel Message**: Set the message displayed at the top of the Community Panel.
- **Money System**: Change the internal name used for the currency scoreboard.

**Player Features**
- **Homes System**: Set the global homes limit and enable or disable the homes system entirely.
- **TPA Settings**: Enable or disable the TPA system.
- **Vanish Settings**: Configure whether a leave message is sent when a staff member vanishes, and set the server type label.
- **Join Message**: Enable or disable join messages and write a custom message using `<player>` and `<count>` as placeholders.

**Communication**
- **Chat Configuration**: Change the command prefix (default: `!`) and toggle a content filter.
- **Chat Ranks**: Enable or disable rank prefixes shown next to player names in chat. When disabled, no rank tags are displayed and rank-gated chat commands become available to all players.
- **Emoji Settings**: Configure emoji behavior in chat.

**Security & Moderation**
- **Combat Log System**: Enable combat logging, set combat duration, configure punishments (ban, inventory clear, or both), and set punishment durations.

**Performance Options**: Placeholder for a future update; no settings currently available here.

---

## Step 4 - Configure Feature Toggles

**Feature Toggles** controls which buttons are visible on the **Community Panel** main menu. It does not enable or disable the underlying systems; it only shows or hides buttons for players.

1. Open the **Admin Panel**.
2. Go to **Feature Toggles**.
3. Toggle each button on or off.

The buttons you can show or hide are:

| Button | What It Opens |
|---|---|
| Polls | Active server polls |
| Warps | Public warps list |
| Homes | Player home management |
| Land Claims | Land claim menu |
| TPA | Teleport request menu |
| Shops | Player shops |
| Reports | Report system |
| Rules | Server rules |
| Stats | Player statistics |
| Credits/Info | Add-on credits and info |
| Settings | Player personal settings |

---

## Step 5 - Set Up Ranks (Recommended)

Obsidian Essentials includes a rank and permission system. To create and manage ranks:

1. Open the **Admin Panel**.
2. Go to **Ranks Editor**.
3. Create ranks, set their permissions, colors, and priority.

To assign a rank to a player:

1. Open the **Admin Panel**.
2. Go to **Players**.
3. Select the player you want to rank.
4. Choose the rank to assign.

---

## Step 6 - Give Players the Community Panel

Players access their features through the **Community Panel** book. Players get it by typing:
```
!book
```

To automatically give the Community Panel book to players when they respawn, go to **Admin Panel → Settings → General Settings → Add-on Settings** and enable the respawn toggle.

---

## Setup Complete

Your server is now ready. For detailed configuration of each system, refer to the relevant section in this documentation:

- [Ranks & Permissions](../admin/ranks-and-permissions.md)
- [Economy](../features/economy.md)
- [Land Claims](../features/land-claims.md)
- [Kit Management](../admin/kits-management.md)
- [Warp Management](../admin/warps-management.md)
