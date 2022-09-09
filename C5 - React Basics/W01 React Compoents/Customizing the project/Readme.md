# Customizing the project

So far, you’ve learned about React components, but now you will focus on learning how to customize the project. You will learn about the software development approach, detailing the creation of separate associated files, the requirements gathering and the subsequent folder structure to be created.

Imagine that you've been given the task of building a somewhat more complex website layout using React.

At this point, you still don't know too much about how React works, but even with your limited knowledge, you can still build some relatively interesting designs.

Currently, you need to build a simple typography-focused layout for a coding blog.

This means that you will not have to use images, which simplifies your task significantly.

The layout you're supposed to build will consist of the following sections:

- Main navigation 
- Promo (main advertisement)
- A list of newest posts' previews (intros)
- The footer 

Keeping in mind the above structure, how would you organize your code?

This is where React docs can help. They suggest two approaches:

1. Grouping by features 

2. Grouping by file type 

They also advise not to nest folders too deep, and to keep things simple and not overthink it.

They even say that if you're just starting out, you shouldn't spend more than five minutes setting up a project.

Taking this advice into account, you might say that for a small project like this, you could keep it as simple as just adding a `components` folder and moving all your `components` into it. This is exactly what you’ll do next.

Since this is the third app being built in React Basics course, let’s name the app `thirdapp`. Here's the command to run in a suitable folder:

```{shell}
npx create-react-app thirdapp
```

This will produce a brand-new starter app with a familiar structure.

Inspecting the src folder of the starter app, it looks like this:
```
src/
    App.js
    App.test.js
    index.css
    index.js
logo.svg
    reportWebVitals.js
    setupTests.js
```
Then simply add a components folder to it, like this:
```
src/
    components/
    App.js
    App.test.js
    index.css
    index.js
logo.svg
    reportWebVitals.js
    setupTests.js
```

Since the components folder is currently empty, you can add a component for each of the sections of the typography-focused blog. Here's the structural update:
```
src/
    components/
        Nav.js
        Promo.js
        Intro1.js
        Intro2.js
        Intro3.js
        Footer.js
    App.js
    App.test.js
    index.css
    index.js
logo.svg
    reportWebVitals.js
    setupTests.js
```

At this point, there's no need to :anguished: complicate  things. You have the `Nav` component, the `Promo` component, the `Intro1`, `Intro2`, and the `Intro3` component. Finally, there's also a Footer.js component.

This means you've fully planned the app, based on some best practices as suggested by the official React docs website, and based on the level of complexity of the project itself. Since this project is relatively simple, this structure feels right.

In this reading, you’ll just build all the components inside the components folder, and then, in the upcoming lesson items, import them into the `App.js` file.

For now, let’s just build those components. After you've added the `components` folder, you’ve also added all the functional component files. Since they are all currently empty, you can start adding them, one by one.

Heres' the contents of the Nav.js file:
```{Nav.js}
function Nav() {
  return (
<nav className="main-nav">
<ul>
<li>Home</li>
<li>Articles</li>
<li>About</li>
<li>Contact</li>
</ul>
</nav>
  );
}

export default Nav;
```

Next, you can focus on the Promo.js file:
```
function Promo() {
    return (
<div className="promo-section">
<div>
<h1>Don't miss this deal!</h1>
</div>
<div>
<h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
</div>
</div>
    );
  }

export default Promo;
```
Once you’ve finished the promo section, you can focus on the Intro components.

Here's Intro1.js:
```
function Intro1() {
    return (
<div className="blog-post-intro">
<h2>I've become a React developer!</h2>
<div>
<p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
<p className="link">Read more...</p>
</div>
</div>
    );
  }

export default Intro1;
```

Here's the code for the Intro2.js component:

```
function Intro2() {
    return (
<div className="blog-post-intro">
<h2>Why I love front-end web development</h2>
<div>
<p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
<p className="link">Read more...</p>
</div>
</div>
    );
  }

export default Intro2;
```

You can finish the previews for my blog posts with the code for Intro3.js component:

```
function Intro3() {
    return (
<div className="blog-post-intro">
<h2>What's the best way to style your React apps?</h2>
<div>
<p>There are so many options to choose from. Here's a high-level overview of the popular ones.</p>
<p className="link">Read more...</p>
</div>
</div>
    );
  }

export default Intro3;
```

There's just one more thing left to code, the Footer component, so here it is:

```
function Footer() {
    return (
<div className="copyright">
<p>Made with love by Myself</p>
</div>
    );
  }

export default Footer;
```

Now that you have completed all the components for the app, here are a few more interesting things about the syntax.

These are:

The use of the className attribute in JSX 

The use of separate components for repetitive code 

Where are all the props? 

Why was I not using the <a> element for dummy links? 

Now let’s briefly discuss the fourbullet points above.

Why use the className attribute in the JSX syntax?

Well, with JSX, it looks like HTML so much that it's easy to forget that it's actually JavaScript code - not HTML.

While regular HTML does indeed have a class attribute, which is used to list one or more CSS classes to be used on a given HTML element, this cannot really work in JSX. The reason is that JSX is a special kind of JavaScript syntax, and the word class is a reserved keyword in JSX. That's why the React team had to make a compromise and so className is used in JSX to list one or more CSS classes to be used on a given element or component.

But why use Intro1.js, Intro2.js, and Intro3.js? Isn't one of the tenets of coding the DRY approach - that is, the "Don't repeat yourself" approach?

Indeed, it is. However, there are still a few concepts to discuss before you learn how to re-use a single component with variations in its content. This has to do with data in components, but don’t worry, we’ll be getting to that later. 

The third question is about the props object. It has been mentioned before, but so far it hasn't been used. It hasn’t been used in this example either.

The answer to this question has to do with the title of the next lesson item: Importing Components. In this lesson item, you’ll see in practice how you can import components in React, and show you how to make them work better, with the help of props.

The final question is about not using the <a> element for dummy links in my app.

