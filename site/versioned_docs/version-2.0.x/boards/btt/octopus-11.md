---
sidebar_label: Octopus v1.1
---

# BIGTREETECH Octopus v1.1

## Wiring

![BTT Octopus V1.1 Wiring Diagram](_media/octopus-11-wiring.png)
[Open Full Size Image](_media/octopus-11-wiring-full.png)

:::danger if you use the Ratrig endstop switches and cables, do **not** blindly plug them in to your Octopus as doing this will short the board's 3.3V power rail.
You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure your cables match the wiring diagram in both ends.
Orders shipped after October 2022 should have the correct cables (the connectors on the new cables are white).
:::

:::info Jumpers
![Jumper Symbol](_media/jumper-symbol.svg) A green square with triangles inside is where you would place a jumper,
remove all jumpers on the board that are not marked by this symbol.
:::

## Firmware installation

:::caution Use a proper cable
Make sure your board is connected to the Pi **via the provided USB-C cable** (USB-C on the Octopus, USB-A on the Pi).
:::

Follow the steps in the RatOS Configurator at [http://RatOS.local/configure?step=1](http://RatOS.local/configure?step=1).

## I updated klipper and now i get an error!

When you update klipper you might see an error that looks like this:

![Firmware version mismatch between host and guest](/img/firmware_version_mismatch.png)

This is because klipper made changes to a part of the MCU firmware that we use, and something went wrong while automatically flashing your board. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware, Follow the steps in the RatOS Configurator at [http://RatOS.local/configure?step=1](http://RatOS.local/configure?step=1).