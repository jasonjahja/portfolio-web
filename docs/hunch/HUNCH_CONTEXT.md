# Hunch Portfolio Context

## Purpose of This Document

This document is the primary source of truth for implementing the Hunch portfolio case study.

Use it to understand:
- what Hunch is,
- what the original client brief required,
- what I designed,
- which later product decisions override the original brief,
- which claims are supported,
- which information is still undefined,
- and how the project should be represented in my portfolio.

Do not invent product behaviour, research findings, metrics, business outcomes, technical implementation, or design decisions that are not documented here.

When this document conflicts with an older source file, follow the precedence rules below.

---

# Source Precedence

Use project information in this order:

1. Later client-confirmed product rules documented in this file
2. Final design decisions documented in this file
3. `design-prd.md`
4. `plan.md`
5. `ranking.md`
6. Dummy content used only for visual mockups

Do not treat dummy names, placeholder EXP values, fake locations, prototype copy, or sample food content as final product requirements unless explicitly stated.

---

# Project Overview

## Product

Hunch is a mobile food discovery and collection app.

The original client concept was described as:

> "Pokemon Go for Foods."

Users take a live photo of food, Hunch identifies what they found, and the discovery can become part of their FoodDex and personal collection.

The experience combines:
- food identification,
- discovery,
- collecting,
- rarity,
- EXP,
- levels,
- badges,
- and location-based collection features.

The central product idea is not food ordering, calorie tracking, restaurant discovery, recipe search, or traditional food journaling.

The intended core experience is:

**Discover → Hunch → Identify → Collect → Explore**

---

# Project Context

## Role

Product Designer

## Engagement

Freelance client project

## Timeline

August 2026 to September 2026

## Responsibilities

I worked across the product and visual experience, including:

- translating the client PRD into information architecture,
- defining user flows,
- designing the mobile product experience,
- defining interaction patterns and system states,
- developing the brand and visual direction,
- creating the design system,
- designing reusable UI components,
- building the interactive prototype,
- defining edge and failure states,
- conducting usability testing,
- iterating based on testing,
- preparing assets and design specifications for developer handoff.

Do not describe me as the product founder, product manager, developer, or creator of the original business concept.

The original product concept and feature requirements came from the client.

My role was to translate and develop those requirements into a coherent product and brand experience.

---

# Original Product Requirements

The original product documentation defined the following major areas:

## Onboarding

Introduce the core mechanics of taking food pictures, building the Index, and completing the collection.

Camera and GPS permissions are required.

## Authentication

Support:
- login,
- registration,
- email and password,
- Google,
- Apple.

## Camera / Hunch

The camera is the primary food-capture interaction.

Important:
- captures must happen through the live camera,
- there is no gallery upload,
- one Hunch triggers food-identification processing.

After taking a photo, the product enters a processing state while waiting for the identification result.

## Successful Identification

If a food is successfully identified:
- show the result,
- allow the user to add it to their collection,
- update the relevant Index/FoodDex state,
- allow access to the Food Detail page.

## Not Food

If the captured image is not recognized as food:
- communicate the failure,
- allow the user to retake the photo.

## Food Not in Food Bank

If Hunch recognizes the image as food but the food does not exist in its database:
- communicate that the food is unavailable,
- provide a "Recommend a food" action,
- show the confirmation message:

> "Thanks for the recommendation!"

## Food Detail

Food Detail can contain:

- origin,
- food image,
- food name,
- subtitle,
- description,
- flavor quote,
- dining context,
- fun facts,
- base EXP,
- rarity.

Undiscovered food can show hints instead of its complete information.

## Index / FoodDex

The original plan described an Index containing foods the user had indexed.

The product later developed this into the FoodDex concept, representing the broader food-discovery universe with discovered and undiscovered states.

Food categories defined in the source include:

- Rice
- Noodles
- Meat
- Seafood
- Bakery
- Dessert
- Drinks
- Street Food
- Soups
- Greens

## Collection

Collection represents foods personally captured by the user.

A user can have more than one captured image for the same food.

Collection supports:
- grid presentation,
- filtering,
- and a premium map view.

## Profile

Profile includes:
- user identity,
- EXP,
- level,
- collected foods,
- profile image,
- badges,
- access to settings.

## Paywall

The original brief included:
- weekly subscription,
- monthly subscription,
- yearly subscription.

Exact prices are not defined in the source documentation.

## Review

The product includes a state that can ask the user to review Hunch on the App Store or Play Store.

---

# Later Client-Confirmed Product Rules

These decisions are newer than the original PRD and take precedence where applicable.

## Weekly Hunches

Free users receive:

