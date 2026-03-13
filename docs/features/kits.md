---
title: "Kit System"
lastUpdated: 2026-03-13T12:00:00Z
---

# Kit System

Kits are pre-configured sets of items that players can claim in-game. Server administrators create kits by saving their current inventory as a kit. Players can then use a command to receive the kit's contents.

---

## Claiming a Kit

To claim a specific kit:
```
!kit [KitName]
```

**Example:**
```
!kit starter
!kit pvp
```

The items from that kit will be added to your inventory. If your inventory does not have enough space, some items may be dropped on the ground near you.

---

## Viewing Available Kits

To see which kits you have access to:
```
!kits
```

This displays a list of available kits along with their cooldown status - whether you can claim them now or must wait.

---

## Kit Cooldowns

Each kit has a cooldown period. After claiming a kit, you must wait until the cooldown expires before you can claim it again.

Your cooldown time may be shorter than other players if your rank includes a cooldown multiplier reduction. Higher ranks (such as VIP or VIP+) often receive reduced cooldowns.

---

## Kit Access by Rank

Not every kit is available to every player. The server administrator controls which ranks can access which kits. For example:

- A **starter** kit might be available to all players.
- A **vip** kit might only be accessible to VIP and above.
- A **staff** kit might only be accessible to Helper and above.

If a kit does not appear in your `!kits` list, you do not have access to it with your current rank.

---

## Admin: Creating a Kit

Administrators create kits by filling their inventory with the desired items and then saving it:

```
!save-kit [KitName]
```

**Example:**
```
!save-kit starter
```

This saves your entire current inventory as the kit. Make sure you have exactly the items you want in the kit before running this command.

---

## Admin: Managing Kits

Administrators can manage all kits through the **Admin Panel**:

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Kits Config**.
3. From here you can:
   - View all existing kits
   - Delete a kit
   - Set cooldown duration for each kit
   - Configure which ranks have access to each kit

---

## Notes

Kits are accessed exclusively through chat commands (`!kit`, `!kits`). There is no Kits button on the Community Panel.
