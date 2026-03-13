---
title: "Kit Management"
lastUpdated: 2026-03-13T12:00:00Z
---

# Kit Management

Administrators create and manage item kits that players can claim in-game. Kits are configured through both chat commands and the Admin Panel.

---

## Creating a Kit

1. Fill your inventory with the exact items you want the kit to contain.
2. Type in chat:
   ```
   !save-kit [KitName]
   ```
   **Example:**
   ```
   !save-kit starter
   ```
3. Your entire current inventory is saved as that kit.

> Make sure your inventory contains only the items intended for the kit before saving.

---

## Configuring a Kit

After creating a kit, configure it through the Admin Panel:

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Kits Config**.
3. Select the kit you want to configure.
4. Set the following options:
   - **Cooldown** - How long players must wait between claims
   - **Accessible Ranks** - Which ranks can claim this kit

---

## Deleting a Kit

1. Open the **Admin Panel**.
2. Go to **Kits Config**.
3. Select the kit.
4. Choose the delete option.

---

## Kit Access by Rank

Kit access is controlled per rank through **Admin Panel > Ranks Editor**:

- Set `kits.accessibleKits` to a list of kit names the rank can access.
- Use `*` to grant access to all kits.
- Set `kits.cooldownMultiplier` to modify the cooldown time for that rank (e.g., `0.5` = half the cooldown).

---

## Related Player Commands

| Command | Description |
|---|---|
| `!kits` | Lists all kits a player has access to |
| `!kit [KitName]` | Claims a specific kit |
