---
lastUpdated: 2026-03-13
---

# Ranks & Permissions

Obsidian Essentials includes a full rank and permission system. Ranks control what players can do - from how many homes they can set, to whether they can use admin commands. This page explains how to manage ranks and assign them to players.

---

## Default Ranks

The add-on comes with several pre-configured ranks:

| Rank | Description |
|---|---|
| **Default** | All players start here. Basic access to player features. |
| **Cosmetic** | Slightly enhanced player with access to color codes in chat. |
| **VIP** | Enhanced player with more homes, kit access, warp access, and shop discounts. |
| **VIP+** | Further enhanced player with even more homes and extended AFK bypass. |
| **Helper** | Staff rank with some moderation capabilities. |
| **Moderator** | Full moderation access including kick, ban, and warnings. |
| **Admin** | Full access to all admin commands and the Admin Panel. |
| **Owner** | All permissions. Set only once via `/scriptevent realm:setup`. |

---

## Assigning a Rank to a Player

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Players**.
3. Select the player you want to rank.
4. Navigate to their rank options.
5. Choose the rank to assign.

The change takes effect immediately. The player does not need to relog.

---

## Creating a Custom Rank

1. Open the **Admin Panel**.
2. Go to **Ranks Editor**.
3. Click **Create Rank**.
4. Enter a name for the rank.
5. Set a **color** for the rank tag (used in chat and nameplates).
6. Set a **priority** number. Higher priority numbers appear first when a player has multiple ranks.
7. Configure the rank's **permissions** (see below).
8. Save the rank.

---

## Rank Priority

If a player has more than one rank, the rank with the **highest priority number** is displayed as their primary rank in chat. Rank effects (such as homes limit) are applied from the highest-priority rank the player holds.

Default priority values:
- Owner: 1000
- Admin: 200
- Moderator: 150
- Helper: 100
- VIP+: 75
- VIP: 50
- Cosmetic: 10
- Default: 0

---

## Permission Reference

When creating or editing a rank, you configure a set of permissions that control what that rank can and cannot do.

### Homes Permissions

| Permission | What It Controls |
|---|---|
| **Max Homes** | How many homes players of this rank can save |
| **Teleport Delay** | Countdown (seconds) before home teleport |

### Land Claims Permissions

| Permission | What It Controls |
|---|---|
| **Can Claim** | Whether players of this rank can claim land |
| **Max Claims** | How many chunks players of this rank can claim |
| **Claim Cost Multiplier** | Cost modifier for claiming (1.0 = normal, 0.5 = half price) |

### TPA Permissions

| Permission | What It Controls |
|---|---|
| **Can Use TPA** | Whether players of this rank can send/receive TPA requests |
| **Teleport Delay** | Countdown before TPA teleport |
| **Cooldown** | Seconds between TPA requests |

### Kit Permissions

| Permission | What It Controls |
|---|---|
| **Accessible Kits** | Which kits this rank can claim (use `*` for all) |
| **Cooldown Multiplier** | Modifies kit cooldown (e.g., 0.5 = half cooldown) |

### Warp Permissions

| Permission | What It Controls |
|---|---|
| **Can Use Warps** | Whether players of this rank can use public warps |
| **Accessible Warps** | Which warps this rank can access (use `*` for all) |
| **Teleport Delay** | Countdown before warp teleport |

### Chat Permissions

| Permission | What It Controls |
|---|---|
| **Can Chat** | Whether players of this rank can send chat messages |
| **Can Use Color Codes** | Whether players can use color formatting in chat |
| **Can Use Player Commands** | Whether players can use `!` commands |
| **Allowed Player Commands** | Specific commands allowed (use `*` for all) |
| **Bypass Cooldowns** | Whether this rank skips command cooldowns |

### AFK Permissions

| Permission | What It Controls |
|---|---|
| **AFK Kick Bypass** | Whether this rank is exempt from AFK auto-kick |
| **Extended AFK Time** | Whether this rank gets a longer AFK timeout |

### Moderation Permissions

| Permission | What It Controls |
|---|---|
| **Can Mute** | Whether this rank can mute players |
| **Can Ban** | Whether this rank can ban players |
| **Can Kick** | Whether this rank can kick players |
| **Can Bypass Protection** | Whether this rank can build in protected areas |
| **Can Use Admin Commands** | Whether this rank can use admin chat commands |
| **Allowed Admin Commands** | Specific admin commands allowed (use `*` for all) |
| **Can Use Admin Panel** | Whether this rank can open the Admin Panel |

### Shop Permissions

| Permission | What It Controls |
|---|---|
| **Can Use Shops** | Whether this rank can buy/sell in shops |
| **Discount Multiplier** | Price modifier for shops (e.g., 0.9 = 10% discount) |

---

## Removing a Rank from a Player

1. Open the **Admin Panel**.
2. Go to **Players**.
3. Select the player.
4. Navigate to their rank options.
5. Remove the desired rank.

---

## Notes

- Players can hold multiple ranks simultaneously.
- When a player holds multiple ranks, the highest-priority rank's permissions take precedence for display purposes, but feature limits (such as homes) follow their active highest rank.
- Setting a permission's allowed list to `*` grants access to everything within that category.
- Setting a permission's allowed list to an empty list (`[]`) grants access to nothing.
