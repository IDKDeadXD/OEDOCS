---
title: "Lag Zapper"
lastUpdated: 2026-03-13T12:00:00Z
---

# Lag Zapper

The Lag Zapper automatically removes all dropped items from the Overworld on a configurable interval to reduce entity lag. It can be enabled for continuous automatic cleanup or left disabled for manual use only.

---

## Configuring the Lag Zapper

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Lag Zapper**.
3. Set the **Ground Item Clear Interval** (e.g., `1m`, `30s`, `5m 20s`).
4. Toggle **Enabled** on or off.
5. Save.

---

## Automatic Mode

When enabled, the Lag Zapper runs on the interval you configured. Before each cleanup:

- A warning message is broadcast to all players: **"Clearing ground items in 10 seconds..."**
- A 3-2-1 countdown is shown in the final seconds.
- All dropped items in the **Overworld** are then removed.

The 10-second warning gives players time to pick up any items they care about.

---

## What Gets Removed

Only **dropped item entities** in the **Overworld** are removed. Mobs, armor stands, and items in other dimensions (Nether, End) are not affected.

---

## When to Use It

- Set a regular interval (e.g., every 5 minutes) to keep the Overworld clean during active play.
- Disable auto-cleanup and configure it manually if your server has sensitive item drops (e.g., events or giveaways).

---

## Notes

- Removed dropped items cannot be recovered.
- The Lag Zapper only affects the Overworld dimension.
- Default interval: 60 seconds (disabled by default).
