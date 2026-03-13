---
lastUpdated: 2026-03-13T12:00:00Z
---

# Teleportation

Obsidian Essentials provides several ways for players to teleport around the world: random teleportation, player-to-player teleport requests, and public warps created by admins.

---

## Random Teleport (RTP)

Random Teleport sends you to a random safe location in the world.

```
!rtp
```

After running this command, the system immediately begins searching for a safe landing spot and teleports you as soon as one is found. A "Finding a safe location..." message appears on your screen while it searches.

The system avoids unsafe surfaces including water, lava, magma blocks, and cactus. It also avoids underground locations by default.

**Cooldown:** After using RTP, you must wait before using it again (default: 5 minutes). The cooldown is configured by the server administrator.

**Admin Bypass:** Admins are exempt from the RTP cooldown by default.

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
!accept
```

Once accepted, the requesting player will begin their teleport countdown and be teleported to you.

### Denying a Request

To reject an incoming TPA request:
```
!deny
```

The requesting player will be notified that their request was denied.

> TPA requests expire after 120 seconds if not responded to. There is a 60-second cooldown between sending requests.

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

Home, TPA, and warp teleports include a short countdown (default: 5 seconds) before the teleport happens. During this time:

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
| **RTP Range** | Maximum distance from world center for RTP (default: 10,000) |
| **RTP Cooldown** | Seconds players must wait between RTPs (default: 300) |
| **Admin Bypass** | Admins skip RTP cooldown (default: on) |
| **TPA Enabled** | Turn the TPA request system on or off |
| **Teleport Delay** | Default countdown before home/TPA/warp teleports (default: 5s) |
