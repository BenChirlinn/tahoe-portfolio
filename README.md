# Tahoe Theme React Portfolio Site

This is a basic react application that I use as my personal portfolio as deployed to [BenjaminChirlin.com](http://www.benjaminchirlin.com).

## Technology and Libraries

I tried to use a broad production-scale group of technologies to support this project. It was important to me that it reflect all my knowledge of web development from back end to front. Moreover it allowed me the opportunity to get into the weeds on many of the setup and configuration steps I missed during my time at WIRED as I came into our React project after the groundwork had already been laid.

Included libraries and technologies:

- Digital Ocean (DO)
- Ubuntu
- Nginx
- Webpack
- Babel
- React

# Deployment

I opted to manage deploys directly through git (see resources below for reference). This involved setting up a separate bare git origin on my DO droplet (called *live*) which I can push my latest changes to. There, a `post-receive` hook ensures my Git worktree, a.k.a. the key site files themselves, are put in my server's root site directory. `npm run build` must then be run manually from there to build the latest.

### Deployment Walkthrough

- Push latest changes to the repo from local to "live" remote (`ssh://root@MY_SERVER_IP/srv/tahoe-portfolio/site.git`)
- SSH into server
- Navigate to work tree at `/srv/www/benjaminchirlin.com`
- Install latest dependencies if required `npm i`
- Build latest `npm run build`
- Rejoice at how relatively simple and easy to maintain this pipeline is! :tada:

# Webpack Config

## HTML

For now the HTML is loaded via `html-webpack-plugin` which adds all needed meta data and icons (via `favicons-webpack-plugin`). This may need to change once routing is added.

## LESS/CSS

LESS is loaded via `extract-text-plugin` which generates the CSS via LESS loader and auto-prefixes the output.

## Fonts

Fonts are all loaded via `url-loader` and as such are hash encoded. Because we have a custom font this feels most secure.

## Images

Images are loaded either view `url-loader` (attempting to in-line them) or `file-loader`. Ensure all images that need to be included in the build are included (I've dumped all these in `index.js` so far).

I attempted to find an automated way of doing this but because several components dynamically generate image names it looked like it would be more trouble than it was worth. However I did leave in the `transform-react-jsx-img-import` plug-in so any `<img>` tags in JSX files with an explicitly defined source should have their image auto-included.

### URL Loader Images

Webpack will attempt to in-line any images placed in the `images/url-loader` directory that are small enough (< 8kb). All such images will be built to the `images` directory with a hash before their name.

These images are subdivided as follows:

- *sprites*: fundamental to the application's appearance (icons, textures, logos, etc)
- *experience*: logos for the experience list

I expect that a `projects` subdirectory will likely be added here soon for more project-specific images like galleries and screen shots.

### File Loader Images

Images placed here will be copied directly into the `images` directory untouched. Currently this is limited to images that are referenced in meta tags or used by other plug-ins (such as favicons). This should not be necessary in most instances.

# Resources

### Webpack

- [Valentino G. Blog - *Webpack 4 Tutorial*](https://www.valentinog.com/blog/webpack-4-tutorial/#webpack_4_setting_up_webpack_4_with_React)
- [rwieruch; - *The Minimal React + Webpack 4 + Babel Setup*](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
- [Hackernoon - *Webpack 4 tutorial: All You Need to Know, from 0 Conf to Production Mode*](https://hackernoon.com/webpack-4-tutorial-all-you-need-to-know-from-0-conf-to-production-mode-d32759d0dc2d)
- [A Beginner's Guide to Webpack - *Handling Images*](https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d)
- [Survive JS - *Loading Fonts*](https://survivejs.com/webpack/loading/fonts/)
- [Stack Overflow - *webpack with less and postcss autoprefixer*](https://stackoverflow.com/questions/47846209/webpack-with-less-and-postcss-autoprefixer)
- [HTML Webpack Template Repo](https://github.com/jaketrent/html-webpack-template)

### Deployment

Imporant resources I used when determining production deployment include the following:

- [Free Code Camp - *I Built This - Now What? How to deploy a React App on a DigitalOcean Droplet.*](https://medium.freecodecamp.org/i-built-this-now-what-how-to-deploy-a-react-app-on-a-digitalocean-droplet-662de0fe3f48)
- [Medium - *Understanding React Deploymnent*](https://medium.com/@baphemot/understanding-react-deployment-5a717d4378fd)
- [Webpack - *Guides/Production*](https://webpack.js.org/guides/production/)
- [Digital Ocean - *How To Set Up Automatic Deployment with Git with a VPS*](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps)

### CSS/LESS

- [Eric Rasch - *Easy Media Queries Shortcodes (w/ LESS)*](https://codepen.io/ericrasch/pen/HzoEx)
- [codrops - *mask-image*](https://tympanus.net/codrops/css_reference/mask-image/)

### Design Inspirations

- [Timmy O'Mahony - Personal Portfolio](https://timmyomahony.com/#recent-projects)
- [Zach Cole - Personal Portfolio](http://zcole.me/)
- [freeCodeCamp - *15 Web Developer Portfolios to Inspire You*](https://medium.freecodecamp.org/15-web-developer-portfolios-to-inspire-you-137fb1743cae)
