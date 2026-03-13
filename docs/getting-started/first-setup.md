---
lastUpdated: 2026-03-13
---

# First Setup

After installing Obsidian Essentials, follow this guide to complete your initial server configuration. This only needs to be done once.

---

## Step 1 - Claim the Owner Role

The first thing you must do is designate yourself as the **server owner**. This gives you full access to every feature and permission in the add-on.

1. Make sure you are **operator (OP)** on the world or realm.
2. Join the world and open chat.
3. Run the following command exactly as written:
   ```
   /scriptevent realm:setup
   ```
4. You will receive a confirmation message that you are now set as the server owner.

> **This can only be done once.** Only the first OP to run this command will be set as owner. Choose carefully.

---

## Step 2 - Open the Admin Panel

Once you are the server owner, you have access to the Admin Panel - the central hub for all server configuration.

To open the Admin Panel:

1. Type in chat:
   ```
   !adminpanel
   ```
   or the shorter alias:
   ```
   !ap
   ```
2. A book item called **Admin Panel** will appear in your inventory.
3. Hold the book and **right-click** (or use it on mobile/console) to open the menu.

The Admin Panel is your main tool for managing every aspect of Obsidian Essentials.

---

## Step 3 - Review Feature Toggles

Before inviting players, review which features are active on your server.

1. Open the **Admin Panel**.
2. Navigate to **Feature Toggles**.
3. Enable or disable individual systems based on what you want your server to have.

Common features to review:
- **Economy System** - Enable if you want server currency and shops.
- **Land Claims** - Enable if you want players to protect their builds.
- **AFK System** - Enable if you want idle players detected and optionally kicked.
- **Anti-Cheat** - Enable to monitor for cheating behavior.
- **Kit System** - Enable if you plan to create kits for players.

---

## Step 4 - Configure General Settings

1. Open the **Admin Panel**.
2. Go to **Settings**.
3. Review and adjust:

| Setting | What It Does |
|---|---|
| **Join Message** | Customize the message shown when a player joins |
| **Spawn With Book** | Automatically give new players the Community Panel on spawn |
| **Chat Prefix** | The character used before commands (default: `!`) |
| **Chat Ranks** | Show rank tags in chat messages |
| **Money System Name** | The internal name for the currency system |

---

## Step 5 - Set Up Ranks (Recommended)

Obsidian Essentials includes a full rank and permission system. By default, several ranks come pre-configured:

- **Default** - All players start here
- **VIP** - Extra homes, reduced cooldowns
- **VIP+** - More perks than VIP
- **Helper** - Staff with limited moderation
- **Moderator** - Full moderation access
- **Admin** - Full admin access
- **Owner** - All permissions

To manage ranks:

1. Open the **Admin Panel**.
2. Go to **Ranks Editor**.
3. Review existing ranks, edit permissions, or create new custom ranks.

To assign a rank to a player:

1. Open the **Admin Panel**.
2. Go to **Players**.
3. Select the player you want to rank.
4. Choose the rank to assign.

---

## Step 6 - Set Up Spawn Protection (Optional)

If you want to protect your spawn area from being griefed:

1. Open the **Admin Panel**.
2. Go to **Spawn Protection**.
3. Configure the protection radius and rules.

---

## Step 7 - Give Players the Community Panel

Players access their features through the **Community Panel** book. Players can get this by typing:
```
!book
```

If you want players to automatically receive the Community Panel every time they spawn:

1. Open the **Admin Panel**.
2. Go to **Settings**.
3. Enable **Spawn With Book**.

---

## Setup Complete

Your server is now ready. Players can join and begin using their features immediately.

For detailed configuration of each system, refer to the relevant section in this documentation:

- [Ranks & Permissions](../admin/ranks-and-permissions.md)
- [Economy Setup](../features/economy.md)
- [Land Claims](../features/land-claims.md)
- [Kit Management](../admin/kits-management.md)
- [Warp Management](../admin/warps-management.md)
