# NSC Dev Expo Site

This repository serves as a static site rendering for the Application Development Department at North Seattle College. It leverages Expo for building and deploying web applications with static rendering capabilities.

# Workflows
## Project setup
- Run terminal with `npm install .`  in the cloned project's directory.
- `npm run start:web` to start up the frontend development server.

## Working on a specific page or rendering component
Currently, we are using Stacks to generate dev page environment for developers to work on their page or component. This is a temporary solution that we may remove further in the development cycle. 
- To work on your page, run development script using `npm run start:web`
- Once the dev server starts, the first page will be the home page, but in the URL it will look like 'http://localhost:8081/'
- Navigate to other pages in the `(pages)` directory by adding the name of the file after the root directory in the URL. Example: Student page will be `/student`, about will be `/about`, etc.
Note: Review the video linked in the resource section to gain understanding how expo handles folder structure for routing. Always refer to [expo documentation](https://docs.expo.dev/) for in-depth knowledge in how Expo components work. 

# Resources
- [Review before implementing components or pages: Introduction to Expo Router Layout Files](https://youtu.be/Yh6Qlg2CYwQ?si=c5Zy0PBnwWYwzOtV)
- [Figma Design](https://www.figma.com/design/nswMhBThzHDCqsR7F2HxbF/NSC-Dev-site-redesign-wireframes?node-id=73-1231&t=SbPUpY0Pq8fQwScA-1)
- [React Native Component Library](https://reactnative.dev/docs/components-and-apis)
- [CSS Reference](https://css-tricks.com/)
- [Expo Router](https://docs.expo.dev/versions/latest/sdk/router/)

Placeholder Images for Development

During development, some components may require images that are not yet available.
To maintain consistent layouts and avoid broken UI components, developers should use placeholder image services.

Recommended Placeholder Services

The following services are recommended for generating temporary images:

PlaceDog
https://placedog.net/

Example usage:

https://placedog.net/400/300

This generates a placeholder dog image with a width of 400px and height of 300px.

PlaceCats
https://www.placecats.com/

Example usage:

https://www.placecats.com/400/300

This generates a placeholder cat image with a width of 400px and height of 300px.

Example Implementation

Example usage inside a component:

<img src="https://placedog.net/400/300" alt="Placeholder image" />

These placeholder images should be replaced with actual images before final production deployment.

This is a living document, so please feel free to add any useful tips or workflows