**10 successful Hunches per week.**

A Hunch is only consumed when food identification succeeds.

Failed identification or a non-food result does not decrease the weekly allowance.

Do not claim that every camera capture consumes a Hunch.

## Identification Limit

One Hunch identifies a maximum of:

**one food.**

Do not design or describe multi-food identification results.

## Premium

Current Premium benefits are:

1. Unlimited Hunches
2. Collection Map

Do not include Pattern Analysis as a current Premium feature.

Pattern Analysis has only been discussed as a possible future direction if Hunch expands toward a healthy-lifestyle product.

## Collection Map

The Collection Map represents:

**where the user photographed or discovered the food.**

It does not represent the geographic origin of the dish.

Food origin and capture location are separate concepts.

The original data model does not explicitly include capture coordinates, so location data for each capture is a later product requirement.

## Badges

Badge content is server-driven.

The UI should support a flexible number of badges and should not hardcode:
- total badge count,
- badge names,
- badge criteria,
- badge order,
- or badge reward values.

Badge names and rewards used in mockups may be dummy content.

---

# Product Architecture

The final navigation structure is:

**Index / Hunch / Collection / Profile**

## Index

Index, also developed visually as the FoodDex, represents the discovery database.

It can contain:
- discovered foods,
- undiscovered foods,
- category filters,
- food rarity,
- weekly Hunch information.

## Hunch

Hunch opens the live camera experience.

This is the primary product action.

## Collection

Collection represents the user's personal captured discoveries.

It can contain multiple captures of the same canonical food.

Collection also provides access to the Premium Collection Map.

## Profile

Profile represents:
- identity,
- progression,
- level,
- badges,
- FoodDex progress,
- and settings.

---

# Core Experience

The central recurring flow is:

**Discover → Hunch → Identify → Collect → Explore**

A simplified successful flow is:

1. User opens Hunch
2. User captures a food using the live camera
3. Hunch processes the image
4. A food is identified
5. The user sees the result
6. The user adds or saves the discovery
7. The food contributes to FoodDex / Collection progression
8. The user can explore its Food Detail

---

# First-Time Experience

The product includes an onboarding experience followed by a guided first Hunch.

## Onboarding

The onboarding communicates the product using three primary ideas:

### Find It
Discover food around you.

### Hunch It
Use the camera to identify what you found.

### Keep It
Save discoveries, earn EXP, and grow the collection.

The final CTA after onboarding is:

**Let's Start**

## Guided Tutorial

The first Hunch is taught using a dedicated five-step guided tutorial.

Important:

The tutorial explains the steps upfront using a sequence with:
- Next,
- and Skip Tutorial.

Do not describe the tutorial as guidance that only appears contextually when each feature becomes relevant.

Do not claim that users must complete the tutorial.

The interaction still visually points users toward the relevant UI while teaching the Hunch flow.

---

# Camera and Processing

## Camera

The camera uses:
- a live viewfinder,
- a shutter action,
- no gallery upload.

## Processing

Identification may require waiting for an LLM response.

The visual design uses this waiting period as part of the discovery experience rather than presenting only a generic spinner.

The captured food can be combined with Hunch's cloudy visual language to communicate anticipation and uncertainty before identification.

Do not describe a fake percentage progress bar unless one exists in the final design.

---

# Result States

The product includes several result states.

## Successful New Discovery

Show:
- captured food,
- food identity,
- relevant food information,
- rarity,
- EXP,
- collection action.

## Repeat Discovery

The system supports users capturing the same canonical food more than once.

The source data model explicitly supports multiple food images for one food.

Exact repeat-capture EXP behaviour is not currently defined.

Do not invent whether repeated captures:
- grant EXP again,
- consume a weekly Hunch differently,
- create a separate map pin,
- or affect progression differently.

## Not Food

The user is informed that the photo does not appear to contain food and can retake it.

## General Identification Error

The user can retry the Hunch.

## Food Not in Food Bank

The user can recommend that the food be added.

Confirmation:

> "Thanks for the recommendation!"

---

# FoodDex and Food Detail

## Discovered Food

A discovered food can show:
- canonical food imagery,
- food name,
- origin,
- rarity,
- full Food Detail information.

## Undiscovered Food

The final visual direction represents undiscovered food using obscured, blurred, or cloudy food imagery.

The original source only states that undiscovered foods can show hints.

The exact hint disclosure system is a design proposal, not an original product requirement.

Do not invent exact hint rules unless the final UI explicitly shows them.

## Food Detail Fields

Supported food information includes:

- `location_origin`
- `placeholder_image`
- `name`
- `sub_title`
- `descriptions`
- `flavor_quote`
- `dining_context`
- `list of fun facts`
- `base_exp`
- `rarity`

