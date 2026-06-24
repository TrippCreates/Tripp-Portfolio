---
layout: ../../layouts/ProjectLayout.astro
title: Custom FPV Drone
subtitle: A custom-built FPV quadcopter — soldering, electronics integration, and live video flown via headset.
no: DRN-23-01
dates: 2023 — 2024
role: Designer · Builder · Pilot
team: Personal project
software: Betaflight · 3D printing for mounts
result: Live FPV flight
status: Flown
hero: /images/Drone.gif
heroAlt: The custom FPV drone in flight
---

## Overview

This idea started ambitious and became a whole adventure. Built from leftover parts and some I ordered online. Every milestone felt like an accomplishment as I kept adding features and the vision kept getting grander.

## First Milestone — Getting It Airborne

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/cRPAQWzwTPM" title="Drone Milestone 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Overview.** Just fly. Whatever that meant. The drone lacked a lot of capabilities or cool features, but it could fly — and that was a good start.

**Accomplishments.** Built the drone from raw electronics. I'd never worked with such complicated electronics before, and this was a difficult but rewarding introduction. Got quite good at soldering, learned to use a multimeter to check connections, and started to understand the ins and outs of electrical engineering.

**Challenges.** Soldering. I'd soldered a little before, but nowhere near this project's volume or complexity. So many joints, often in hard-to-reach places. By the end I'd become genuinely capable with the iron — a skill I know will serve me well.

**Next step.** Integrate a camera system to film flights. Hoping I could attach a GoPro to record the views the drone sees.

## Second Milestone — GoPro Footage

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/3wA4xzai6so" title="Drone Milestone 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Overview.** Try to film my flights. A GoPro would easily provide high-quality footage, so I decided to integrate one into the build.

**Accomplishments.** Designed and 3D printed a mount for a GoPro. Took many iterations to get the tolerances and design right. When the GoPro finally fit and I collected the first footage, it was an awesome feeling.

**Challenges.** Weight. The added mass of the GoPro depleted the battery much quicker than expected, so I had to order a bigger battery and find ways to cut weight on other parts of the drone.

**Next step.** Integrate an FPV camera capable of feeding live footage I could view through a headset.

![GoPro Mount](/images/GoProMount.png)

## Final Milestone — FPV Camera + Live Feed

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/7Dy2yKRyk_c" title="Drone Final Milestone" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Overview.** Successfully integrated an FPV system. I can watch live the view from my drone as I fly it.

**Accomplishments.** Added the FPV system — transmitters, more soldering, finding space for a camera on my already-too-heavy drone. Working with camera systems was completely new and very cool. Flying the drone from a live view was a feeling like no other, and made piloting much easier.

**Challenges.** Working with filming equipment. I'd never worked with cameras, and the electronics are fragile and expensive. Had to be extra careful while implementing the FPV systems.

**Next step.** Done for now. In the future I want to increase the autonomous capabilities of the drone.

![FPV Camera Stand](/images/FPVCameraStand.png)

## Bill of Materials

| Part | Note | Price |
| ---- | ---- | ----- |
| Frame | 250mm | $19.99 |
| Motors | iFlight 2450 4-6S | $63.99 |
| Props | 3 Blade | $15.99 |
| Flight Controller / ESC | SpeedyBee F405 V4, 30×30mm | $65.99 |
| Battery | 4500mAh 4S | $78.99 |
| FPV Camera | RunCam Phoenix 2 — best budget option | $35.99 |
| VTX | TBS Unify Pro 5G8 V3 | $39.99 |
| Antenna | Foxeer Lollipop 3 | $20.99 |
| FPV Goggles | EV800D — another great budget option | $99.99 |
| RC Tx/Rx | FlySky (same as the plane) | $55.99 |

**Miscellaneous:** 3D printed parts (~$5 in PLA), heat gun, heat shrink tubing, solder wire (lots of it), GoPro + case/mount.

## Other Resources

- Joshua Bardwell's [YouTube channel](https://www.youtube.com/channel/UCX3eufnI7A2I7IkKHZn8KSQ) was huge in walking me through the more complex and niche parts of custom FPV building.
