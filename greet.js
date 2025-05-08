GitHub will render this markdown beautifully with syntax highlighting.

---

### ✅ **Option 2: JSDoc Inside JS File (For Inline Descriptions in Code View)**

Use JSDoc comments at the top of each `.js` file to document it like a “view mode.”

```js
/**
 * greet.js
 *
 * Description:
 * This function takes a name and returns a greeting message.
 * Example: greet("Alice") ➞ "Hello, Alice!"
 */

/**
 * Returns a greeting message
 * @param {string} name - Name to greet
 * @returns {string}
 */
function greet(name) {
  return `Hello, ${name}!`;
}