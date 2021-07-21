Dylan Warner
6/12/2021
WDD 330

W08 Readings

    Chapter 8 - CSS3 Transforms and Transitions - 

	Transforms:

- The CSS3 transform property lets you translate, rotate, scale, and/or skew any element on the page.

- Translation - Translation functions allow you to move elements left, right, up, or down.

- If you only want to move an element vertically or horizontally, you can use the translatex or translatey functions respectively.

- The scale(x,y) function scales an element by the defined factors horizontally then vertically.

- The rotate() function rotates an element around the point of origin by a specified angle value.

- The skew(x,y) function specifies a skew along the x and y axes. As you’d expect, the x specifies the skew on the x axis, and the y specifies the skew on the y axis.

    Transitions:

- Transitions allow the values of CSS properties to change over time, essentially providing simple animations.

- Any property changing from one value to another for which you can find a valid midpoint can be transitioned.

- The transition-duration property sets how long the transition will take: the duration of time it takes to go from the default state to the transitioned state.

- The transition-timing-function lets you control the pace of the transition in even more granular detail.

- by using the transition-delay property, it’s possible to introduce a delay before the transition begins.

- The transition properties allow for multiple transitions in one call. For example, if we want to change the color at the same time as changing the rotation and size, we can.

    Chapter 12 - Canvas, SVG, and Drag and Drop

	Canvas:

- With canvas, we can draw shapes and lines, arcs and text, gradients and patterns.

    SVG:

- SVG stands for Scalable Vector Graphics, a specific file format that allows you to describe vector graphics using XML.

- Canvas allows for pixel manipulation, as we saw when we turned our video from color to black and white. One downside of canvas is that it operates in what’s known as immediate mode. This means that if you ever want to add more to the canvas, you’re unable to simply add to what’s already there.

- What you draw to SVG is accessible via the DOM, because its mode is retained mode, meaning that the structure of the image is preserved in the XML document that describes it.

    Drag and Drop:

- The drag and drop API allows us to specify that certain elements are draggable, and then specify what should happen when these draggable elements are dragged over or dropped onto other elements on the page.
