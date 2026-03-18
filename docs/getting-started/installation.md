---
title: "Installation"
lastUpdated: 2026-03-13T18:47:00Z
---

# Installation

This guide walks you through installing Obsidian Essentials on your Minecraft Bedrock world or realm.

---

## Requirements

Before installing, make sure your setup meets these requirements:

- **Minecraft Bedrock Edition** version **1.21.0 or higher**
- A world or realm where you have **operator (OP) permissions**
- The Obsidian Essentials add-on file (`.mcaddon`)

---

## Step 1 - Import the Pack

1. Locate the Obsidian Essentials `.mcaddon` file you downloaded.
2. Double-click the file. Minecraft should open automatically and begin importing both the Behavior Pack and Resource Pack.
3. Wait for the import confirmation message to appear in Minecraft.
4. If the packs do not import automatically, close Minecraft if its open, then open the file from your file manager.

---

## Step 2 - Apply the Packs to Your World

The `.mcaddon` contains a linked Behavior Pack and Resource Pack. Activating the Behavior Pack will automatically activate the Resource Pack as well.

### For a Local World

1. Open Minecraft and go to **Play**.
2. Find your world and click the **Edit** (pencil) icon.
3. Select **Behavior Packs** from the left menu. Under **My Packs**, find **Obsidian Essentials** and click **Activate**. The Resource Pack will activate automatically.
4. Still in the world settings, scroll down to **Experiments** and make sure **Beta APIs** (also listed as **Scripting APIs** on some versions) is enabled. The add-on will not work without this.
5. Click **Play** to launch the world.

> If Minecraft prompts you to confirm enabling experiments when activating the pack, click **Activate Experiments**. If it does not prompt you, check the Experiments section manually before launching.

### For a Realm

1. Open Minecraft and go to **Realms**.
2. Select your realm and click the **Edit** (pencil) icon.
3. Go to **Behavior Packs**, find **Obsidian Essentials** under **My Packs**, and click **Activate**. The Resource Pack will activate automatically.
4. Confirm that **Beta APIs** is enabled under the **Experiments** section of the realm settings.
5. The changes will apply the next time players join the realm.

---

## Step 3 - Verify Installation

Once in the world:

1. Make sure you have **operator status** (OP).
2. Run the owner setup command. Nothing will work until this is done:
   ```
   /scriptevent realm:setup
   ```
3. Once setup is complete, type the following in chat to confirm the add-on is running:
   ```
   !version
   ```
   You should see the current version number in chat.

---

## Troubleshooting Installation

**The packs are not showing up in my pack list.**
Make sure the `.mcaddon` file imported successfully. Try closing and reopening Minecraft, then check under Behavior Packs.

**Commands are not working.**
Confirm that experimental features are enabled in your world settings. Also check that the behavior pack is actually active on the world, not just imported.

**I get an error about "Beta APIs".**
Go to your world settings, find **Experiments**, and enable **Beta APIs**. Save and relaunch.

---

## Next Steps

Once installed, move on to [First Setup](first-setup.md) to configure the add-on and claim your owner role.