The meaning and writing rules for `sub_title` were not defined by the original PRD.

---

# Rarity and EXP

Hunch uses a 300-food database.

The official rarity system is:

| Rarity | Approx. Distribution | EXP |
|---|---:|---:|
| Common | ~57%, 173 foods | 100 EXP |
| Rare | ~25%, 75 foods | 150 EXP |
| Ultra Rare | ~12%, 36 foods | 200 EXP |
| Special | ~5%, 15 foods | 300 EXP |
| Legendary | ~1%, 1 food | 500 EXP |

Official rarity names must remain exactly:

- Common
- Rare
- Ultra Rare
- Special
- Legendary

Do not substitute tiers such as:
- Uncommon,
- Epic,
- Mythic.

Legendary is reserved exclusively for:

**Instant Noodles**

The food database is based on canonical dishes rather than brand or flavor variants.

Example:
- "Instant Noodles" is a canonical entry.
- A specific branded instant noodle flavor is not a separate FoodDex item.

---

# Level System

The user entity contains:
- EXP,
- level.

However, the source files do not define:
- EXP thresholds for each level,
- whether EXP resets after leveling,
- whether excess EXP carries over,
- whether EXP is cumulative,
- or level rewards.

Do not invent this logic.

Level Up screens in the design should therefore be treated as visual/product-state explorations unless the client later defines the progression algorithm.

Any numbers such as:
- `320 / 500 EXP`,
- `364 EXP to Level 11`,
- or similar threshold values

must be treated as dummy values unless explicitly approved.

---

# Badge System

Badges are part of the user progression system.

The final UI treats badges as flexible, server-driven content.

Badge visual direction can use food-related collectible forms, such as food-grade sticker or label-inspired shapes.

Example badge names, criteria, icons, or EXP rewards shown in UI mockups are dummy unless explicitly documented as final.

Do not represent a dummy badge as an official Hunch achievement.

---

# Visual Identity

The original PRD did not prescribe colors, typography, or a visual style.

The visual identity was developed as part of my design scope.

## Brand Idea

A hunch is an intuitive feeling about something before it becomes fully known.

Hunch translates this idea into a food-discovery experience where curiosity leads toward identification and collection.

The brand concept can be summarized as:

**uncertainty → discovery → clarity**

Curiosity is the trigger.

Discovery is the experience.

Collection is the reward.

Memory can exist as a secondary emotional benefit, but Hunch should not be represented primarily as a memory or journaling product.

---

# Logo

The Hunch wordmark uses two square dots above the letterform.

The dots resemble a pair of glancing eyes looking toward the next discovery.

They represent:
- curiosity,
- awareness,
- and the instinct to follow a hunch.

Use the term:

**glancing eyes**

rather than "instinctive eyes."

The square dots are intentional.

Do not automatically redraw them as circular eyes.

---

# Tagline

Primary tagline:

**A hunch worth finding.**

The tagline can use Poppins Italic as a brand accent typeface.

---

# Typography

Primary UI and brand typeface:

**Manrope**

Brand accent / tagline:

**Poppins Italic**

---

# Color System

Core colors include:

- `#FFFFFF`
- `#242424`

Accent colors include:

- `#6E5BFF`
- `#066AFF`
- `#FFB806`
- `#06FF38`
- `#FF0000`
- `#FF00A1`

These colors should not necessarily be treated as six equally dominant UI brand colors.

The system uses neutral structure with flexible color accents and cloudy imagery.

---

# Why Hunch Uses Many Colors

Food is inherently visual.

Different foods introduce:
- different colors,
- forms,
- textures,
- surfaces,
- ingredients,
- and presentation styles.

Instead of forcing every food into one fixed brand color, the Hunch visual system is intentionally flexible enough to embrace this visual variety.

The design principle is:

**The interface provides the structure.  
The food provides the color.**

Cloud colors can adapt to the food being represented.

---

# Why the Interface Is Minimal

Although the product borrows the motivation of collecting and progression from games, the interface intentionally avoids becoming visually dense or heavily game-styled.

Food is already a colorful, irregular, and visually rich object.

The UI is therefore restrained so the food can remain the primary visual focus.

The intended balance is:

**expressive content + restrained interface**

Playfulness is communicated through:
- discovering food,
- collecting,
- rarity,
- EXP,
- levels,
- badges,
- color,
- and discovery states,

rather than through excessive decorative game UI.

The desired product feel is:
- contemporary,
- minimal,
- playful,
- soft,
- collectible,
- structured.

