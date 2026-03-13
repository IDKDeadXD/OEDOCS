---
lastUpdated: 2026-03-13
---

# Teleportation

Obsidian Essentials provides several ways for players to teleport around the world: random teleportation, player-to-player teleport requests, and public warps created by admins.

---

## Random Teleport (RTP)

Random Teleport sends you to a random safe location in the world.

```
!rtp
```

After running this command:

1. A countdown timer begins.
2. You must stay still during the countdown. Moving too much will cancel the teleport.
3. Once the countdown finishes, you are teleported to a random location.

The system automatically searches for a safe landing spot - it avoids water, lava, and other hazardous surfaces.

**Cooldown:** After using RTP, you must wait a set amount of time before using it again. The cooldown is configured by the server administrator.

**Admin Bypass:** Admins may be exempt from the RTP cooldown, depending on server settings.

---

## Teleport Requests (TPA)

TPA lets you request to teleport to another player's location. The other player must accept before the teleport occurs.

### Sending a Request

```
!tpa [PlayerName]
```

**Example:**
```
!tpa Steve
```

The other player will receive a notification that you want to teleport to them. They can accept or deny the request.

### Accepting a Request

If someone sends you a TPA request, accept it with:
```
!tpaccept
```

Once accepted, the requesting player will begin their teleport countdown and be teleported to you.

### Denying a Request

To reject an incoming TPA request:
```
!tpdeny
```

The requesting player will be notified that their request was denied.

> TPA requests expire after a set amount of time if not responded to.

---

## Public Warps

Admins can create public warp points that any player can teleport to. Examples include spawn, a shopping district, a PvP arena, or community builds.

To access warps, open the **Community Panel**:
1. Type `!book` to open the Community Panel.
2. Select **Warps**.
3. A list of available warps will appear.
4. Select a warp to teleport to it.

You can only teleport to warps that the administrator has made accessible to your rank.

---

## Teleport Delay

Most teleports include a short countdown (typically 5 seconds) before the teleport happens. During this time:

- You must remain (mostly) still.
- Moving too far from your starting position will cancel the teleport.
- You will receive a message if the teleport is cancelled.

This delay exists to prevent teleporting out of dangerous situations unfairly in PvP or other scenarios.

---

## Admin Warps

Admins have access to a separate set of **Admin Warps** that are not visible to regular players. These are useful for quickly moving between administrative areas of the server.

To manage admin warps:
1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Admin Warps**.
3. Create, edit, or delete admin-only warp points.

See [Warp Management](../admin/warps-management.md) for full details.

---

## Admin: Teleport Settings

Administrators can configure teleportation in the **Admin Panel > Settings**:

| Setting | What It Controls |
|---|---|
| **RTP Enabled** | Turn Random Teleport on or off |
| **RTP Range** | Maximum distance from world center for RTP |
| **RTP Cooldown** | Seconds players must wait between RTPs |
| **RTP Countdown** | Countdown seconds before RTP teleport |
| **Admin Bypass** | Admins skip RTP cooldown |
| **TPA Enabled** | Turn the TPA request system on or off |
| **Teleport Delay** | Default countdown before most teleports |
