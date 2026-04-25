# Storybook Usage Guide
This guide explains how to use Storybook in this project for developing and testing UI components in isolation.

## What is Storybook?
Storybook is a tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

## Getting Started

### 1. Install Dependencies
If you haven't already, install project dependencies:
```
npm install
```

### 2. Running Storybook
To start Storybook locally, run:
```
npm run storybook
```

Storybook will open in your browser at [http://localhost:6006](http://localhost:6006).

## Adding Stories
- Stories are located in the `src/stories/` directory.
- To add a new component story, create a `.stories.tsx` file next to your component or in the stories directory.
- Follow the existing story format for consistency.

## Best Practices
- Keep stories focused and simple.
- Use stories to document different states and variations of your components.
- Update stories when components change.

## Resources
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