It should not feel:
- childish,
- overly gamified,
- mystical,
- wellness-oriented,
- luxury-focused,
- or visually noisy.

---

# Imagery System

The imagery system contains two different roles.

## Brand Textures

Cloudy and abstract color textures act as supporting brand elements.

These can be:
- abstract clouds,
- or food-inspired cloud forms.

They are not a literal discovery progression.

## Food Discovery States

Food imagery does have a discovery-state progression.

### Undiscovered
Food can appear blurred, obscured, or cloudy.

### Discovered
Food becomes clear and recognizable.

Do not describe all cloud imagery as a sequence from unknown to known.

Only the food discovery states represent that progression.

---

# Food Imagery Principles

## Camera

The live camera remains clear.

## Processing

The captured image can use cloudy, refracted, or uncertain visual treatment to communicate identification in progress.

## Successful Result

The user's captured food should remain visually connected to the result rather than immediately feeling replaced by an unrelated canonical image.

## FoodDex

Canonical food imagery can provide visual consistency across the broader FoodDex.

## Collection

Collection is personal and should emphasize the user's actual food captures.

---

# UI System

The product uses a restrained shape language.

## Primary Buttons

Capsule / fully rounded.

## Single-Line Inputs

Capsule / fully rounded, visually differentiated from primary buttons using border and surface treatment.

## Search

Capsule.

## Chips

Capsule.

## Icon Buttons

Circular where appropriate.

## Cards and Larger Containers

Rounded rectangles rather than capsules.

## Multiline Fields and Large Surfaces

Do not force these into capsule shapes.

Consistency means components with the same role follow the same rule, not that every object in the interface uses the same radius.

---

# Navigation

Final bottom navigation:

- Index
- Hunch
- Collection
- Profile

Hunch is the central primary action.

Top bars may contain different actions depending on context while retaining the same visual shell.

Examples:
- Index can prioritize weekly Hunch status and filters.
- Collection can prioritize Collection-related utilities and Premium Map access.

Contextual top-bar differences are intentional.

---

# Overlay and Navigation Patterns

Use patterns according to their role.

## Top-Anchored Sheet / Panel

Used for top-bar utility actions such as:
- Filter,
- Weekly Hunch information.

## Full Page

Used for content-rich destinations such as:
- Food Detail,
- permission-blocked states.

## Modal

Appropriate for:
- confirmation,
- review prompts,
- lightweight celebratory or destructive decisions.

## Snackbar / Toast

Used for brief system confirmations such as:

> "Thanks for the recommendation!"

Do not automatically convert every secondary interaction into a bottom sheet.

---

# Premium

Current Premium positioning should focus only on:

## Unlimited Hunches

Free:
- 10 successful Hunches per week.

Premium:
- Unlimited.

## Collection Map

Allows users to see where their food discoveries happened.

The Map represents capture location, not food origin.

Premium can use warm gold accents, but gold should remain an accent rather than taking over the entire Hunch visual system.

Do not invent:
- Premium plan prices,
- discount percentages,
- "Best Value",
- "Most Popular",

unless pricing and marketing rules are supplied.

---

# Premium Copy Direction

Preferred product framing:

**Hunch without limits.**

Supporting idea:

> Get unlimited Hunches and unlock your Collection Map.

Collection Map framing:

> See where your food discoveries happened with Hunch Premium.

---

# Usability Testing

The interactive prototype was tested with:

**8 participants**

The evaluation covered:
1. initial onboarding,
2. a guided first Hunch,
3. a repeat Hunch without tutorial guidance,
4. viewing the user's collection.

---

# Testing Results

## Guided First Hunch

**8 / 8 participants completed the task successfully.**

## Unguided Repeat Hunch

**8 / 8 participants completed the task successfully.**

## Ease of Use

Repeat-flow ratings:

- 7
- 7
- 7
- 4
- 6
- 7
- 6
- 7

Average:

**6.375 / 7**

Portfolio rounding:

**6.4 / 7**

## Understanding After Guided Tutorial

All participants rated their understanding after completing the tutorial:

**7 / 7**

---

# Testing Insight

The strongest usability issue was not task completion.

It was the initial understanding of what Hunch was for.

After onboarding alone, participants interpreted Hunch in several different ways, including:
- a food journal,
- a food-ordering app,
- a food search app,
- a calorie or recipe tool,
- a photo collection,
- or a simple food identifier.

The interaction itself became clear after the guided first-use experience.

This revealed a distinction between:

**understanding how to use Hunch**

and

**understanding what Hunch is for.**

The onboarding messaging was therefore refined to emphasize:

**Find it → Hunch it → Keep it**

and the broader core:

