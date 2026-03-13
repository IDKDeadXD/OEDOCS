---
title: "Warp Management"
lastUpdated: 2026-03-13T18:58:00Z
---

# Warp Management

Obsidian Essentials supports two types of warps: **Public Warps** accessible to all players, and **Admin Warps** accessible only to administrators.

---

## Public Warps

Public warps are teleport destinations that any player can access through the Community Panel.

### Creating a Public Warp

1. Go to the location where you want to place the warp.
2. Open the **Admin Panel** (`!adminpanel`).
3. Go to **Public Warps**.
4. Select the option to create a new warp.
5. Enter a name for the warp.
6. The warp is saved at your current location.

### Managing Public Warps

From **Admin Panel > Public Warps** you can:
- View all existing public warps
- Edit warp names or locations
- Delete warps

### Player Access

Players access public warps through the **Community Panel**:
1. Type `!book` to open the Community Panel.
2. Select **Warps**.
3. Choose a warp from the list.

Access to specific warps can be restricted per rank through **Admin Panel > Ranks Editor** using the `warps.accessibleWarps` permission.

---

## Admin Warps

Admin Warps are private teleport points only visible and accessible to administrators.

### Creating an Admin Warp

1. Go to the location you want to save.
2. Open the **Admin Panel**.
3. Go to **Admin Warps**.
4. Select the option to create a new admin warp.
5. Enter a name and save.

### Managing Admin Warps

From **Admin Panel > Admin Warps** you can:
- View all admin warps
- Teleport to any admin warp
- Delete admin warps

---


## Warp Permissions (Admin)

Per-rank warp access is configured in **Admin Panel > Ranks Editor**:

| Permission | What It Controls |
|---|---|
| **Can Use Warps** | Whether the rank can access public warps |
| **Accessible Warps** | Which specific warps the rank can use (use `*` for all) |
| **Teleport Delay** | Countdown before the warp teleport occurs |
