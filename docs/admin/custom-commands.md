---
title: "Custom Commands"
lastUpdated: 2026-03-13T12:00:00Z
---

# Custom Commands

The Custom Commands system lets administrators create their own chat commands that run Minecraft commands when triggered. Good for shortcuts, info commands, reward commands, and similar things. No coding needed.

---

## Creating a Custom Command

1. Open the **Admin Panel** (`!adminpanel`).
2. Go to **Custom Commands**.
3. Select the option to create a new command.
4. Fill in the following:
   - **Command Name** - The word players type after the `!` prefix
   - **Description** - A short explanation of what the command does
   - **Command to Execute** - The Minecraft command that runs when the command is used
   - **Command Type** - Whether it is a player command or an admin command
5. Save the command.

The command is immediately available in chat once saved.

---

## Player vs Admin Commands

- **Player commands** are accessible to all players (subject to their rank's allowed command list).
- **Admin commands** are only accessible to players with admin permissions.

---

## Viewing Custom Commands

All custom commands appear in the `!help` list alongside built-in commands (for players) or in `!adminhelp` (for admin-type custom commands).

---

## Editing or Deleting Custom Commands

1. Open the **Admin Panel**.
2. Go to **Custom Commands**.
3. Select the command you want to edit or delete.
4. Make your changes or confirm the deletion.

---

## Notes

- Custom command names must not conflict with built-in commands.
- The executed command runs with the server's permission level, so any valid Minecraft command can be used.
- Custom commands let you add server-specific functionality without modifying the add-on itself.
