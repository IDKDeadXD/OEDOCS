---
lastUpdated: 2026-03-13T12:00:00Z
---

# Anti-Cheat System (Obsidian Guard)

Obsidian Essentials includes a built-in anti-cheat system called **Obsidian Guard**. It runs in the background, watching for known cheat patterns, and alerts online administrators when something is flagged.

---

## What It Detects

Obsidian Guard monitors for the following types of cheating:

| Detection | What It Catches |
|---|---|
| **CPS Monitoring** | Unusually high click-per-second rates (auto-clickers) |
| **Fall Damage Bypass** | Players taking no damage from large falls |
| **Flying Detection** | Players moving through the air without being in a gamemode that allows flight |

---

## How It Works

The system runs in the background. When a player is flagged:

1. A **violation** is recorded for that player.
2. **Online admins are alerted** in chat with details about the violation.
3. The violation is **logged** so it can be reviewed later.

The system also tracks **repeat offenses**. If a player triggers multiple violations in a short time window, that is noted in the alert.

Obsidian Guard does not automatically punish players. It notifies admins, who can then review and decide what action to take.

---

## Responding to Alerts

When you receive an anti-cheat alert:

1. Review the violation details in chat.
2. Observe the player in-game (consider using vanish mode with `!vanish` to watch without being seen).
3. Use your judgement. Not every flag means the player is cheating.
4. If you confirm it, take action using the [Moderation Tools](moderation.md) (warn, kick, or ban).

False positives can occasionally occur, especially with lag. Always verify before taking action.

---

## Viewing Violation History

To review logged violations for a specific player:

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Players**.
3. Select the player.
4. Their violation history will be available for review.

---

## Admin: Configuring the Anti-Cheat

Anti-cheat settings can be adjusted from the **Admin Panel**:

1. Open the **Admin Panel**.
2. Go to **Settings** (or Anti-Cheat Settings if listed separately).
3. Configure the available options:

| Setting | What It Controls |
|---|---|
| **System Enabled** | Turn the entire anti-cheat system on or off |
| **CPS Threshold** | How many clicks per second triggers an alert |
| **Other Thresholds** | Detection sensitivity for other cheat types |

---

## Notes

- Admins and players with bypass permissions are excluded from anti-cheat monitoring.
- The anti-cheat is designed to be a detection and alerting tool, not an automatic punishment system.
- If you find the system generating too many false positives, try adjusting the detection thresholds in the settings.
