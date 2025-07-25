# Bible Trivia Quest - Replit Configuration

## Overview

This is a full-stack Bible trivia game application designed for kids (ages 10-12). The app allows teams to compete in Bible knowledge questions across different difficulty levels with a playful, cartoonish interface. The application is built as a web-based game with no account requirements, focusing on ease of use and engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Technology Stack
The application follows a modern full-stack architecture using:
- **Frontend**: React with TypeScript, Vite for build tooling
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

### Architecture Pattern
The system uses a monorepo structure with clear separation between client, server, and shared code:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Common types and schemas used by both frontend and backend

## Key Components

### Frontend Architecture
- **Component-based UI**: Uses React functional components with hooks
- **Design System**: shadcn/ui components with Tailwind CSS for consistent styling
- **Game State Management**: Local component state with TanStack Query for server synchronization
- **Responsive Design**: Mobile-friendly interface optimized for touch interactions

### Backend Architecture
- **RESTful API**: Express.js server providing game management endpoints
- **Data Storage**: In-memory storage with interface for future database integration
- **Game Session Management**: Handles game creation, state updates, and question delivery
- **Question Bank**: Curated trivia questions categorized by difficulty

### Database Schema
The application defines three main entities:
- **Users**: Basic user information (currently unused in MVP)
- **Trivia Questions**: Question bank with difficulty levels, answers, and Bible references
- **Game Sessions**: Active game state including teams, scores, and question history

## Data Flow

### Game Creation Flow
1. Users set up teams and game parameters in the frontend
2. Frontend sends game configuration to `/api/games` endpoint
3. Backend generates unique game code and creates session
4. Game code returned to frontend for game access

### Gameplay Flow
1. Teams select difficulty level
2. Frontend requests question from `/api/games/:gameCode/question/:difficulty`
3. Backend returns random question excluding previously asked ones
4. Game leader marks answers correct/incorrect
5. Scores updated and stored in game session
6. Game continues until target score reached

### Question Management
- Questions stored with difficulty categorization (Easy, Medium, Hard)
- Scoring system: Easy = 1 point, Medium = 2 points, Hard = 3 points
- Bible references provided for educational value
- Hint system available for accessibility
- Complete 500-question database loaded from CSV

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for frontend
- **UI Components**: Radix UI primitives with shadcn/ui wrapper components
- **Database**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Validation**: Zod for schema validation
- **Styling**: Tailwind CSS with class-variance-authority for component variants

### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend bundling
- **Type Safety**: TypeScript throughout the application
- **Development**: tsx for TypeScript execution, hot reload support

### Notable Integrations
- **Replit-specific**: Custom plugins for development environment integration
- **Bible API**: Planned integration with bible-api.com for verse text retrieval
- **Confetti Effects**: Custom animation system for celebration feedback

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Development**: Hot reload with Vite dev server proxying to Express

