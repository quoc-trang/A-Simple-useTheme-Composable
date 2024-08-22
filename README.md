---
difficulty: 1
training: true
chapter: "Chapter 2: Composables"
tags: vue
---

# A Simple useTheme Composable

In this challenge, you are tasked with creating a `useTheme` composable.

## Context

This app supports 4 different themes: "light", "dark", "cupcake" and "coffee". These themes apply different styles to the page based on the value of a `data-theme` attribute on the page's `<html>` tag. For example, to use the coffee theme the opening html tag would look like this:

```
<html data-theme="coffee">
```

Your job is to abstract away these low level details of how a theme is applied and make it easy to change the theme from within a Vue component.

## Requirements

The `useTheme` composable should:

1. take in an optional single agrument: the initial theme value (just a plain string is fine)
   - defaults to "light" if not provided
2. return a reactive ref with the value of the current theme
3. Update the html tag's data-theme attribute whenever the value of the returned ref changes (thus updating the look of the page)
4. Work with the current implementation in `App.vue` (ie, you shouldn't have to change anything in `App.vue`, only work in `useTheme.ts`)

> 💡 HINT: Feel free to use TypeScript to make your composable type safe if you'd like. This is NOT required however.

![Screenshot of the solution](https://images.certificates.dev/csvd-training-code-challenge-6.gif)
