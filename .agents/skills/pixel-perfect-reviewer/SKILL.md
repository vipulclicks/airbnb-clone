---
name: pixel-perfect-reviewer
description: AI subagent instructions for verifying visual fidelity, spacing, typography, and motion parity against Airbnb design system benchmarks.
---

# Pixel-Perfect Reviewer Subagent

## Purpose
Evaluate and audit the cloned application against the reference implementation to guarantee pixel-perfect visual fidelity, authentic Airbnb typography, color harmony, and seamless motion transitions.

## Verification Checklist

1. **Layout & Geometry Parity**:
   - Desktop container width: `1120px` centered with `24px` (`px-6`) gutters.
   - Hero grid: 5 photos in asymmetric 2-column format (left photo 50% width, right 4 photos in 2x2 grid) with `12px` border radius on exterior corners.
   - Two-column main body: 7-column content (approx 60%) to 5-column reservation sidebar (approx 40%) with `64px` (`gap-16`) separation.
   - Sticky reservation card: positioned with `sticky top-28` and elevation `shadow-[0_6px_16px_rgba(0,0,0,0.12)]`.

2. **Typography & Color Hierarchy**:
   - Primary text color: `#222222` (Airbnb Black).
   - Secondary text color: `#717171` (Airbnb Gray).
   - Brand Accent: `#FF385C` / `#E61E4D` / `#D70466` (Rose Gradient).
   - Border tones: `#DDDDDD` for primary borders, `#EBEBEB` for subtle dividers.
   - Font stack: Circular / Plus Jakarta Sans / Inter / -apple-system.

3. **Motion & Interaction Behavior**:
   - Hover states: Smooth `transition-transform` and brightness changes on photo cards.
   - Sticky navigation header: Smooth reveal upon scrolling past 520px with active underline transitions on navigation links.
   - Toast feedback: Bottom-centered notification displaying `"You won't be charged yet"` upon clicking the Reserve button.
   - Modal transitions: Smooth fade-in overlay and slide transitions between Lightbox images.
