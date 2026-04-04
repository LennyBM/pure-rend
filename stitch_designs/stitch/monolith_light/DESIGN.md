# Design System Strategy: The Coastal Monolith

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Monolith."** 

This system moves away from the "airy" and "bubbly" trends of consumer web apps, instead leaning into the weight, precision, and permanence of high-end coastal architecture. We are creating a digital environment that feels like it was hewn from stone and glass—authoritative, elite, and immovable.

To break the "template" look, we utilize **intentional asymmetry**. Hero sections should avoid center-alignment; instead, use a heavy left-weighted typographic block balanced by expansive white space or an overlapping "monolith" element (a container that breaks the grid boundary). Our layouts prioritize the "tension" between massive, bold headings and precise, technical body data.

---

## 2. Colors
Our palette is rooted in the interplay between deep charcoal and action-oriented cyan, mimicking the meeting of tectonic resilience and the coastal sea.

### Core Tokens
*   **Primary (Action Blue):** `#1990B8` – Reserved for the singular point of intent. Use it to guide the eye, never to decorate.
*   **Authority Charcoal:** `#383A3C` – The foundation. Used for navigation bars and primary headings to establish "The Monolith."
*   **Surface Hierarchy:**
    *   `surface_container_lowest`: `#FFFFFF` (The canvas)
    *   `surface_container_low`: `#F3F3F6` (Subtle sectioning)
    *   `surface_container_highest`: `#E2E2E5` (The Secondary Accent for borders/recessed areas)

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Sectioning must be achieved through tonal shifts. A `surface-container-low` section sitting against a `surface` background provides all the definition a high-end interface requires. 

### Signature Textures
To add "soul" to the precision, main CTAs should utilize a subtle linear gradient from `primary` (#006482) to `primary_container` (#007ea3) at a 135-degree angle. This provides a tactile, "machined" quality to buttons that flat hex codes cannot replicate.

---

## 3. Typography
The typography is a dialogue between the bold, structural form of **Outfit** and the clinical clarity of **Inter**.

*   **Display & Headlines (Outfit):** Set with tight letter-spacing (-0.02em) and heavy weights. These are the architectural beams of the layout. Use `display-lg` (3.5rem) for hero statements to demand immediate authority.
*   **Body & Technical (Inter):** Clean, technical, and high-contrast. Use `body-md` (0.875rem) for most text to maintain a sense of "technical documentation" precision.
*   **Tonal Hierarchy:** Headlines use `on_surface` (#1A1C1E) for maximum gravity, while secondary labels use `on_surface_variant` (#3E484E) to recede.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is not "added"—it is "revealed." We avoid the "floating card" aesthetic of Material Design in favor of **Layered Surfaces.**

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface_container_lowest` (#FFFFFF) element on top of a `surface_container_low` (#F3F3F6) background. This creates a natural "lift" that feels like a physical inset.
*   **Ambient Shadows:** If a floating element (like a modal) is required, use an ultra-diffused shadow: `box-shadow: 0 24px 48px -12px rgba(56, 58, 60, 0.08);`. The shadow color must be a low-opacity version of our **Authority Charcoal**, never pure black.
*   **Glassmorphism:** For top navigation or floating toolbars, use a "Frosted Monolith" effect: 
    *   Background: `rgba(255, 255, 255, 0.7)` 
    *   Backdrop-blur: `20px`.
    *   This allows the colors behind to bleed through, softening the edges of our sharp architecture.

---

## 5. Components

### Buttons
*   **Shape:** `ROUND_FOUR` (4px radius). High-end, sharp, and intentional.
*   **Primary:** `primary` gradient background with `on_primary` (#FFFFFF) text. No border.
*   **Secondary (The Ghost):** No background. A "Ghost Border" of `outline_variant` at 20% opacity. 
*   **Interaction:** On hover, the primary button should shift slightly in saturation, never brightness.

### Cards & Insets
*   **Rule:** Forbid the use of divider lines.
*   **Execution:** Use the spacing scale (e.g., 32px or 48px gaps) to define content groups. If a container is needed, use a `surface_container_high` background shift.

### Input Fields
*   **Style:** Minimalist. No four-sided borders. Use a 2px bottom-border in `secondary_fixed_dim` that shifts to `primary` on focus.
*   **Label:** `label-md` in uppercase with +0.05em tracking for a "blueprint" aesthetic.

### Additional Component: The "Architectural Lead"
A specialized component for this system: A heavy left-aligned border (8px width) using `Action Blue` that runs the height of a text block, used to highlight key elite testimonials or resilience data.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use whitespace as a functional element. Treat empty space as "the ocean" that surrounds the "monolith" of your content.
*   **DO** use the `Authority Charcoal` for full-bleed sections to create a sense of elite, dark-mode sophistication within a light-mode layout.
*   **DO** ensure all icons are "Stroked" (linear), never "Filled," to match the architectural precision of the fonts.

### Don't:
*   **DON'T** use rounded corners above 4px. Anything "pill-shaped" destroys the serious, architectural tone.
*   **DON'T** use standard grey shadows. Shadows must be "warm" or "cool" tints of the background to feel high-end.
*   **DON'T** use 1px solid borders for layout. If you can't define the space with color or padding, the layout needs more work.