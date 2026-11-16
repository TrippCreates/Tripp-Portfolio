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
hero: /images/LiquidFeedAssembly.png
heroAlt: SolidWorks assembly of the full liquid feed system, from the press bay down to the engine valves
---

## Overview

After the hybrid rocket launched, I moved over to lead the feed system on our liquid bipropellant rocket. The engine burns liquid oxygen and ethanol at around 3 kg/s total propellant flow and an O/F ratio of 1.3. The feed system's job is to get both propellants from their tanks to the injector at the right pressure and flow rate, the whole burn, every time.

We use a 12 L composite overwrapped pressure vessel (COPV) charged with helium to 4,500 psi. A regulator steps that down, and the helium pushes on the LOX and ethanol tanks to drive propellant into the engine. Everything between the COPV and the injector is ours: the pressurant lines, the tanks' inlets, the propellant lines, and the valves and brackets that hold it all together.


## Design

I'm modeling the system in SolidWorks, starting from the COPV and working down to the injector. The main thing driving the design is pressure loss: every fitting, bend, and valve between the COPV and the injector costs pressure, and the engine needs a set inlet pressure to hit its flow rate. I check each line with Darcy-Weisbach hand calcs for friction and minor losses, and run choked-flow checks on the pressurant side to make sure no restriction limits how fast helium can reach the tanks.

**The press bay.** The top of the system is the press bay, where the COPV, regulator, and pressurant manifold live. Everything here has to fit inside the airframe and still leave room for hands and wrenches during integration.

![Press bay CAD: COPV, dome regulator, and pressurant manifold](/images/PressBayCAD.png)

**Press bay bracket analysis.** The manifold bracket carries the press bay hardware and the COPV through launch. In Ansys Mechanical, I modeled the hardware as point masses: 8 lbm for the press bay at the center of the clamp, and 16 lbm for the COPV at its center of mass, 11 inches above the manifold. I then ran the bracket under two load cases: recovery and launch. Recovery produced the higher peak stresses. In both cases, stress stays low through most of the bracket and concentrates at the bolt hole, so I looked at that region up close.

![Ansys setup: point masses for the press bay and COPV](/images/PressBayFEASetup.png)

![Von Mises stress, recovery load case, with bolt-hole close-up](/images/PressBayFEA-C.png)

![Von Mises stress, launch load case, with bolt-hole close-up](/images/PressBayFEA-D.png)

## Analysis

**COPV blowdown model.** As helium leaves the COPV, its pressure, temperature, and density all drop. I wrote a Python model that tracks those three upstream of the regulator over the whole burn. It answers the question that sizes the bottle: is there still enough pressure and helium left at the end of the burn to keep the regulator delivering the mass and volume flow the tanks need?

The plots below come from that model over a 15-second burn. Helium density in the COPV falls from about 42 to 15 kg/m³, and the gas cools from about 285 K to 140 K as it expands. The ullage gas in the LOX and fuel tanks is tracked too.

![Python model: helium density and gas temperatures in the COPV and tank ullages during the burn](/images/COPVBlowdown.png)

**Pressure ladder.** To check the plumbing, I tally every pressure drop from the COPV to the tank at the end of the burn, when the COPV is at its weakest. Each fitting uses ΔP = K·½ρv², straight pipe uses Darcy-Weisbach, and the check valve uses its Cv. On the LOX side, the COPV is down to 668 psi at burnout, the dome regulator steps it down to 600 psi, and the tank still sees 570.3 psi. That's 57.75 psi of line losses on top of the regulator drop. The ladder shows which fittings cost the most. The tees and manifolds are the biggest offenders, so they're the first things to look at when cutting losses.

![LOX pressure ladder: line losses from COPV to tank at end of burn](/images/LOXPressLadder.png)

## Helium Diffusers

When pressurant enters a propellant tank fast, it can jet into the liquid and mix gas into it. If that gas gets pulled down the feed line, it can starve the engine and cause a flameout. The fix is a diffuser at each tank inlet that spreads out and slows the incoming helium so it settles on top of the liquid instead of punching into it.

I designed the diffusers for both the LOX and ethanol tanks: a tube with rows of radial holes that turn the incoming helium sideways and spread it out. I machined three of them by hand on the lathe and rotary mill.

![Diffuser in CAD: the perforated tube hangs below the pressurant inlet at the top of the tank](/images/DiffuserCAD.png)

<img src="/Tripp-Portfolio/images/HeliumDiffuser.jpg" alt="Hand-machined helium diffuser" width="420">

## Fabrication and Test Plan

We're now preparing the system for fabrication and qualification. I'm hand-bending the 3/8" and 3/4" tubing and CNC-machining brackets with toolpaths from Autodesk CAM.

The test campaign builds up one step at a time, the same way we qualified the hybrid:

1. **Water flows:** measure real flow rates and pressure losses and compare them to the hand calcs.
2. **Cold flows:** flow the full system without ignition to check pressurization and valve sequencing.
3. **Hot fires:** fire the full engine on the test stand.

<!-- PHOTO: bent tubing / CNC brackets / test stand -->

## What I'm Learning

The hybrid taught me the design-analyze-test loop. This project is pushing it further. With two propellants, one of them cryogenic, and a high-pressure pressurant system, getting the hand calcs right before anything is built matters even more. Writing my own Python models instead of only trusting rules of thumb has made me understand why the system is sized the way it is.

*This page will be updated as we move through fabrication and testing.*
