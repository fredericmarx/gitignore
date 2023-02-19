# `@fredericmarx/gitignore`

[![Node.js CI](https://github.com/fredericmarx/gitignore/actions/workflows/node.js.yml/badge.svg)](https://github.com/fredericmarx/gitignore/actions/workflows/node.js.yml) [![Node.js Package](https://github.com/fredericmarx/gitignore/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/fredericmarx/gitignore/actions/workflows/npm-publish.yml)

When you think to yourself “Wouldn’t it be cool if I could just run `npx @myname/gitignore` instead of manually copying it over from my previous project every time” and then it’s suddenly 7pm.

## Usage

```
npx @fredericmarx/gitignore
```

This will copy the contents of `gitignore` to a new `.gitignore` file in your current working directory.

This module is designed as a standalone CLI tool. You could install it in your project with `npm install @fredericmarx/gitignore`. I don’t know why you would want to do that, but who am I to tell you what to do with your life.

## What’s in the `.gitignore`?

My `.gitignore`-template is based on an old, stripped-down version of [GitHub’s Node `.gitignore`](https://github.com/github/gitignore/blob/main/Node.gitignore). If I run into any other conventions for log files or generated code, I will add them here as I encounter them. Most notably, this template ignores the dreaded `.DS_Store` files.

## Things I learned making this

- I could have had it so much easier by adding a shell command to my [dotfiles](https://www.webpro.nl/articles/getting-started-with-dotfiles) that does the same thing.
- The Node module ecosystem has become such a mess, especially if you’re just throwing together a project and copy stuff from tutorials that sometimes use ES Modules and sometimes CommonJS. I’m glad that in most of my frontend work a bundler will abstract these issues away.
- If you want to make your package executable via [npx](https://www.npmjs.com/package/npx), you need two things: a `bin` field in your `package.json`, and a [shebang](https://blog.deepgram.com/npx-script/#making-an-executable-script) at the start of the file you want to execute.
- I played around with git commit hooks for this one, and [Husky](https://www.npmjs.com/package/husky) made it super easy to work with them. They also do some clever things with npx in their installation process, so I naturally felt a deep kinship with them.
- [Node.js has a built-in test runner](https://nodejs.org/api/test.html)! It feels a bit clunky compared to fully-featured libraries like Jest, but I liked the idea of Using The Platform, and keeping external dependencies to a minimum. I initially decided to add tests as a joke to make this as overengineered as possible, but they actually saved me from a bug already when I had to significantly reshuffle my code due to the npm `.gitignore` bundling fiasco (see next point)
- [npm makes it incredibly hard to bundle a `.gitignore` file with your package](https://github.com/npm/npm/issues/1862). Not gonna lie, that was the one that really made me want to set my computer on fire 😫. See, the whole reason I started this project, the _pièce de résistance_, if you will, is that I wanted to create a JavaScript module that, upon execution, copies its own `.gitignore` file to your current working directory. After some back and forth I decided to choose the popular workaround of simply using a `gitignore` template (without the leading dot), which is pragmatic, but infinitely less fun.
