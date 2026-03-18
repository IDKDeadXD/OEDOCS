---
title: "Redemption Codes"
lastUpdated: 2026-03-13T18:47:00Z
---

# Redemption Codes

Redemption codes are special codes that players can enter to receive in-game rewards. Server administrators create the codes and control what reward is granted when a code is redeemed.

---

## Redeeming a Code

If you have been given a code, use this command to redeem it:
```
!code [CodeID]
```

**Example:**
```
!code vip20
!code giveaway2024
```

If the code is valid and still has uses remaining, you will receive the associated reward immediately. You will also see a confirmation message in chat.

If the code has already been used up, or if you have already redeemed it (on servers where each player can only redeem a code once), you will receive an error message.

---

## Admin: Creating a Code

Administrators can create redemption codes with this command:
```
!addcode [CodeID] [MaxUses] [OncePerPlayer?] [Command]
```

**Parameters:**
- **CodeID** - The code players will type (no spaces, e.g. `vip20`)
- **MaxUses** - Total number of times the code can be redeemed across all players
- **OnePerPlayer** - `true` means each player can only redeem it once; `false` allows unlimited per player
- **Command** - The Minecraft command to run when the code is redeemed (targets the redeeming player)

**Example:**
```
!addcode vip20 1 false give @s diamond 64
```

This creates a code `vip20` that can be used once total, and when redeemed it gives the player 64 diamonds.

---

## Admin: Viewing Active Codes

To see all currently active codes:
```
!listcodes
```

This shows each code's ID, remaining uses, and configuration.

---

## Admin: Deleting a Code

To remove a code before it runs out of uses:
```
!deletecode [CodeID]
```

**Example:**
```
!deletecode vip20
```

The code will immediately become invalid and cannot be redeemed by anyone after deletion.

---

## Notes for Admins

- Codes are case-sensitive. Players must type the code exactly as it was created.
- The command you attach to a code runs with server-level permissions, so any valid command can be used as the reward.
- Use codes for giveaways, event rewards, rank upgrades, or any other server promotion.
