---
layout: ../../layouts/ProjectLayout.astro
title: Rocket Feed System
subtitle: Nitrous oxide delivery for a hybrid rocket — designed, analyzed, machined, and tested at UCLA.
no: FEED-25-01
dates: Sep 2025 — May 2026
role: Feed system lead
team: UCLA Rocket Project
software: SolidWorks · Autodesk CAM · Ansys Mechanical
result: 13,000+ ft apogee · ~Mach 1
status: Launched
hero: /images/TeamRocket.JPG
heroAlt: Rocket on the launch pad
---

## Overview

*For our hybrid rocket we used HTPB as our solid fuel grain, and nitrous as our liquid oxidizer. For the feed system we were responsible for the tanks, as well as all piping, pneumatics, and valves. This role is key in delivering the nitrous to the solid fuel at the right flow rate and pressure. I was one of two co-leads for the feed system, and we had around five general members that helped throughout on some projects. We were apart of a much larger team, in which around 50 people contributed something to the building of the rocket.*

**My role.** *For the feed system I spent a lot of my time on design and analysis. I was completely in charge of creating the CAD for the system, and I built the brackets in CAD, analyzed them with handcalcs, and manufactured them on the CNC. I was also responsible for all the testing [waterfow & hydrostat] and did much of the manual machining on the lathe and mill for the tank and endcaps.*

<img src="/Tripp-Portfolio/images/Hotfire.jpeg" alt="Team with Assembled Propulsion System" width="500">

## Design

*In SolidWorks it was my job to model the entire system before ordering and putting together parts. I did extensive research on different fitting types to serve different purposes. I became very familiar with McMaster, and I learned how to properly constrain an Assembly. My biggest design restraints were pressure drop within the main propellant line, and fitting the feed system within the body tube diameters.*

**Process.** *It took around five versions before we had a final design. The process was trying to understand what fitting was needed, finding it on McMaster, and then placing it in the CAD assembly, or building it myself if it was not on McMaster. I would then get the assembly checked either at a design review or with my mentors. More often than not they would find something wrong.*

**Challenges.** *Problems like clocking kept coming up, as NPT fittings are not clockable, but can be more reliable, whereas AN fittings can clock, but will leak more often. So many times I had NPT fittings where we needed AN fittings, but we also had unnecessary AN fittings where the more reliable choice could be used. Spacing was also a constant problem, and having to fit in the brackets for the pneumatic valves made it super hard to get everything to go together correctly.*

![SolidWorks assembly](/images/FeedAssembly.png)

## Analysis

*Our first step in analysis was to do conservative hand calcs in which we checked all our failure mode and conditions conservatively. For the brackets which are pictured we did bolt calcs, and we did calcs for a cantilever beam. To confirm our work we then simulated in Ansys the conditions. This was give a more accurate picture of all the stresses. Our factor of safety in this case was 2.0, meaning we tested with twice the maximum expected forces our part was going to see.*

**Method.** *In Ansys Mechanical we fixed our brackets, set material to Aluminum, and the set the loads. The loads were two forces of 110psi x the surface area of contact on each beam of the bracket. We were trying to make sure that our beams would not bend and break.*

**Results.** *The analysis really just confirmed our handcalcs with more accuracy, but in the preliminary stage with said hand calcs we did discover that our initial design would've failed and needed to be made thicker.*

![Ansys stress plot](/images/BracketFEA.png)

## Manufacturing

*How the design became a real, machined part. What you made in-house vs. ordered. Materials.*

**CAM and machining.** *Autodesk CAM specifically — toolpath setup, machines you ran, surface finishes and tolerances that mattered.*

**Challenges.** *Setups, fixturing, anything that broke or had to be remade.*

<img src="/Tripp-Portfolio/images/FeedBracket.jpeg" alt="Manufactured Part" width="200">

## Testing

*Why test? What a hydrostatic test proves, what a water flow test proves.*

**Hydrostatic testing.** *Pressure tested to, what you were checking for, results.*

**Water flow testing.** *How you measured flow rate. Whether it matched predicted mass flow. What you adjusted between runs.*

**Challenges.** *Leaks, fittings, sensor calibration — the messy reality of getting clean data.*

![Hydrostatic test setup](/images/Hydrostat.JPG)

## Launch

*The payoff. Where it flew, who was there, what happened.*

**Results.** *Apogee, top speed, recovery. The rocket reached over 13,000 ft and close to Mach 1 — did the feed system perform the way analysis and testing predicted?*

**Reflection.** *What it felt like to see it work. What you'd do differently.*

![Launch photo](/images/LiveLaunch.jpg)

## What I Learned

*A closing passage. What this project taught you — technically (CAD, CAM, FEA, testing methodology) and as an engineer (working with mentors, fast design cycles, learning on the spot). Tie back to the opening line about being forced to learn quickly.*

## Acknowledgments

*A short paragraph thanking mentors, teammates, and the lab at UCLA. Name names if you'd like.*
