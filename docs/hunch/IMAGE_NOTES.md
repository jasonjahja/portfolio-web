# Hunch layout and image notes

The page lives at `/hunch`. Product facts remain in `HUNCH_CONTEXT.md`; the original narrative is preserved in `CASE_STUDY_CONTENT.md`. The latest user review authorizes the header and layout changes below.

## Current image state

All 13 case-study images are active, with imports directly in `src/views/DetailHunch.jsx`.

## Header and narrative layout

- Header remains the descriptive Hunch title plus Product, Role, and Timeline metadata.
- The page uses the existing `Section` and `Subsection` components directly, as in the other case studies.
- Each image section places its title and all related paragraphs together in the left column, with its image on the right. On mobile, the complete text group stacks above the image.
- Introductions, explanations, and conclusions for the same image are kept inside that subsection, rather than split into full-width paragraphs above and below it.
- Teaching and visual-system groups contain separate titled image subsections for their distinct points.
- System building uses two consecutive image subsections: the state overview/recovery, followed by shared patterns for limits, Premium, and progression.
- Testing and handoff use ordinary text sections. The closing title and paragraphs sit beside the final image.
- The custom narrative wrapper and forced justified text styling have been removed from Hunch.

## Image choices within the seven requested section groups

There are 13 image slots across the seven image-bearing groups. The table records each asset brief; titles and related paragraphs now stay together in the standard subsection layout.

All slots temporarily reuse `src/assets/images/temukerja/hero.webp`, with replacement notes and accurate placeholder alt text.

| Group | Image import | Why and placement |
| --- | --- | --- |
| Hero | `imageHero` | One wide product cover after the three metadata fields. Also supplies the homepage thumbnail. |
| Simple idea into experience | `concept` | One image on the right of only the first two introductory paragraphs, using `Subsection` inside the existing `Section`. The section heading stays above; the paragraphs beginning "Starting from the product PRD" and "The goal" remain full width below. On mobile, the image stacks below those two introductory paragraphs. |
| Connected product | `flow` | One IA / core-flow diagram beside the discovery loop and the explanation of how product areas connect. |
| Teaching Hunch | `tutorial` | Five-step upfront tutorial with Next and Skip Tutorial, beside the paragraph explaining those interactions. |
| Teaching Hunch | `identification` | Camera, cloudy processing, and single-food result sequence beside the state and feedback explanation. |
| Teaching Hunch | `progression` | FoodDex, Collection, and Profile views beside the paragraph about saved discoveries and progression. |
| Visual system | `identity` | Wordmark construction and typography beside the glancing-eyes explanation. |
| Visual system | `discoveryStates` | Same food in obscured and clear states beside the explanation of discovered food. |
| Visual system | `palette` | Food imagery with cloud accents beside the flexible-palette paragraph. |
| Visual system | `interfaceScreens` | Food Detail / Collection UI beside the explanation of restraint and visual focus. |
| System building | `edgeStates` | Recovery board for non-food, retry, recommendations, and permissions. Beside the section title and the complete state overview. |
| System building | `systemStates` | Separate board for weekly limits, Premium, and badge/level-up explorations. Beside the shared-pattern rationale in the next subsection. |
| Ending | `outcome` | One final product composition beside the closing title and both concluding paragraphs. |

The teaching section needs three visuals because learning, identifying, and collecting are separate interactions. Visual identity needs four because the logo, discovery imagery, palette, and interface restraint make different design points. System states are divided into recovery and access/progression so one board does not become unreadably dense.

No image is needed for testing: result cards, the findings, a median-time table, and the methodology note carry the evidence. No separate handoff image is needed: the closing product composition can include the reusable system.

## Replacing placeholders

1. Add final Hunch images under `src/assets/images/hunch/`.
2. Update the image import paths directly in `src/views/DetailHunch.jsx`, then uncomment the desired image block and its import. The homepage thumbnail is imported separately in `src/data/projects.js`.
3. Set the component's alt text, caption, or title for the actual image.
4. Update the image note at that location; remove any `placeholderNote` once the actual asset is ready.
5. Check text legibility on mobile and desktop, especially IA and state boards.

## Evidence and product constraints

- Camera capture is live only, with at most one identified food per Hunch.
- Free users receive 10 successful Hunches per week; do not invent repeat-capture exceptions or reset timing.
- Premium includes Unlimited Hunches and Collection Map. Map locations represent captures, not food origins. Do not invent prices or include Pattern Analysis.
- Preserve Common, Rare, Ultra Rare, Special, and Legendary rarity names.
- EXP thresholds, repeat-capture rewards, badge unlock rules/rewards, and map-pin logic remain undefined. Identify mockup values as illustrative.
- Abstract brand textures are separate from the obscured-to-clear food discovery states.
- The timing table uses approximately 77.2 seconds guided and 36.6 seconds unguided from `HUNCH_CONTEXT.md`. Keep the approved methodology note adjacent; do not imply a controlled efficiency improvement.
- Do not imply a retest after onboarding revisions or production business impact.
