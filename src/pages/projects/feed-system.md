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

*I CNCd the part on a 3-axis machine from Haas mini mill. We ordered a 3x3 cube of Aluminum 6061, and went from there. Aluminum was chosen for being light, and cheaper.*

**CAM and machining.** *I did the CAM setup on Autodesk. For each bracket there was three seperate setups, with two different tools. This made the process a lot harder as I had to think about how I would orient the part for each setup, and it made the CAM setup way more complex.*

**Challenges.** *Thankfully nothing broke or had to be remade, but the setups were very hard to get right. I had to think about how the vice grip would hold the part in each setup, and where I would set my xyz zeros. There were also some worrisome moments where I had to machine very slowly because the torque on the part would be very high.*

<img src="/Tripp-Portfolio/images/FeedBracket.jpeg" alt="Manufactured Part" width="200">

## Testing

*So for our design process, we design, analyze, and then test. Testing for us fully qualifies our part so that it can be put into the final product, in this case the rocket. The hydrostatic test which is pictured presses the tank up to 1.5x MEOP (Maxium Expected Operating Pressure). It proves whether or not our tank will seal and hold pressure. The water flow test qualifies our entire feed system and gives us the true pressure losses and flow rate of the system.*

**Hydrostatic testing.** *We pressurized up to 1.5x MEOP, which ended up being 1125 psi. We were making sure that at that pressure we weren't leaking more than 5psi/min. We were also making sure that our endcaps sealed at ambient pressure. At first our bolt calculation were incorrect, and we ended up bearing our tank. But we remanufactured and added more bolts, and eventually we were able to fully qualify.*

**Water flow testing.** *We measured flow rate by having a bucked capture all the water between a set period of time. We also calculated the pressure losses by having two pressure gauges, one before the feed system, and one after. Both results ended up being very close to predicted values. We did over 50+ waterflows to qualify different systems, with about 10 trials for each. We then averaged the results of the trials, and had a very low spread in values.*

**Challenges.** *For much of our testing our tank would continue to leak at ambient pressure. We had to reorient out endcaps to different positions, and had to try different o-rings to see what would work. Finally we were able to get it to hold. Many of our fittings that were used for the pump were also leaking, and it would take long stretches of time to try and fix different setups. Our data however, was mostly clean, and came out pretty readable.*

![Hydrostatic test setup](/images/Hydrostat.JPG)

## Launch

*We launched in the Mojave desert at around 12:30pm. We had the whole team there, around 40+ people, and it took around two days of setup to get launch ready.*

**Results.** *13,000+ feet, max speeds over mach 1, and a complete successful recovery. Feed system performed as expected which was incredible.*

**Reflection.** *This was 100% my most intensive project to date. Seeing it success was a feeling like no other. I think if I were to redo the process I would try to spend more time on hand calculations as our biggest mistake was made there. We costed ourselves around 40 hours of work, and we could of avoided that if we were more diligent with our hand calculations.*

<iframe width="560" height="315" src="https://www.youtube.com/embed/tq8HeFo8MEM?si=TtL6t8LW8bv7y37-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What I Learned

*A closing passage. What this project taught you — technically (CAD, CAM, FEA, testing methodology) and as an engineer (working with mentors, fast design cycles, learning on the spot). Tie back to the opening line about being forced to learn quickly.*

## Acknowledgments

*A short paragraph thanking mentors, teammates, and the lab at UCLA. Name names if you'd like.*
