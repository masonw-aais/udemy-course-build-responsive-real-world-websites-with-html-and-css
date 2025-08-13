RESOLVING CONFLICTING DECLARATIONS:

Priority from Highest to Lowest:

    5.  Declarations marked !important

    4.  Inline style (style attribute in html)

    3.  ID (#) selector

    2.  Class (.) or psuedo-class (:) selector

    1.  Element selector (p, div, li, etc...)

    0.  Universal Selector (*)

If you have multiple of the same declaration, the last selector in the code applies (the one closest to the bottom of the code)

INHERITANCE
Most properties that get inherited are related to text.
In our example, color, font-size, and font-family all get inherited from the body, while border-top does not.

BLOCK vs INLINE vs INLINE-BLOCK

BLOCK ELEMENTS

- Block level elements cannot be side-by-side to one another, they expand the width of their container (unless otherwise specified), the take up all the space they need horizontally
- Examples, <body>, <main>, <header>, <footer>, <div>, <p>, <h1>-<h6>, <section>, <article>, etc.
- Elements are formatted visually as blocks
- Elements occupy 100% of paretn alement's width, no matter the content
- Elements are stacked vertically by default, one after another
- Most elements by default are displayed as block-level elements (display: block)

INLINE ELEMENTS

- They flow inline with surrounding text/content (they sit next to each other, similar to words in a paragraph)
- Occupies on the space necessary for its content
- Causes no line-breaks before or after the elements
- Box model applies in a different way: heights and widths do not apply
- Padding and margins are applied only horizontally (left and right)
- examples: a, img, strong, em, button, etc.
- display: inline

INLINE-BLOCK ELEMENTS

- Looks like an inline from the outside, behaves like block-level on the inside
- Occupies only content's space
- Causes no line-breaks
- Box-model applies as showed
- display: inline-block
  essentially, combines the best of both inline and block elements

NORMAL FLOW VS ABSOLUTE POSITIONING

Normal Flow (position: relative)

- Default Positioning
- Element is "in flow"
- Elements are simply laid out according to their order in the HTML code

Absolute Positioning (position: absolute)

- Element is removed from the normal flow: "out of flow"
- No impact on surrounding elements, might overlap them
- We use top, bottom, left, or right to offset the element from its relatively positioned container

Absolute positioning must be used with Relative positioning. This establishes the relationship about where the absolutely positioned element should be.

- relative = "I’m the reference point for any absolutely positioned children."
- absolute = "I’ll go exactly where you tell me, using my nearest positioned ancestor as a map."
- when you have multiple absolute/relative elements, you must position the absolute element inside the relative element in your html.

PSEUDO ELEMENTS

Pseudo class vs pseudo elements:

- Pseudo class — targets an element based on a state or condition (does not create new content).
  a:link {
  color: blue;
  }

- Pseudo element — targets a specific part of an element’s content or inserts virtual content without changing HTML.
  h1::first-letter {
  font-size: 2em;
  }

- Sibling element = element with the same parent as another element — i.e., they are at the same level inside the same parent.
- Adjacent sibling = the very next sibling after another element in the DOM. Example:
  h3 + p::first-line {
  color: red;
  }
- Here, the + means “select the first <p> that comes immediately after an <h3>,” and ::first-line styles only its first line.

BEFORE / AFTER PSEUDO ELEMENTS

::before — creates a pseudo-element that will automatically be the very first child of the selected element.

- Often used with the content property to insert text, icons, or other decoration before the element’s main content.

Example:
h1::before {
content: "★ ";
color: gold;
}

::after — creates a pseudo-element that will automatically be the very last child of the selected element.

- Often used for icons, extra symbols, clearfixes, etc.

Example:
h1::after {
content: " ✓";
color: green;
}

Extra notes for ::before and ::after:

- They are inline by default, but you can style them like any element (block, inline-block, flex, etc.).
- They require the content property — even if it’s empty (content: "") — or they won’t appear.
- They don’t exist in the DOM — they’re rendered by CSS.
