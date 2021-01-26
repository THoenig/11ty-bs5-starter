# 11ty-bs5-starter

Bootstrap 5 starter for [11ty](https://www.11ty.dev/). Developed with rapid prototyping, easy customization/theming and fast loading times in mind.

## Documentations
- [11ty Static Site Generator](https://www.11ty.dev/docs/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
- [Parcel.js](https://parceljs.org/getting_started.html)
- [PurgeCSS](https://purgecss.com/)

## How to get started

### 1. Clone the repository
```git clone https://github.com/THoenig/11ty-bs5-starter.git your-project-name```

### 2. cd into project directory
```cd your-project-name```

### 3. Install dependencies
```npm install```

### 4. Run
```npm start```

Then visit [http://localhost:8080](http://localhost:8080).

## Building for production
```npm run build```

This will minify HTML, CSS and JS and purge unused styles.

## Differences from 11ty default config
While I want to keep things as default as possible, I decided to change the following:

### [Input](https://www.11ty.dev/docs/config/#input-directory)/[Output](https://www.11ty.dev/docs/config/#output-directory) folders:
``` javascript
  config.dir = {
    input: './src',
    output: "./public"
  }
```
To separate configuration, actual source and output.

### [setDataDeepMerge(true)](https://www.11ty.dev/docs/data-deep-merge/)
For me, it just feels like this should be the default.

### [setTemplateFormats](https://www.11ty.dev/docs/config/#template-formats)

``` javascript
  config.setTemplateFormats([
    'njk',
    'md',
    'jpg',
    'png',
    'svg',
    // 'liquid',
    // 'pug',
    // 'ejs',
    // 'hbs',
    // 'mustache',
    // 'haml',
    // '11ty.js',
  ])
```

### [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs)
I like it, so I added it.

### Add htmlmin [transform](https://www.11ty.dev/docs/config/#transforms)
Minify HTML if NODE_ENV is set to 'production'.

### Ignore files and folders that start with '__' (double underscore)
11ty parses Liquid in markdown. This is great, because this enables you to include custom Liquid/HTML in your markdown or split your content up. To prevent 11ty to create a new output folder, just use the double underscore.

**Example**:
``` markdown
# Hi
This is content part 1.

{% include ./__content-part-2.md %}
```

## Customization

By default, all styles and JS modules are activated. Deactivate the components you don't need to reduce file sizes and increase overall performance.

The entry point for all assets is ```parcel.js```. Nothing much to see here, in fact this is the whole content:

``` javascript
import "./src/_assets/scss/main.scss"
import "./src/_assets/js/main.js"
```

Use the respective ```main.{scss,js}``` files to import stuff and extend to your liking.

### SCSS
**Entry point:** ```src/_assets/scss/main.scss```.

In ```src/_assets/scss/_bootstrap.scss``` you can theme Bootstrap and (de-)activate Bootstrap modules. Further information on this topic in the Bootstrap docs about [SCSS customization](https://getbootstrap.com/docs/5.0/customize/sass/)

### JS
**Entry point:** ```src/_assets/js/main.js```. 

Bootstrap imports are located in ```src/_assets/js/_bootstrap.js```. The Bootstrap docs for popovers and tooltips state that these modules have impact on performance, so make sure to deactivate if you don't need them.

### The _data files
```
src/_data
├── env.js
├── layout.json
├── menus.json
└── site.json
```

#### env.js
This contains the expression ```isDev``` to determine if NODE_ENV is 'development'. It's used to include sourcemaps in development mode and leave them out for a production build.

#### layout.json
Applies the default layout for all pages (unless otherwise specified).

#### menus.json
As I didn't want to include too much stuff like the [11ty navigation plugin](https://www.11ty.dev/docs/plugins/navigation/), you can use this file to build navigation menus the manual way. Of course, feel free to use the plugin!

Don't forget to add a trailing slash to the URLs (at least to your internal ones)! This is important to be able to show the current active page. 11ty's ```{{ page.url }}``` **does** add a trailing slash and if you don't, the comparison will fail.

#### site.json
Contains the default metadata, site name and language.

## That's it!
Now go and create something awesome!