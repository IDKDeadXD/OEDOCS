---
title: "Homes"
lastUpdated: 2026-03-13T6:39:00Z
---

# Homes

The Homes system lets players save locations in the world and teleport back to them at any time. This is useful for marking your base, a farm, a mine, or any place you want to return to quickly.

---

## Setting a Home

To save your current location as a home, type:
```
!addhome [name]
```

**Example:**
```
!addhome base
!addhome farm
!addhome mine1
```

Home names must be a single word with no spaces. The home is saved at the exact spot where you are standing, including which dimension you are in (Overworld, Nether, or End).

---

## Teleporting to a Home

To teleport to one of your saved homes:
```
!home [name]
```

**Example:**
```
!home base
```

After typing the command, a **countdown timer** will begin. You must stay still during this countdown. If you move too far from your starting position, the teleport will be cancelled.

---

## Listing Your Homes

To see all of your saved homes:
```
!listhomes
```

This shows the name and location of each saved home.

You can also access your homes through the **Community Panel**:
1. Type `!book` to open the Community Panel.
2. Select **Homes**.
3. Your homes will be listed and can be selected to teleport or delete.

---

## Deleting a Home

To remove a saved home:
```
!deletehome [name]
```

**Example:**
```
!deletehome mine1
```

This permanently removes that home. It cannot be recovered.

---

## Home Limit

Each player has a maximum number of homes they can save. The default limit is determined by the server administrator. Players with higher ranks may have a larger home limit.

If you try to add a home when you are at your limit, you will receive an error message. Delete an existing home first to make room.

---

## Admin: Managing Player Homes

Administrators can view and manage all player homes from the Admin Panel:

1. Open the **Admin Panel** (`!adminpanel`).
2. Navigate to **Players**.
3. Select the player whose homes you want to manage.
4. Their saved homes will be listed and can be reviewed or removed.

---

## Admin: Homes Settings

Administrators can configure the Homes system in **Admin Panel > Settings**:

| Setting | What It Controls |
|---|---|
| **Homes Enabled** | Turn the entire homes system on or off |
| **Homes Limit** | Default maximum number of homes for all players |
| **Teleport Delay** | How many seconds players must wait before teleporting |

Per-rank home limits can be configured in **Admin Panel > Ranks Editor** by adjusting the `homes.maxHomes` permission for each rank.
