---
lastUpdated: 2026-03-13T12:00:00Z
---

# Spawn Protection

Spawn Protection lets administrators define named circular protection zones anywhere in the world. Each zone prevents players from building or breaking within its radius, with configurable per-area behavior.

---

## Creating a Protection Area

1. Go to the location you want to protect (or position yourself near it).
2. Open the **Admin Panel** (`!adminpanel`).
3. Go to **Spawn Protection**.
4. Select the option to create a new area.
5. Enter a **name** for the area (e.g., `spawn`, `arena`, `shop`).
6. Set a **radius** (5–200 blocks).
7. Choose whether to use your current position or the world spawn point as the center.
8. Choose whether to enable the area immediately.

---

## Per-Area Settings

Each protection area has its own set of toggles:

| Setting | Default | What It Does |
|---|---|---|
| **Send Entry/Exit Messages** | On | Tells players when they enter or leave the protected area |
| **Set Adventure Mode** | On | Switches players to Adventure mode inside the area, preventing block breaking/placing |
| **Admin Bypass** | On | Admins are not affected by the protection effects |
| **Give Saturation** | Off | Feeds players inside the area so they do not lose hunger |
| **Apply Effect (Regeneration)** | Off | Applies Regeneration and Absorption to players in the area |
| **Kill Hostile Mobs** | Off | Automatically removes hostile mobs that enter the area |

---

## Managing Areas

From **Admin Panel > Spawn Protection** you can:
- View all existing protection areas
- Edit an area's settings
- Enable or disable individual areas
- Delete areas

---

## Multiple Protection Areas

You can create as many named protection areas as you need. Each area is independent and can have different settings. For example, you might create:
- `spawn` — Adventure mode + entry message
- `arena` — No effects, just mob killing
- `shop` — Saturation + regeneration for a comfortable shopping area

---

## Notes

- Protection areas are circular (radius-based), not chunk-based.
- The system works independently of the Land Claims system.
- Admins bypass protective effects (Adventure mode, etc.) by default when **Admin Bypass** is enabled on the area.
