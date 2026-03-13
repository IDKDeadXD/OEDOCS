---
title: "Economy & Money System"
lastUpdated: 2026-03-13T12:00:00Z
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

If your server has a sell system configured:

**Sell a specific quantity from your hand:**
```
!sell [Amount]
```

**Sell everything in your inventory:**
```
!sell all
```

Prices are set by the server administrator through the Player Shops system.

---

## Death Money (Optional)

If enabled by the server administrator, a set amount of money is dropped when a player dies.

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
| **Kill/Death Money Drop** | Enable or disable money dropping on death |
| **Death Drop Amount** | How much money drops when a player dies |
