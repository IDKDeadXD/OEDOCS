---
lastUpdated: 2026-03-13T12:00:00Z
---

# Item Banning

The Item Banning system allows administrators to prevent specific items from existing in player inventories. When a banned item is detected, it is automatically removed. The check runs once per second.

---

## Managing Banned Items

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Item Banning**.
3. From here you can:
   - View the current list of banned items
   - Add items to the ban list
   - Remove items from the ban list

---

## How It Works

The system scans all online player inventories every second. If a player is found carrying a banned item, it is removed from their inventory automatically. The player may receive a notification.

---

## Use Cases

- Preventing players from obtaining admin-only items
- Removing overpowered or exploitable items from circulation
- Enforcing server-specific item restrictions

---

## Notes

- Players with the `admin` tag are exempt from item banning by default.
- Regular players have banned items removed automatically without exception.
- This system runs continuously in the background while the server is active.
