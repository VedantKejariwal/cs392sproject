### PRD: Final Project - Core Components & Website Structure (Vedant's Part)

#### 1. Project Mandate & Core Philosophy

**Primary Directive:** The code must be **simple, clear, and human-like**. This is a beginner-level class project, and the implementation must reflect that. Avoid any advanced programming techniques, complex one-liners, or obscure library features. The goal is clean, readable code that meets the assignment's requirements without being unnecessarily complex.

*   **Scope Limitation:** This PRD only covers the tasks assigned to **Vedant Kejariwal**. It will **not** implement the API calls for the "Quote of the Day" or "Image of the Day." Instead, it will create placeholder components for these features to ensure the project is scalable and easy for teammates to integrate their work into.
*   **Styling Engine:** All styling **must** be done using the **`styled-components`** library. No traditional `.css` files (other than `globals.css` for base styles) should be used for component styling. The provided `.module.css` files are for structural and stylistic reference only and must be converted.
*   **Framework:** The project is built with **Next.js** using the App Router.
*   **Documentation:** All components created by Vedant must include brief, simple JSDoc-style comments explaining their purpose and author. Simple inline comments explaining basic syntax are also required.

#### 2. Initial Setup & Configuration

1.  **Install Dependencies:** The project requires `styled-components`. From the root of the cloned repository, run:
    ```bash
    npm install styled-components
    ```
2.  **Configure `styled-components` for Next.js:** To make `styled-components` work correctly with the Next.js App Router, we must create a component registry.
    *   Create a new folder: `lib`.
    *   Inside `lib`, create a new file: `registry.tsx`.
    *   **Populate `registry.tsx`:** This file contains boilerplate code to handle server-side rendering of styles.

        ```tsx
        // lib/registry.tsx
        'use client'

        import React, { useState } from 'react'
        import { useServerInsertedHTML } from 'next/navigation'
        import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

        export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
          const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

          useServerInsertedHTML(() => {
            const styles = styledComponentsStyleSheet.getStyleElement()
            styledComponentsStyleSheet.instance.clearTag()
            return <>{styles}</>
          })

          if (typeof window !== 'undefined') return <>{children}</>

          return (
            <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
              {children}
            </StyleSheetManager>
          )
        }
        ```
3.  **Update Root Layout:** Modify the main layout file at `app/layout.tsx` to use the new registry. This ensures styles are correctly injected.
    ```tsx
    // app/layout.tsx
    import StyledComponentsRegistry from '@/lib/registry';
    import './globals.css'; // Keep globals for base styles

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </html>
      );
    }
    ```

#### 3. Core Component Development (Vedant's Part)

Create a new folder: `app/components`. All of Vedant's reusable components will be created here.

**3.1. The Hover-Reveal Card Component (`InteractiveCard.tsx`)**

This component will be a reusable card that shows an effect on hover. It is based on the logic from the reference `index.js` file.

*   **File:** Create `app/components/InteractiveCard.tsx`.
*   **Functionality:** The card will display an image and a title. On hover, it should have a subtle visual effect (e.g., lift/shadow, overlay).
*   **Props:** It should accept `imgSrc`, `title`, and `description` as props.
*   **Styling:** Use `styled-components` to create:
    *   A main `CardWrapper` that handles the layout, border, and shadow.
    *   The hover effect should be defined within the `CardWrapper` using `&:hover`.
    *   An `ImageContainer` and `CardContent` for structure.
*   **Documentation:** Add a brief docstring at the top of the file.

    ```tsx
    // app/components/InteractiveCard.tsx

    /**
     * A reusable card component that displays an image and text with a hover effect.
     * Component by: Vedant Kejariwal
     */
    'use client';
    import styled from 'styled-components';

    // Define styled components here based on reference CSS...
    ```

**3.2. The "Read More" Accordion Component (`Accordion.tsx`)**

This component will display a section of content that can be expanded or collapsed. It is based on the functionality of the reference `AboutProject.js`.

*   **File:** Create `app/components/Accordion.tsx`.
*   **Functionality:** It will show a title/preview. When clicked, it will expand to reveal more detailed content. Clicking it again will collapse it. Use a simple `useState` hook to manage the open/closed state.
*   **Props:** It should accept `title`, `preview`, and `children` (for the collapsible content).
*   **Styling:** Use `styled-components` to create:
    *   An `AccordionItem` wrapper.
    *   An `AccordionHeader` (the clickable part) containing the title and a chevron icon.
    *   An `AccordionContent` div whose visibility is toggled based on the component's state. The chevron icon should rotate using a CSS transform when the accordion is open.
