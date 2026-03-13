---
lastUpdated: 2026-03-13
---

# Land Claims

The Land Claim system lets players protect areas of the world by claiming chunks. A claimed chunk prevents other players from building, breaking, or interacting in that area without permission.

---

## What Is a Chunk?

A chunk is a 16×16 block section of the world that extends from the bottom of the world to the top (the full world height). When you claim a chunk, the entire vertical column of that 16×16 area is protected.

---

## Claiming a Chunk

To claim the chunk you are currently standing in:
```
!claim
```

If claiming has a cost enabled on your server, the money will be deducted from your balance automatically. If you cannot afford it, the claim will be rejected.

The chunk borders will be shown with particles so you can see exactly what area you have claimed.

---

## Viewing Your Claims

To see and manage all of your claimed chunks:
```
!myclaims
```

This opens a menu showing all your active claims. From here you can review claim details and manage individual claims.

You can also access claims through the **Community Panel**:
1. Type `!book` to open the Community Panel.
2. Navigate to find your claims.

---

## Unclaiming a Chunk

To remove your claim from the chunk you are standing in:
```
!unclaim
```

Once unclaimed, the area is no longer protected and other players can build there.

---

## Claim Limits

Each player can only claim a limited number of chunks, determined by the server administrator. Players with higher ranks may have a larger claim limit.

If you try to claim when you are at your limit, you will receive an error message.

---

## Claim Protections

When a chunk is claimed:

- **TNT** - If TNT protection is enabled, explosions within your claimed chunk are prevented.
- **Building / Breaking** - Other players cannot place or break blocks inside your claimed chunk.
- **Interactions** - Other players cannot interact with your builds (chests, doors, etc.) unless you grant permission.

---

## Claim Borders

When you are near a claimed chunk, particle effects may appear along the borders to show where the claim boundary is. This helps you see exactly where protection begins and ends.

---

## Admin: Managing All Claims

Administrators can view and manage all player claims across the entire server:

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Land Claims**.
3. Browse, review, or remove any player's claim.

Admins can bypass claim protection by default and build anywhere regardless of claims.

---

## Admin: Land Claim Settings

Administrators configure the Land Claim system in the **Admin Panel > Settings** area. Available settings include:

| Setting | What It Controls |
|---|---|
| **Max Claims Per Player** | Default number of chunks each player can claim |
| **Claim Cost Enabled** | Whether claiming a chunk costs money |
| **Cost Per Chunk** | How much money each claim costs |
| **TNT Protection** | Whether TNT explosions are blocked inside claims |
| **Particle Borders** | Whether claim boundary particles are shown |

Per-rank claim limits can also be set in **Admin Panel > Ranks Editor**.
