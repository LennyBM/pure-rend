# Design System Specification: Architectural Authority

## 1. Overview & Creative North Star
**Creative North Star: "The Monolith & The Light"**

This design system is built to reflect the high-performance, architectural nature of PureRend. We move away from the "generic contractor" aesthetic and toward a "High-End Architectural Studio" feel. The system balances the heavy, structural weight of **Charcoal (#383A3C)** with the precision and fluidity of **PureRend Blue (#1990B8)**.

To break the "template" look, we utilize **Intentional Asymmetry**. Imagery of rendered projects should bleed off-canvas or overlap structural containers, suggesting that the work is too expansive to be contained by a standard grid. We use "Architectural Breathing Room"—aggressive use of white space—to signal premium positioning and local authority.

---

## 2. Colors & Surface Logic

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts or tonal transitions. Use `surface-container-low` against a `surface` background to create "zones" without visual clutter.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
- **Base:** `surface` (#f9f9fb) for general page flow.
- **Sections:** Use `surface-container-low` (#f3f3f6) to group related case studies.
- **High-Emphasis Cards:** Use `surface-container-lowest` (#ffffff) to make content "pop" against a grey-wash background.

### Glass & Gradient Logic
To avoid a flat, "out-of-the-box" feel, floating navigation elements or modal overlays must use **Glassmorphism**:
- `background-color`: `rgba(56, 58, 60, 0.85)` (Charcoal with alpha)
- `backdrop-filter`: `blur(12px)`
- **Signature Texture:** Primary CTAs should utilize a subtle linear gradient from `primary` (#006482) to `primary_container` (#007ea3) at a 135-degree angle to simulate the play of light on a rendered surface.

---

## 3. Typography: The Editorial Scale
We use **Outfit** as our sole typeface. Its geometric construction mirrors architectural precision.

*   **Display (Large/Med):** Used for Ben Rod’s "20+ Years Expertise" claims and hero headlines. Tracking: -0.02em for an authoritative, "tighter" feel.
*   **Headline:** Used for service categories (Monocouche, Thin Coat, etc.). High contrast against body text.
*   **Body:** Set in `on_surface_variant` (#3e484e) to reduce harshness while maintaining readability.
*   **Label:** Always uppercase with +0.05em tracking for technical data points or breadcrumbs.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering** rather than shadows.
- **The "Floating Monolith":** Place a `surface_container_lowest` container on a `surface_dim` background. This creates a soft, natural lift that feels like a physical architectural model.

### Ambient Shadows
When a floating effect is required (e.g., the Quote CTA):
- **Blur:** 24px - 40px
- **Opacity:** 6%
- **Color:** Derived from `on_surface` (#1a1c1e). Never use pure black shadows.

### The "Ghost Border"
If a container requires a boundary (e.g., an input field), use the `outline_variant` token at **15% opacity**. High-contrast, 100% opaque borders are forbidden as they "trap" the design and break the modern flow.

---

## 5. Components

### The "PureRend Blue" Action Suite
*   **Primary Button:** Uses the `primary` token (#006482). 0.25rem (4px) corner radius for a sharp, architectural edge.
*   **Secondary Button:** Ghost style with a "Ghost Border" (15% opacity `outline`).
*   **Floating WhatsApp:** A `full` rounded (circular) button using `#25D366`. Position: Bottom-Left (to counter-balance the Quote CTA on the Right). Include a 10% glow of its own color.

### Architectural Cards
*   **No Dividers:** Separate "Before/After" or "Expertise" cards using `surface_container` shifts.
*   **Nesting:** Place `surface_container_lowest` cards inside a `surface_container_low` section wrapper.

### Inputs & Forms
*   **State:** Focused states must use a 2px bottom-border only of `primary` (#006482), mimicking a blueprint line.

### The "No Dead End" Component
*   **Global Quote Section:** Every page must terminate in a full-width `surface_container_highest` section.
*   **Content:** Large `display-md` typography referencing "Start your project with Ben Rod’s 20 years of local expertise."
*   **Action:** A high-contrast `primary` CTA.

---

## 6. Do’s and Don’ts

### Do
*   **Use Asymmetry:** Align text to the left but allow project images to span 60% of the right-side viewport.
*   **Reference Heritage:** Always include a "Local Bude Expertise" label in `label-md` near primary headings.
*   **Embrace Space:** Give headers at least 120px of vertical padding to let the "architectural" feel breathe.

### Don’t
*   **Don't Use Dividers:** Never use `<hr>` or solid 1px lines to separate content. Use whitespace or color shifts.
*   **Don't Round Excessively:** Avoid `xl` or `full` rounding on structural elements. Stick to `sm` (2px) or `DEFAULT` (4px) to maintain a "built" look.
*   **Don't Use Generic Icons:** If an icon is needed, use ultra-thin (200 weight) stroke icons to match the precision of the Outfit typeface.