### Environment Configuration
- **Database**: Uses `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: NODE_ENV controls development vs production behavior
- **Replit Integration**: Special handling for Replit environment detection

### Scalability Considerations
- **Storage Interface**: Abstract storage layer allows switching from in-memory to database
- **Session Management**: Game codes provide stateless session identification  
- **Question Bank**: Designed to scale from initial 30+ questions to hundreds
- **Caching**: Client-side question caching for offline-friendly experience

The application prioritizes simplicity and user experience while maintaining a clean, extensible architecture that can grow with additional features and user load.

## Recent Changes

- **January 24, 2025**: Removed timer functionality completely from game interface and setup
- **January 24, 2025**: Updated scoring system from Easy=3pts, Medium=2pts, Hard=1pt to Easy=1pt, Medium=2pts, Hard=3pts
- **January 24, 2025**: Added PostgreSQL database with 450 curated trivia questions loaded from CSV
- **January 24, 2025**: Enhanced "Start Bible Trivia Quest" button visibility with stronger colors and shadows
- **January 24, 2025**: Simplified team setup by removing manual color selection - colors are now auto-assigned
- **January 24, 2025**: Added default team names based on colors (Blue Team, Green Team, etc.) so users can start immediately
- **January 24, 2025**: Removed all hint functionality from game interface for cleaner experience
- **January 24, 2025**: Implemented random starting team selection to make games more fair
- **January 24, 2025**: Enhanced "Next Question" button visibility with solid blue gradient, larger size, and helpful text (removed blinking animation)
- **January 24, 2025**: Made "Next Question" button always visible (disabled/grayed during question phase, prominent during answer phase)
- **January 24, 2025**: Removed reveal functionality - answers now always show below questions in smaller text for simplified gameplay
- **January 24, 2025**: Streamlined game flow by eliminating separate answer-reveal phase and reveal button
- **January 24, 2025**: Replaced fixed target score buttons (10, 15, 20) with plus/minus increment system allowing scores from 10-50 points
- **January 24, 2025**: Added back "Add Team" button to allow up to 6 teams in game setup
- **January 24, 2025**: Added delete buttons to teams beyond the first two, allowing removal of additional teams
- **January 24, 2025**: Simplified start button text from "Start Bible Trivia Quest!" to just "Start"
- **January 24, 2025**: Modified "Next Question" button to only appear after question has been marked correct, incorrect, or skipped
- **January 24, 2025**: Hidden "Mark Correct", "Mark Wrong", and "Skip" buttons until a question is displayed after difficulty selection
- **January 24, 2025**: Improved button layout - History and End Game buttons appear on same line during difficulty selection phase
- **January 24, 2025**: Removed celebration image from victory screen for cleaner interface
- **January 24, 2025**: Updated database with deduplicated trivia questions (450 total: 201 Easy, 249 Hard)
- **January 24, 2025**: Fixed Play Again and New Game button visibility by using standard color values instead of custom brand colors
- **January 24, 2025**: Added Bible assist scoring system (Easy: 0.5 pts, Medium/Hard: 1 pt with Bible help)
- **January 24, 2025**: Redesigned button layout with two-row system: Mark Correct buttons on top, other actions below
- **January 24, 2025**: History and Skip buttons now use icon-only display for compact layout
- **January 24, 2025**: Fixed team rotation bug - teams now properly alternate turns after both correct and incorrect answers
- **January 24, 2025**: Updated button layout - Mark Correct and Bible assist buttons now each have their own full-width line
- **January 24, 2025**: Simplified Mark Correct and Mark Wrong buttons to use only icons (checkmark and X) without text labels
- **January 24, 2025**: Changed progress bars from team colors to dark gray for better visual consistency
- **January 24, 2025**: Fixed skip question functionality to add skipped questions to history, preventing them from appearing again
- **January 24, 2025**: Combined Easy and Medium difficulty categories into single "Easy" category worth 1 point
- **January 24, 2025**: Updated Hard difficulty to be worth 3 points
- **January 24, 2025**: Updated Bible assist scoring: Easy (0.5 pts), Hard (1 pt)
- **January 24, 2025**: Fixed critical bug where incorrect answers weren't added to question history, causing repeat questions
- **January 24, 2025**: Removed Bible assist scoring functionality for simplified interface
- **January 24, 2025**: Reorganized button layout - correct and wrong answer buttons now on same row with small history button beside them
- **January 24, 2025**: Moved scoring buttons into the question card, right below the question content for better workflow
- **January 24, 2025**: Converted entire application to grayscale color scheme - all colored elements now use appropriate grayscale equivalents with proper contrast
- **January 24, 2025**: Modified history button to only appear after the first question is answered, improving interface clarity for new games
- **January 24, 2025**: Replaced color-based team names with biblical group names (Israelites, Levites, Judeans, etc.) that are randomly assigned to teams
- **January 24, 2025**: Added ability to edit team names during gameplay with inline editing interface including save/cancel buttons and keyboard shortcuts
- **January 24, 2025**: Replaced modal popups with visual animations - correct answers trigger green glow/pulse effect (2s), incorrect answers trigger red glow/shake effect (1s)
- **January 24, 2025**: Removed history button from question display interface for cleaner gameplay experience
- **January 24, 2025**: Moved history button to bottom of page above "End Game" button for consistent accessibility
- **January 24, 2025**: Repositioned "New Game" button in victory screen to appear above Game Summary section for better user flow
- **January 24, 2025**: Moved "New Game" button to bottom of victory screen as full-width call-to-action for better accessibility
- **January 24, 2025**: Simplified share results section from card format to simple button below "New Game" for cleaner interface
- **January 24, 2025**: Expanded question database from 15 to 450 questions (201 Easy, 249 Hard) by importing and cleaning CSV data with proper difficulty normalization
- **January 24, 2025**: Hidden progress bars for inactive teams to reduce visual clutter and focus attention on the current active team
- **January 24, 2025**: Replaced large progress bars with small inline progress bars positioned to the left of edit icons for all teams
- **January 24, 2025**: Implemented collapsible teams view - only active team shown by default with expand/collapse toggle button
- **January 24, 2025**: Added smooth fade transitions (400ms fade-out, 600ms fade-in) when switching between teams in collapsed view
- **January 24, 2025**: Updated all non-primary buttons to use light gray background (bg-gray-200) with dark gray text and icons (text-gray-700)
- **January 24, 2025**: Changed progress bar backgrounds to white when not filled, maintaining gray fill color for better visual contrast
- **January 24, 2025**: Made progress bars full-width by moving them below team names in a vertical layout instead of inline positioning
- **January 24, 2025**: Added blurred answer functionality with toggle eye icon - answers start blurred and can be revealed/hidden by tapping the eye button
- **January 24, 2025**: Removed max-width constraint from main container to enable full-width layout on desktop devices
- **January 24, 2025**: Optimized difficulty selection buttons for desktop with 2-column layout, larger sizing, and improved spacing
- **January 24, 2025**: Updated team cards to use full width layout on all screen sizes for better readability and consistency
- **January 24, 2025**: Moved progress bars back to inline layout beside team names, positioned between team name and edit button
- **January 24, 2025**: Hidden progress bars from team display while keeping them in code for potential future use
- **January 24, 2025**: Modified team fade-out animation to only fade to 30% opacity instead of completely disappearing for smoother transitions
- **January 24, 2025**: Removed all confetti animations and functionality from the entire application
- **January 24, 2025**: Fixed team jumping animation issue by stabilizing team filtering logic during transitions and showing both current and previous teams during fade transitions
- **January 24, 2025**: Added max-width constraint (768px) to main container for optimal display on both mobile and desktop devices
- **January 24, 2025**: Added "How to Play" floating help button with comprehensive game rules modal covering setup, gameplay, scoring, features, and leader tips
- **January 25, 2025**: Increased maximum team limit from 6 to 10 teams with additional biblical names and color variations
- **January 25, 2025**: Standardized all team background colors to consistent gray-100 with gray-300 borders for uniform appearance
- **January 25, 2025**: Simplified team setup layout by removing outer wrapper div, keeping only flex container for cleaner interface
- **January 25, 2025**: Moved team delete button to the right side of input field for better visual flow
- **January 25, 2025**: Fixed team collapse/expand bounce animation by simplifying filtering logic and disabling conflicting transitions
- **January 25, 2025**: Removed Card container wrapper around difficulty selection and question display buttons for cleaner interface
- **January 25, 2025**: Added Trailblazers logo to left side of header and moved end game button to right side of header during gameplay
- **January 25, 2025**: Hide expand/collapse teams button when there are fewer than 3 teams for cleaner interface
- **January 25, 2025**: Moved help button from bottom-right corner to top-right of header beside end game button
- **January 25, 2025**: Modified team display logic to always show both teams when there are 2 teams during gameplay
- **January 25, 2025**: Removed redundant "Hide History"/"Show History" button since history can be closed using the X button in the history card
- **January 25, 2025**: Added conditional "Show History" button that only appears when history exists and is not currently displayed
- **January 25, 2025**: Added catchy illustrated hero banner to homepage with animated Bible icons, feature highlights, and call-to-action linking to help modal
- **January 25, 2025**: Added "Choose your team names" title above team setup section for better user guidance
- **January 25, 2025**: Added dynamic game phase banner showing current team and encouraging question selection during difficulty phase
- **January 25, 2025**: Added "Choose a question type" title above Easy/Hard difficulty buttons for clearer user guidance
- **January 25, 2025**: Moved game phase banner above team names section for better visual hierarchy and user flow
- **January 25, 2025**: Reverted all pastel color changes back to original grayscale design throughout the entire application
- **January 25, 2025**: Added click-outside functionality to close "How to Play" modal by clicking on dark overlay background
- **January 25, 2025**: Reorganized team setup header layout - moved "Choose your team names" to left side and "Add Team" button to right side with ghost styling instead of background colors
- **January 25, 2025**: Removed sticky positioning from header to allow natural scrolling behavior
- **January 25, 2025**: Updated "Add Team" button text to "+ Team" and reduced spacing between plus icon and label
- **January 25, 2025**: Made game phase banner always visible during gameplay with dynamic content - shows "Choose your question difficulty" during difficulty selection and "[Team] is answering the question" during question display phase
- **January 25, 2025**: Added "Choose the team's answer" title above scoring buttons and added descriptive labels "Answered correct" and "Answered wrong" to checkmark and X buttons for better user guidance
- **January 25, 2025**: Made header sticky again with top-0 positioning and z-40 for proper layering
- **January 25, 2025**: Updated scoring buttons to use 30px font size, simplified labels to "Correct" and "Wrong", and removed check/X icons for cleaner interface
- **January 25, 2025**: Combined Score Display and Question History into unified "Game Status" card with tabbed interface - "Teams & Scores" and "History" tabs with question count indicator
- **January 25, 2025**: Modified History tab to always be visible even when no questions are answered yet, showing question count only when history exists
- **January 25, 2025**: Updated all banner backgrounds from gray-100 to gray-200 for slightly better visual definition while maintaining light appearance
- **January 25, 2025**: Redesigned tab navigation with clean underline indicators instead of button-style tabs, following modern design patterns
- **January 25, 2025**: Standardized button sizing across interface - New Game and Next Question buttons now match Easy/Hard difficulty button dimensions (py-8 px-8 text-xl font-semibold)
- **January 25, 2025**: Removed icons from New Game and Next Question buttons for cleaner interface aesthetic
- **January 25, 2025**: Converted all banners from dark gradients to light gray backgrounds (bg-gray-200) with dark text for better visual hierarchy - banners no longer compete with main CTA buttons
- **January 25, 2025**: Simplified team cards in Teams & Scores section with compact styling (smaller padding, text, and borders) since banner now clearly indicates whose turn it is
- **January 25, 2025**: Completely minimized team display to simple text lines with no backgrounds, borders, or cards - maximum focus on main game actions while keeping clean score tracking
- **January 25, 2025**: Fixed team glow animations to clear immediately when moving to next question, preventing lingering animation states
- **January 25, 2025**: Added swipeable game category selection with 5 categories (Bible, Animals, US History, World History, Geography) featuring square cards with icons and visual selection states - Bible selected by default
- **January 25, 2025**: Simplified game category cards to uniform 128x128px size with icons and labels only, removing descriptions for cleaner interface
- **January 25, 2025**: Implemented single-table multi-category database system with category column added to trivia_questions table
- **January 25, 2025**: Updated backend API to filter questions by category and difficulty using query parameters
- **January 25, 2025**: Expanded question database to include all categories: Bible (450), Animals (30), US History (30), World History (30), Geography (30) for total of 570 questions
- **January 25, 2025**: Moved category selection to game setup screen - teams now commit to one category per game
- **January 25, 2025**: Added category-specific team name suggestions that automatically update when switching categories
- **January 25, 2025**: Implemented seamless tabbed category interface with proper borders and elevation for active selection
- **January 25, 2025**: Combined category and team setup into single unified card for cleaner interface
- **January 25, 2025**: Fixed critical category filtering bug - removed database default value and updated schema to properly pass category from frontend to backend
- **January 25, 2025**: Added visual category indicators in game interface showing active category during gameplay
- **January 25, 2025**: Verified category-specific question filtering works correctly across all 5 categories
- **January 25, 2025**: Completed massive US History expansion - imported 980 questions, growing category from 30 to 980+ questions (making it second largest category after Animals)
- **January 25, 2025**: Total database now contains 3,520+ questions across all categories with comprehensive US History coverage from Colonial period through modern era
- **January 25, 2025**: Successfully processed large CSV import using efficient batch SQL processing with proper ID sequencing starting from 3051+
- **January 25, 2025**: Database distribution: Animals (995), US History (980), Bible (450), Geography (40), World History (30)
- **January 25, 2025**: Completed comprehensive World History expansion - imported 510 questions, growing category from 30 to 540+ questions
- **January 25, 2025**: Total database now contains 3,005+ questions across all categories with comprehensive coverage spanning ancient civilizations through modern history
- **January 25, 2025**: Successfully processed complete World History CSV import using batch SQL processing with proper ID sequencing from 4001-4510
- **January 25, 2025**: Updated database distribution: Animals (995), US History (980), World History (540), Bible (450), Geography (40)
- **January 25, 2025**: Completed massive Geography expansion - imported 500 questions, growing category from 40 to 540 questions
- **January 25, 2025**: Total database now contains 3,505+ questions across all categories with comprehensive geography coverage worldwide
- **January 25, 2025**: Successfully processed complete Geography CSV import using batch SQL processing with proper ID sequencing from 5001-5500
- **January 25, 2025**: Updated database distribution: Animals (995), US History (980), Geography (540), World History (540), Bible (450)
- **January 25, 2025**: Completed Bible category expansion - imported 500 additional questions, growing category from 450 to 950 questions
- **January 25, 2025**: Total database now contains 4,005+ questions across all categories with comprehensive Bible coverage from Genesis through Revelation
- **January 25, 2025**: Successfully processed complete Bible CSV import using batch SQL processing with proper ID sequencing from 6001-6500
- **January 25, 2025**: Updated database distribution: Animals (995), US History (980), Bible (950), Geography (540), World History (540)
- **January 25, 2025**: Added conditional Bible reference display - references only show for Bible category questions in both game display and history
- **January 25, 2025**: Implemented responsive category selection - desktop shows visual card grid, mobile uses dropdown for better touch experience
- **January 25, 2025**: Optimized hero banner spacing and content for mobile visibility - reduced padding, font sizes, and removed "Mobile Friendly" feature to ensure start button is visible on most phone screens
- **January 25, 2025**: Implemented tabbed difficulty selection interface - teams no longer choose between Easy/Hard upfront, instead they see both questions and can switch between difficulties using tabs until answering
- **January 25, 2025**: Added difficulty preference memory - system remembers last selected difficulty and defaults to it for subsequent rounds (Easy for first round)
- **January 25, 2025**: Auto-loads both Easy and Hard questions when team starts their turn, allowing real-time switching between difficulties in tabbed interface
- **January 25, 2025**: Enhanced tabbed interface to allow switching between difficulties at any time (even after seeing answers), starting directly with Easy question selected by default
- **January 25, 2025**: Removed intermediate "Ready for questions?" screen - game now loads directly into Easy question with tabs interface, auto-loading both Easy and Hard questions immediately
- **January 25, 2025**: Replaced inline blurred answer with "Show Answer" button system - answers are completely hidden until button is clicked, then displayed in highlighted box with hide option
- **January 25, 2025**: Enhanced answer box interaction - entire answer area is now clickable to hide, with hover effects and "(tap to hide)" hint for better mobile usability
- **January 25, 2025**: Preserved custom team names when switching categories - system now tracks manually edited names and only updates unmodified team names with category-appropriate suggestions
- **January 25, 2025**: Completed comprehensive accuracy review of all 3,991 questions across categories - fixed factual errors, removed 13 duplicate questions, corrected historical inaccuracies (Hammurabi classification, Columbus language, geography disputes), and improved answer clarity throughout database
- **January 25, 2025**: Added question blur functionality - questions start blurred and unblur permanently when tapped, no re-blur option
- **January 25, 2025**: Removed banner description text and cleaned up 3 duplicate "hunt in groups" animal questions from database
- **January 25, 2025**: Fixed horizontal scrolling issue on mobile by removing all shadow effects (buttons, cards, headers) and adding comprehensive overflow prevention with max-width constraints and overflow-x-hidden across all layout elements
- **January 25, 2025**: Added clickable logo navigation that returns to home page with "Resume Game" button functionality when active game exists
- **January 25, 2025**: Added "Resume Game" button in header (top right, left of help button) when user clicks logo during active game
- **January 25, 2025**: Removed "Which animal can carry heavy loads?" question from database - animals category now has 987 questions
- **January 25, 2025**: Removed "What is the only animal that can't get cancer?" question from database - animals category now has 986 questions
- **January 25, 2025**: Removed 4 problematic animal questions (bushy tail, live 50+ years, survive freezing) - animals category now has 982 questions