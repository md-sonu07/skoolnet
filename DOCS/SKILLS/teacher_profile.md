# Teacher Profile Management Skill

This skill documents the standardized patterns and UI guidelines for managing the **Teacher Profile** within the Skoolnet platform. Use this as a reference when updating or creating similar profile pages.

## UI & Design Guidelines

### 1. Layout Structure
- **Three-Column Grid**: Use a responsive grid with `lg:grid-cols-3`.
  - **Left Column (1/3)**: Profile overview sidebar.
  - **Right Column (2/3)**: Detailed information sections (Personal, Professional, etc.).
- **Consistency**: Maintain visual parity with the `src/pages/school/Profile.jsx` (Institutional Profile) for a unified platform experience.

### 2. Interaction Patterns
- **Active Edit Button**: Profile fields should be `disabled` by default.
- **Toggle Mode**: Use a single `isEditing` state to unlock all fields simultaneously.
- **Input Styling**:
  - Disabled state: `disabled:bg-slate-50 disabled:border-transparent`.
  - Active state: Standard borders and focus rings.
- **Locking Sensitive Data**: Critical fields like **Email** and **Employee ID** must remain disabled even in edit mode to prevent unauthorized modifications.

### 3. Visual Styling (Aesthetics)
- **Status Badges**: Use `StatusBadge` with `emerald` for active and `rose` for inactive status.
- **Card Highlights**: 
  - Use `bg-primary/5` and `text-primary` for the teacher's department badge.
  - Use high-quality icons from `AppIcon` (e.g., `mail`, `call`, `calendar_today`).
- **Sidebar Details**: Information items in the sidebar should use a `group` container with subtle hover effects and background colors.
- **Aesthetic Constraints**: 
  - Do NOT use heavy shadows (`shadow-xl` or above) inside content sections.
  - Avoid excessive `tracking-wider` or `uppercase` transforms unless specified.
  - Use existing theme colors (Primary, Slate, Emerald, Rose).

## Technical Implementation

### State Management
- **Local Form State**: Maintain a `formData` object to track real-time changes before saving.
- **Syncing**: Use `useEffect` to synchronize the `formData` with the global `user` object from `useAuth`.

### Fallback Logic
- **Data Presence**: Always provide fallbacks. Use a consistent `"Not Set"` message for missing data to ensure the UI doesn't appear broken.
- **Formatting**: Format dates (e.g., Joining Date) using `toLocaleDateString` for better readability.

## Key Files for Reference
- **Page Component**: `src/pages/school/teacher/Profile.jsx`
- **Hook**: `src/hooks/api/useAuth.js`
- **Primitives**: `src/components/common/DashboardPrimitives.jsx`

---
*Created on 2026-04-25 for standardizing Teacher Dashboard development.*
