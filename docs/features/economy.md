---
title: "Economy & Money System"
lastUpdated: 2026-03-18T13:39:00Z
---

# Economy & Money System

Obsidian Essentials includes a server-wide currency system that lets players earn, spend, transfer, and withdraw money. Administrators can manage player balances directly through the Admin Panel.

---

## Checking Your Balance

To see how much money you have:
```
!balance
```
or the alias:
```
!bal
```

Your current balance will be displayed in chat.

---

## Paying Another Player

To send money to another player:
```
!pay [PlayerName] [Amount]
```

**Example:**
```
!pay Steve 500
```

This transfers 500 from your balance to Steve's. The transaction is confirmed in chat for both players.

> You cannot pay more than your current balance. Negative balances are not allowed.

---

## Withdrawing Money as an Item

You can convert your money into a physical money item that can be given to or picked up by other players:
```
!withdraw [Amount]
```

**Example:**
```
!withdraw 200
```

A money item will appear in your inventory. When another player picks it up, the value is added to their balance.

---

## Selling Items

`!sell` works with **server shops only** — these are admin-configured shops with fixed prices per item. It does not work with player-owned shops.

**Sell a specific quantity from your hand:**
```
!sell [Amount]
```

**Sell everything applicable in your inventory:**
```
!sell all
```

Prices are set by the server administrator.

---

## PvP Money (Optional)

If enabled, when a player kills another player, a set amount of money is taken from the killed player and given to the killer. The amount is configured by the server administrator.

---

## Admin: Managing Player Balances

Administrators manage player balances through the **Admin Panel**:

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Players**.
3. Select the player.
4. Adjust their balance from the player management menu.

---

## Admin: Economy Settings

Administrators configure the economy system through **Admin Panel > Settings**:

| Setting | What It Controls |
|---|---|
| **Money System Name** | Internal name of the currency scoreboard |
| **PvP Money** | Enable or disable money transfer on player kill |
| **PvP Money Amount** | How much is taken from the killed player and given to the killer |
