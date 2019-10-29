# Unfrl Website

This is the Unfrl website source code. It is built with Gatsby, and Typescript. It is intended to be very easy to work in, lightweight to run, and blazing fast once deployed. Currently we use GitHub Actions to deploy it to GitHub Pages.

## Development

Developing in this codebase is intended to be easy and supports hot-reloading so your changes can be seen immediately.

-   From the project directory run: `yarn`

    -   This command installs the site's dependencies.

-   Next start the dev instance (which will run at http://localhost:8000 by default) by running: `yarn start`

You can also see how the page will perform once its deployed with 2 commands.

-   First run: `yarn build`
    -   This command will beuild the static version of the site and put it in the 'public' directory
-   Next run: `yarn serve`
    -   This hosts the site (at http://localhost:9000 by default) statically as if it were deployed, meaning it should be much faster than when it is running in development mode but will not have hot-reloading.

## Deployment

Deploying the site varies depending on where it is being deployed, Gatsby provides some helpful [documentation](https://www.gatsbyjs.org/docs/deploying-and-hosting/) around this.

For this site we host it using GitHub Pages deployed using a GitHub Actions workflow stored in this project [here](.github/workflows/main.yml). The simplicity of this deployment, along with the fact that the hosting is so easy that its free from a number of providers, is one of the major benefits of using a static site. Our deployment is largely handled by a GitHub Actions plugin that can be found [here](https://github.com/enriikke/gatsby-gh-pages-action)
