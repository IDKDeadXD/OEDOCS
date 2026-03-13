---
title: "Troubleshooting"
lastUpdated: 2026-03-13T12:00:00Z
---

# Troubleshooting

Common issues with Obsidian Essentials and how to fix them.

---

## The Add-On Is Not Working At All

**Symptoms:** Commands do nothing. Menus do not open. No response to `!help`.

**Solutions:**
1. Confirm the behavior pack is **active** on your world (not just imported - it must be activated in the world's settings).
2. Go to your world settings and confirm **Beta APIs** (Scripting APIs) is enabled under **Experiments**.
3. Relaunch the world after making any changes to pack or experiment settings.
4. Confirm you are OP on the world, then run `/scriptevent realm:owner` if setup has not been completed.

---

## "Server must be set up first" Message

**Cause:** The initial owner setup has not been completed.

**Solution:** An OP player must run:
```
/scriptevent realm:owner
```
This only needs to be done once. Only the person who should be the permanent server owner should do this.

---

## Commands Are Not Being Recognized

**Symptoms:** Typing `!help` sends the message to chat instead of triggering a command.

**Solutions:**
- Confirm the command prefix on your server. The default is `!` but your admin may have changed it. Ask your server administrator what the current prefix is.
- If the pack is freshly installed, wait a moment after joining for the scripts to fully initialize, then try again.

---

## The Admin Panel Will Not Open

**Symptoms:** The book item does nothing when used, or you receive a "no permission" message.

**Solutions:**
- Confirm you have admin permissions or the `Admin` tag assigned to your account.
- If the rank system is enabled, confirm your rank has `moderation.canUseAdminPanel` set to `true`.
- If you are the server owner but cannot access the panel, check that `/scriptevent realm:owner` was completed successfully.

---

## Teleport Was Cancelled

**Cause:** You moved too far from your starting position during the countdown.

**Solution:** Stay completely still for the full duration of the countdown. Even small movements may cancel the teleport depending on server settings.

---

## Kit Is Missing From the List

**Cause:** Your rank does not have access to that kit, or the kit system is disabled.

**Solution:**
- Type `!kits` and only kits available to your rank will appear.
- If you believe you should have access, contact your server administrator.

---

## Land Claim Not Working (Others Can Still Build)

**Cause:** The land claim system may not be enabled, or the specific chunk was not successfully claimed.

**Solutions:**
- Confirm the Land Claims feature is enabled in **Admin Panel > Feature Toggles**.
- Type `!myclaims` and verify the chunk is listed as a claimed area.
- Check that you are standing inside the claimed chunk, not adjacent to it.

---

## Economy Balance Is Missing / Shows Zero

**Cause:** The player may not have had their balance initialized yet.

**Solution:** Balances are initialized the first time a player joins. If a returning player shows zero, an administrator can adjust the balance through **Admin Panel > Players**.

---

## Chat Is Locked

**Cause:** An administrator has locked the chat.

**Solution:** Wait for an admin to unlock it. If you are an admin and chat is stuck locked, run:
```
/scriptevent realm:chatlock.disable
```

---

## AFK Auto-Kick Is Kicking Staff

**Cause:** The staff rank does not have the AFK kick bypass permission.

**Solution:** In **Admin Panel > Ranks Editor**, find the staff rank and enable `afk.kickBypass` for that rank.

---

## Still Having Issues?

If none of the above solutions resolve your problem, check whether the issue is related to a recent Minecraft update changing API behavior. For further support, contact the add-on developer through the official Discord server (found using `!info` in chat).