*   **Documentation:** Add a brief docstring at the top.

    ```tsx
    // app/components/Accordion.tsx

    /**
     * A reusable accordion component for progressively revealing content.
     * Component by: Vedant Kejariwal
     */
    'use client';
    import React, { useState } from 'react';
    import styled from 'styled-components';

    // Define styled components and component logic here...
    ```

#### 4. Website Pages & Structure

**4.1. Home Page (`app/page.tsx`)**

This is the main page and must be designed to be easily extensible for your teammates.

*   **Layout:** A central content area.
*   **Content:**
    1.  A welcome headline.
    2.  An **"Image of the Day" placeholder component**. Create a simple component (`ImageOfTheDay.tsx`) that just displays a placeholder box and text like `"Image component will go here - Veer"`.
    3.  A **"Quote of the Day" placeholder component**. Create another simple component (`QuoteOfTheDay.tsx`) with text like `"Quote component will go here - Jeff"`.
    4.  A section demonstrating the `InteractiveCard` and `Accordion` components using filler content. For instance, create a section titled "Features" and use your two components there.
*   **Styling:** The page should have a minimalist, modern, dark theme. Use `styled-components` for layout containers.

**4.2. About Us Page (`app/about/page.tsx`)**

*   **File:** Create a new route at `app/about/page.tsx`.
*   **Layout:** A simple page with a title and a section for each team member.
*   **Content:**
    *   **Vedant's Section:** Add a brief section for Vedant using content from the previously provided resume (e.g., "Vedant Kejariwal, Computer Science student at Boston University...").
    *   **Teammate Placeholders:** Create empty sections for Veer and Jeff with just their names, so they can easily add their content later.
*   **Styling:** Clean and consistent with the home page theme.

**4.3. Contact Page (`app/contact/page.tsx`)**

*   **File:** Create a new route at `app/contact/page.tsx`.
*   **Layout:** A simple page with a heading.
*   **Content:** Include basic contact information for the team (e.g., team name, university, and GitHub links for each member).
*   **Styling:** Consistent with the rest of the site.

**4.4. Navigation (`app/components/Navbar.tsx`)**

*   Create a simple navigation bar component that links to the Home (`/`), About (`/about`), and Contact (`/contact`) pages using the Next.js `<Link>` component.
*   Include this `Navbar` in the root layout (`app/layout.tsx`) so it appears on all pages.

#### 5. Global Styling and Theme

To ensure a consistent "GenZ guy" vibe (minimalist, dark, elegant), create a global theme.

*   **Theme File:** Create `app/styles/theme.ts`.
    ```ts
    // app/styles/theme.ts
    export const theme = {
      colors: {
        background: '#121212', // Dark charcoal
        text: '#EAEAEA',
        primary: '#3A86FF', // A cool blue for accents
        cardBackground: '#1E1E1E',
      },
      fonts: {
        main: 'Inter, sans-serif',
      },
    };
    ```
*   **Global Styles:** Create `app/styles/GlobalStyles.ts`.
    ```ts
    // app/styles/GlobalStyles.ts
    import { createGlobalStyle } from 'styled-components';
    import { theme } from './theme';

    const GlobalStyles = createGlobalStyle`
      body {
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: ${theme.fonts.main};
        margin: 0;
        padding: 0;
      }
    `;
    export default GlobalStyles;
    ```
*   **Integrate Global Styles:** In `app/layout.tsx`, import and include `<GlobalStyles />` inside the `StyledComponentsRegistry`.

#### 6. Git Workflow

1.  **Check Status:** See what files have been changed.
    ```bash
    git status
    ```
2.  **Add Changes:** Stage all the new and modified files.
    ```bash
    git add .
    ```3.  **Commit Changes:** Commit your work with a clear message.
    ```bash
    git commit -m "feat(Vedant): Implement InteractiveCard and Accordion components, set up site structure"
    ```
4.  **Push to GitHub:** Update the remote repository with your new commits.
    ```bash
    git push origin main
    ```