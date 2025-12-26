# Big Oh! - A Stopwatch for CS50x Problem Sets

A browser extension that provides stopwatch functionality for CS50 problem sets, helping you track your time while working on assignments.

## Features

- ⏱️ Stopwatch functionality
- ✅ Completion status
- 🎯 Designed specifically for CS50 problem sets
- 🚀 Built with modern web technologies (React + WXT)

---

README.md SUBMISSION

# Big Oh! - A CS50 Tracker
#### Video Demo: https://www.youtube.com/watch?v=gk5DtCr7Quw
#### Code: https://github.com/mdrizwanfk/big-oh-tracker
#### Description:
A browser extension that provides stopwatch functionality for CS50 problem sets, helping you track your time while working on assignments.

##### Problem Statement
The problem I faced was that I took almost 11 months to complete my CS50 course and the pain point was that I was not able to track my time with the problems. I had to juggle with my day job and sometimes lost track of the progress on the course.

##### Solution
Tracking time on each of the CS50 problems helps students to create a sense of priority and urgency to address something and tackle it differently to acheive the desired outcome. So, I decided to build a browser extension that helps track time on CS50 problems and student can mark them as complete and clear the pending problems off their plate, in effect, completing their CS50 course in an effective and enhanced speed. Implementing the tracker as a browser extension is a meaningful design choice because CS50 students typically interact with the course through a web-based environment, whether that is the CS50 IDE, the course website, or documentation sites. The extension can therefore follow them naturally as they work, eliminating friction such as switching to a separate app, starting and stopping timers manually in another window, or maintaining external spreadsheets.

This seamless presence enables a kind of passive discipline: the tool is always available when a problem set page is open, nudging the learner to start the timer and stay mindful of time-on-task. Over repeated use, that habit can cultivate better self-regulation, as students become more aware of how quickly browsing or context switching can erode their productive hours.

Big Oh! presents a focused, elegant solution to a very specific problem faced by CS50 students: tracking how long they spend on problem sets and keeping a clear sense of progress as they move through the course workload. By embedding stopwatch and completion-tracking features directly into a browser extension, it turns time-management and accountability into a lightweight, ever-present part of the learning workflow rather than an afterthought.

##### Implementation
Big Oh Tracker is a browser extension built with WXT, React and TypeScript. Stopwatch controls enable timing individual problem sets, with UI designed specifically for CS50x assignments. Completion toggles mark problems as done. Along with an UI overlay, the extension also has the popup. When you click on the flying bird icon from your extensions panel/drawer, you will see a popup with the list of stopwatches along with their state, i.e. if the stopwatches are idle/running/completed along with the running time of the stopwatch associated. The popup continuosly listens to the stopwatches i.e. synced up with browser's local storage, not the seconds but minutes and hours and other state values. This works all the time and as a fallback design pattern, there is a Refresh button provided as well just to give student a way to get the latest data from the storage. The popup also has a direct link to the problem page with each of the stopwatch entries listed, which gives student convenience to jump back in their CS50 grind.

###### Directory Structure (Top-level folders)
- **assets**: Holds static assets such as icons, images, or other files that the extension UI or manifest may reference.
- **entrypoints**: Contains the actual extension “entry” scripts, such as popup pages, options pages, background/service worker code, or content scripts, wired up by WXT to build the extension bundle.
- **public**: Stores public files that are copied as-is into the final extension build (for example the base HTML shells or static resources referenced directly by the manifest).

###### Directory Structure (Root configuration files)
- **wxt.config.ts**: Core WXT configuration, defining things like entrypoints, manifest details, and build behavior for the extension.
- **tsconfig.json**: TypeScript compiler configuration used across entrypoints and other TS code in the project.
- **package.json** and **bun.lock**: Define dependencies (React, WXT, tooling) and lock exact versions for reproducible installs.
- **.gitignore, .prettierignore, .prettierrc**: Version control and formatting configuration to keep the codebase clean and consistently formatted.

##### Usage
The typical student's flow is that they'd first watch Prof. David's lecture, then go watch the section video and then follow that with the list of short videos on the topics taught that week, then student starts their problem set for that week. This extension helps track their time with the problem set. This extension shows a stopwatch UI to the CS50 problems pages that are of pattern - `x/psets/<week-number>/<problem-name>/`. When student is ready to start with their problem, they would just need to click on START button of the stopwatch overlay, which would set of a stopwatch for that problem. State for this is managed locally on student's browser. Once they are done solving and submitting the problem, they'd need to mark that problem as complete using the DONE/COMPLETE button on the stopwatch overlay.

##### Impact
I feel this project is more than a utility: it is a reflection on the learning journey in CS50. By combining stopwatch functionality, completion tracking, and thoughtful integration into the browser, Big Oh! helps learners confront the realities of effort and time, celebrate their progress, and, ultimately, become more intentional, self-aware computer science students.
