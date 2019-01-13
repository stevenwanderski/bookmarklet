# Word Counter and Clouder Bookmarklet

Hello!

Please see `scripts.js` for the uncompressed bookmarklet code and `scripts.min.js` for the compressed code.

To install the bookmarklet, copy the contents of `bookmarklet.js` into a bookmark "URL" (or comparable) field in a browser. The code contained in  `bookmarklet.js` is simply the contents of `scripts.min.js` prepended with `javascript:`.

## Caveats

1. The word selector could be better. Ideally `script` tags would be ignored as well as more punctuation and special characters.
2. Styles should be specifically scoped to the `#bookmarklet` selector to prevent the parent page's styles from bleeding in.
3. The word cloud calculation could be better by assigning the lowest frequency to the `minFont` value instead of always using a percentage of `maxFont`.
4. Cleanup! The code could be refactored using any number of good practices: classes, functions, ES6, tests, etc..
