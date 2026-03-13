---
title: "Frequently Asked Questions"
lastUpdated: 2026-03-13T12:00:00Z
---

# Frequently Asked Questions

---

## General

**What is Obsidian Essentials?**
Obsidian Essentials is a Minecraft Bedrock behavior pack add-on that adds server management tools, player features, an economy, land claims, ranks, and more. Everything is controlled from inside the game.

**What version of Minecraft does it require?**
Obsidian Essentials requires Minecraft Bedrock Edition **1.21.0 or higher**.

**Does it work on Realms?**
Yes. Obsidian Essentials is designed to work on both local worlds and Minecraft Realms.

**Does the add-on require experimental features?**
Yes. The **Beta APIs** (Scripting APIs) experimental feature must be enabled in your world settings for the add-on to function.

---

## Setup

**How do I become the server owner?**
After installing the add-on and joining your world as an OP, run this command in chat:
```
/scriptevent realm:setup
```
This designates you as the server owner with full access to all features.

**Can I change the owner later?**
No. The owner designation is permanent and cannot be reassigned once set. Only the original owner of the realm or world should run this command.

**How do players get the Community Panel?**
Players type `!book` in chat to receive the Community Panel. Admins can also enable **Spawn With Book** in the Settings so players automatically receive it on respawn.

**My commands aren't working. What do I check?**
1. Confirm the behavior pack is active on your world.
2. Confirm experimental features (Beta APIs) are enabled.
3. Check that the add-on completed setup - run `/scriptevent realm:setup` if you haven't already.
4. Confirm you are using the correct command prefix (default: `!`).

---

## Economy

**How do players get money?**
Money is managed by administrators. They add money to player balances through the Admin Panel. Players can also earn money by selling items or receiving payments from other players.

**Can players lose money?**
Yes, if the death money drop feature is enabled, a set amount is dropped on death. Players can also spend money in shops or send it to others via `!pay`.

**What happens if I withdraw money and drop the item?**
The money item works like any other Minecraft item - if it is not picked up, it will eventually despawn.

---

## Homes

**How many homes can I have?**
The number of homes you can save depends on your rank. Check with your server administrator. Type `!listhomes` to see how many you currently have.

**My teleport was cancelled. Why?**
You moved too far from your starting position during the countdown. Stay still for the full countdown duration.

**Can I have a home in the Nether?**
Yes. Homes remember which dimension they were set in.

---

## Land Claims

**How big is a land claim?**
Each claim covers one chunk: a 16×16 block area that extends the full height of the world.

**Can other players build in my claimed area?**
No, other players cannot build or break blocks in your claimed chunks unless you give them permission.

**How do I see my claim borders?**
Claim boundary particles appear near the edges of claimed chunks to show the protected area.

---

## Ranks

**How do I get a rank?**
Ranks are assigned by server administrators. Contact your admin if you believe you should have a rank.

**Why can't I use certain commands?**
Your current rank may not have permission for those commands. Type `!help` to see commands available to you.

**Can I have more than one rank?**
Yes. Players can hold multiple ranks simultaneously.

---

## Kits

**Why doesn't my kit appear in `!kits`?**
Your rank may not have access to that kit. Each kit has rank restrictions configured by the server administrator.

**Why can't I claim my kit again?**
Each kit has a cooldown. Wait until the cooldown expires before claiming again.
