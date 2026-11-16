---
layout: ../../layouts/ProjectLayout.astro
title: Liquid Bipropellant Feed System
subtitle: Helium-pressurized LOX/ethanol feed system for UCLA Rocket Project's liquid engine. Sized with hand calcs and Python, designed in SolidWorks, and heading into fabrication and test.
no: FEED-26-02
dates: Jul 2026 — Present
role: Feed systems lead
team: UCLA Rocket Project · Liquid Bipropellant
software: SolidWorks · Ansys Mechanical · Python · Autodesk CAM
result: ~3 kg/s engine · 1.3 O/F
status: In fabrication
---

## Overview

After the hybrid rocket launched, I moved over to lead the feed system on our liquid bipropellant rocket. The engine burns liquid oxygen and ethanol at around 3 kg/s total propellant flow and an O/F ratio of 1.3. The feed system's job is to get both propellants from their tanks to the injector at the right pressure and flow rate, the whole burn, every time.

We use a 12 L composite overwrapped pressure vessel (COPV) charged with helium to 4,500 psi. A regulator steps that down, and the helium pushes on the LOX and ethanol tanks to drive propellant into the engine. Everything between the COPV and the injector is ours: the pressurant lines, the tanks' inlets, the propellant lines, and the valves and brackets that hold it all together.

<!-- PHOTO: full feed system CAD assembly (SolidWorks) -->

## Design

I'm modeling the system in SolidWorks, starting from the COPV and working down to the injector. The main thing driving the design is pressure loss: every fitting, bend, and valve between the COPV and the injector costs pressure, and the engine needs a set inlet pressure to hit its flow rate. I check each line with Darcy-Weisbach hand calcs for friction and minor losses, and run choked-flow checks on the pressurant side to make sure no restriction limits how fast helium can reach the tanks.

**Rerouting the plumbing.** I rerouted the COPV-to-tank piping to use the space inside the airframe better. This made the feed system 3 inches shorter and cut mass. Shorter plumbing is also less pressure drop. Before committing to it, I checked with hand calcs and Ansys Mechanical that the new routing survives launch loads, and made sure we can still reach every joint for integration and leak checks.

<!-- PHOTO: before/after routing, or the Ansys result for the rerouted piping -->

## Analysis

**COPV blowdown model.** As helium leaves the COPV, its pressure, temperature, and density all drop. I wrote a Python model that tracks those three upstream of the regulator over the whole burn. It answers the question that sizes the bottle: is there still enough pressure and helium left at the end of the burn to keep the regulator delivering the mass and volume flow the tanks need?

**LOX boil-off.** Liquid oxygen sits around −183 °C, and we launch in the desert. While the rocket waits on the pad, heat leaks in and the LOX boils. I modeled the boil-off rate in Python for desert conditions and used it to size the vent lines so the tank can vent that gas without over-pressurizing.

<!-- PHOTO/PLOT: COPV pressure-temperature vs. time from the Python model -->

## Helium Diffusers

When pressurant enters a propellant tank fast, it can jet into the liquid and mix gas into it. If that gas gets pulled down the feed line, it can starve the engine and cause a flameout. The fix is a diffuser at each tank inlet that spreads out and slows the incoming helium so it settles on top of the liquid instead of punching into it.

I designed the diffusers for both the LOX and ethanol tanks and machined three of them by hand on the lathe and rotary mill.

<!-- PHOTO: machined diffusers -->

## Fabrication and Test Plan

We're now preparing the system for fabrication and qualification. I'm hand-bending the 3/8" and 3/4" tubing and CNC-machining brackets with toolpaths from Autodesk CAM.

The test campaign builds up one step at a time, the same way we qualified the hybrid:

1. **Hydrostatic tests:** pressurize tanks and lines with water to prove they hold pressure and don't leak.
2. **Water flows:** measure real flow rates and pressure losses and compare them to the hand calcs.
3. **Cold flows:** flow the full system without ignition to check pressurization and valve sequencing.
4. **Hot fires:** fire the full engine on the test stand.

<!-- PHOTO: bent tubing / CNC brackets / test stand -->

## What I'm Learning

The hybrid taught me the design-analyze-test loop. This project is pushing it further. With two propellants, one of them cryogenic, and a high-pressure pressurant system, getting the hand calcs right before anything is built matters even more. Writing my own Python models instead of only trusting rules of thumb has made me understand why the system is sized the way it is.

*This page will be updated as we move through fabrication and testing.*
