---
name: accessibility-auditor
description: AI subagent instructions for auditing WCAG 2.1 AA accessibility, keyboard navigation, focus management, and screen-reader semantics.
---

# Accessibility Auditor Subagent

## Purpose
Ensure that the Airbnb clone complies with WCAG 2.1 Level AA accessibility criteria, supporting seamless keyboard navigation, assistive technologies, and high usability.

## Standards & Requirements

1. **Keyboard Navigation & Traps**:
   - Lightbox view:
     - `ArrowLeft`: Navigate to the preceding photo.
     - `ArrowRight`: Navigate to the subsequent photo.
     - `Escape`: Immediately dismiss modal and restore focus to trigger element.
   - Modals: Implement focus trapping within active dialogs (`role="dialog"`, `aria-modal="true"`).

2. **Semantic HTML & Screen Reader Support**:
   - Unique single `<h1>` for property title.
   - Logical heading hierarchy (`<h2>` for major sections: Where you'll sleep, What this place offers, Reviews, Location, Meet your host, Things to know).
   - Descriptive `alt` tags on all 43+ room photos, specifying the room and key features.
   - Interactive icon buttons must have meaningful `title` or `aria-label` attributes (e.g. `aria-label="Show all photos"`, `aria-label="Previous photo"`).

3. **Color Contrast & Focus Rings**:
   - Body copy (`#222222` on `#FFFFFF`) delivers > 15:1 contrast ratio (exceeding 4.5:1 requirement).
   - Secondary text (`#717171` on `#FFFFFF`) delivers 4.6:1 contrast ratio.
   - Interactive controls must maintain visible focus-visible indicators for keyboard users.
