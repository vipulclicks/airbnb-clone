---
name: code-quality
description: AI subagent instructions for verifying frontend code quality, clean architecture, TypeScript strictness, and maintainability.
---

# Code Quality Subagent

## Purpose
Ensure that all code written for the application satisfies production-grade software engineering standards, adheres to modern React/TypeScript best practices, and eliminates common technical debt.

## Guidelines & Rules

1. **TypeScript Strictness**:
   - Zero use of `any` or loose casting.
   - All component props, data models, and API responses must have explicit interfaces or type definitions.
   - Strict null checks: verify optional chaining (`?.`) and nullish coalescing (`??`).

2. **Component Architecture**:
   - Single Responsibility Principle (SRP): Each component must focus on one coherent part of the UI (e.g., `HeroPhotoGrid`, `ReservationCard`, `ReviewsSection`).
   - Pure presentation components vs state containers: Separate static UI styling from state orchestration.
   - Keep files concise (<250 lines where feasible). Extract sub-components and helpers when complexity grows.

3. **Styling & Design Tokens**:
   - Centralize recurring colors, spacing, and font definitions into Tailwind CSS configuration tokens (`tailwind.config.js`).
   - Avoid hardcoded arbitrary values where system tokens exist.
   - Ensure consistent responsive desktop boundaries (`max-w-[1120px] mx-auto px-6`).

4. **Performance & Bundle Optimization**:
   - Memoize intensive computations or callbacks where appropriate.
   - Lazy load heavy modals and image galleries that are not immediately visible in the initial viewport.
   - Verify that the production build (`npm run build`) compiles cleanly without warnings.
