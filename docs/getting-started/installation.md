---
lastUpdated: 2026-03-13
---

# Installation

This guide walks you through installing Obsidian Essentials on your Minecraft Bedrock world or realm.

---

## Requirements

Before installing, make sure your setup meets these requirements:

- **Minecraft Bedrock Edition** version **1.21.0 or higher**
- A world or realm where you have **operator (OP) permissions**
- The Obsidian Essentials **behavior pack** file (`.mcpack`)

---

## Step 1 - Import the Pack

1. Locate the Obsidian Essentials `.mcpack` file you downloaded.
2. Double-click the file. Minecraft should open automatically and begin importing the pack.
3. Wait for the import confirmation message to appear in Minecraft.
4. If the pack does not import automatically, open Minecraft first, then open the file from your file manager.

---

## Step 2 - Apply the Pack to Your World

### For a Local World

1. Open Minecraft and go to **Play**.
2. Find your world and click the **Edit** (pencil) icon.
3. Select **Behavior Packs** from the left menu.
4. Under **My Packs**, find **Obsidian Essentials** and click it.
5. Click **Activate** to add it to your world.
6. Return to the world settings and click **Play** to launch.

> **Important:** If prompted about experimental features being required, click **Activate Experiments** to continue. The add-on will not function without this.

### For a Realm

1. Open Minecraft and go to **Realms**.
2. Select your realm and click the **Edit** (pencil) icon.
3. Go to **Behavior Packs**.
4. Find **Obsidian Essentials** under **My Packs** and click **Activate**.
5. Confirm any prompts about experimental gameplay.
6. The changes will apply the next time players join the realm.

---

## Step 3 - Enable Experimental Features

Obsidian Essentials requires certain experimental features to function. When applying the pack, Minecraft may ask you to confirm enabling experiments. You must accept this.

If the experiments were not enabled automatically:

1. Go to your world settings (Edit World).
2. Scroll down to **Experiments**.
3. Enable **Beta APIs** (also called **Scripting APIs** depending on your version).
4. Save and relaunch the world.

---

## Step 4 - Verify Installation

Once in the world:

1. Make sure you have **operator status** (OP).
2. Type the following command in chat:
   ```
   !version
   ```
3. If the add-on is installed correctly, you will see the current version number displayed in chat.

Alternatively, type:
```
!help
```
This will display the list of available player commands, confirming the add-on is active.

---

## Troubleshooting Installation

**The pack is not showing up in my pack list.**
Make sure the `.mcpack` file imported successfully. Try closing and reopening Minecraft, then check under Behavior Packs again.

**Commands are not working.**
Confirm that experimental features are enabled in your world settings. Also check that the behavior pack is actually active on the world, not just imported.

**I get an error about "Beta APIs".**
Go to your world settings, find **Experiments**, and enable **Beta APIs**. Save and relaunch.

---

## Next Steps

Once installed, move on to [First Setup](first-setup.md) to configure the add-on and claim your owner role.
