# Workflow

1.  **Branching:** We keep a main branch (prod) and a preview branch for staging. We use feature branches for every new feature. Name it like this: `yourname/type/short-description`. For `type`, use `feat` for new features, `fix` for bug fixes, `chore` for maintenance, etc. (e.g., `neo/feat/auth` or `benni/fix/sections`). Pull from main when you begin working on a task.

2.  **Committing & Deploying:** Commit your work at each logical step of a larger task. This helps us track progress and makes rollbacks easier if needed. We deploy once a feature is complete and polished, not before.

3.  **Task Management & Rules:** For every new task, create a `.mdc` (Markdown Card) file in the `.cursor/` directory. This keeps our to-dos clear. We'll also maintain and adhere to the guidelines in `.cursor/rules` to ensure consistency in our approach.

4.  **Architecture Documentation:** Our `architecture.md` file is the living blueprint of our system. After any significant change or addition to the system's architecture, we'll have Cursor update this document. This ensures it always reflects the current state.

5.  **Formatting** Use the Prettier extension as default formatter or run `npm run format`before comitting to format all code properly