**food discovery → identification → collection**

---

# Repeat Task Timing

Median guided first-use completion:

approximately **77.2 seconds**

Median unguided repeat completion:

approximately **36.6 seconds**

Observed difference:

approximately **52% lower median completion time** for the repeat flow.

This comparison is descriptive.

The first-use flow included additional tutorial content and interaction steps, so this must not be presented as a controlled causal efficiency improvement.

Safe portfolio wording:

> The unguided repeat flow was completed with a 52% lower median completion time than the guided first-use flow.

If used, include a methodology note explaining that the guided flow contained additional tutorial steps.

Do not claim:

> "The tutorial made users 52% faster."

Do not claim:

> "Efficiency improved by 52%."

---

# Portfolio-Safe Validation Claims

Safe:

> Tested with 8 participants.

Safe:

> 8 out of 8 participants completed both the guided first Hunch and unguided repeat Hunch.

Safe:

> The unguided repeat flow received an average ease-of-use rating of 6.4/7.

Safe:

> All participants rated their understanding after the guided tutorial at 7/7.

Conditional:

> Repeat completion had a 52% lower median time than the guided first-use flow.

Only use the final statement if its methodological limitation is clear.

---

# Research Limitations

This was a formative usability test with 8 participants.

Do not present the study as:
- statistically representative,
- a controlled experiment,
- formal quantitative validation,
- or evidence of business impact.

Do not claim:
- conversion improvement,
- retention improvement,
- revenue impact,
- engagement lift,
- increased discovery behaviour,
- or improved long-term retention.

No production analytics are currently available.

---

# Key Portfolio Story

The Hunch case study should communicate that the project was more than UI styling.

The main narrative is:

1. The client provided the core product concept and PRD.
2. I translated the feature set into a coherent product architecture.
3. I designed the core food-discovery and collection experience.
4. I created Hunch's visual identity and reusable design system.
5. I designed important system and edge states, not only the happy path.
6. I tested the interactive prototype with 8 participants.
7. Testing showed strong learnability but inconsistent initial product understanding.
8. The onboarding communication was refined around discovery, identification, and collection.
9. The final work was prepared as a reusable product system for developer handoff.

Do not frame the project as a Design Thinking classroom exercise.

Avoid forcing the story into:

Empathize → Define → Ideate → Prototype → Test

The portfolio should feel:
- visual,
- decision-driven,
- concise,
- product-oriented,
- and grounded in actual work.

---

# Portfolio Writing Rules

The website uses:

**heading + content**

Do not display section numbers such as:
- 01,
- 02,
- 03.

Do not display generic section labels such as:
- The Brief,
- Product Structure,
- Visual Identity,

unless they are part of the actual headline.

Avoid em dashes.

Use:
- commas,
- periods,
- colons,
- or separate sentences instead.

Do not rewrite approved case-study copy unless requested.

Do not make the writing sound like:
- a school assignment,
- marketing hype,
- a fabricated startup success story,
- or an AI-generated process template.

---

# Important Undefined Product Logic

The following are currently undefined and must not be invented:

- level EXP thresholds,
- whether level EXP resets,
- EXP carry-over after level-up,
- exact badge unlock logic,
- badge rewards,
- repeat-capture EXP behaviour,
- exact repeat-capture weekly Hunch behaviour,
- whether repeat captures create multiple Collection Map pins,
- exact Collection Map pin detail content,
- exact weekly reset time and timezone,
- exact undiscovered-food hint disclosure rules,
- subscription prices,
- Premium discount labels,
- production retention or conversion metrics.

If implementation or portfolio content depends on any of these, flag the missing rule rather than guessing.

---

# Dummy Content Rules

Food names and data taken directly from `ranking.md` can be treated as source content.

Other food names, locations, badge names, badge descriptions, level thresholds, profile statistics, or prices created only to populate mockups must be treated as dummy.

Never turn dummy prototype content into a factual portfolio claim.

---

# Final Design Principle Summary

Hunch should be understood through five principles:

## 1. Discovery before utility

Hunch is primarily about finding and collecting food, not solving ordering, nutrition, or journaling problems.

## 2. Learn through a guided first experience

The first Hunch teaches users the product through a structured tutorial, then allows them to repeat the interaction independently.

## 3. Food is the visual protagonist

The interface is intentionally restrained so the diversity of food can provide visual richness.

## 4. Playfulness comes from the system

Collecting, rarity, EXP, levels, badges, and discovery create playfulness without requiring a visually dense game interface.

## 5. Curiosity becomes collection

A Hunch begins with uncertainty, becomes something identified, and ultimately contributes to a growing personal collection.