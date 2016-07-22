# DOM Enlightenment
22nd July 20016
Sankalp Agarwal

---

# Understanding DOM
#### Dom is an interface for accessing and manipulating HTML document and elements
HTML code  = > tree

---

```html
<html>
<head>
<title>The document</title>
</head>
<body>
<div>Data</div>
<ul>
<li>Warning</li>
<li></li>
</ul>
<div>Top Secret!</div>
</body>
</html>

```
![tre structure](http://javascript.info/files/tutorial/browser/dom/simpledom2.png)

---

# Type of Nodes
DOCUMENT_NODE   (e.g. window.document)
ELEMENT_NODE   (e.g. body, a, p, script, style, html, etc)
TEXT_NODE   (e.g. text characters in an html document)
DOCUMENT_TYPE_NODE   (e.g. !DOCTYPE html)
etc

---

# Node as Objects

### Every DOM node is an instance of a DOM Object (aka interface)
Therefore, 	they have properties and methods
Eg. appendChild(), innerHTML

### DOM objects inherit from other DOM objects
Eg. h1 > HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

---

# Document
window.document is an instance of the Document object
It is the root of the DOM tree.


---

# HTML*Elements
#### All elements in an HTML document have unique constructors of the type HTML*Element
Example
* HTMLButtonElement
* HTMLAnchorElement
* HTMLBodyElement
* HTMLTableElement

---
# HTML*Element > HTMLElement > Element > Node
createElement()
tagName
children
setAttribute()
classList()
attributes

---

# Text 
#### All text in an HTML document
#### Including whitespaces
textContent
splitText()
appendData()
deleteData()
insertData()
replaceData()
subStringData()
normalize()
data

---

# Things you can do with the DOM

---

# 1. Selecting nodes
getElementById()
activeElement
querySelector() - select with CSS selector syntax

---

# 2. Traversing the DOM
parentNode
firstChild
lastChild
nextSibling
previousSibling

---

# 3. Creating nodes
createElement()
createTextNode()

---

# 4. Inserting & removing nodes
appendChild()
insertBefore()
cloneNode()
removeChild()
replaceChild()

---

# 5. Modifying content
innerHTML
outerHTML
textContent
innerText, outerText
appendData()
deleteData()

---

# 6. Working with Node collections
HTMLCollections, Nodelist
ChildNodes
Convert this to array

Eg. querySelectorAll()
getElementsByTagName()
getElementsByClassName()
children (HTML Collection)
document.images
document.all

---

# 7. Working with attributes
getAttribute()
setAttribute()
removeAttribute()
hasAttribute()
arrtibutes - get a list
Eg. set class, id

---

# 8. Working with classes
classList
classList.add()
classList.remove()
classList.toggle()
classList.contains()

---

# 9.1 Working with styles

### Inline style property - used to get, set
Eg. element.style
### getComputedStyle()
Eg. 
### CSSStryleSheet object
Eg. 

---

# 10.  Listening to events

Type of events
* Interface events (load, error, resize, scroll...)
* Focus (focus, blur, focusIn...)
* Input (change, submit...)
* Mouse (click, moueDown, mouseEnter...)
* Keyboard (keyUp, keyDown, keyPress)
* touch (touchstart, touchmove,...)

---

#  addEventListener()
### element.addEventListener('click', func);
available on elements, window, document
removeEventListener()

---

# event object
callback function gets this default parameter
can be used to get data about the event

---

# event Propagation

Capture phase & Bubble phase

![event chain](http://javascript.info/files/tutorial/browser/events/event-order-w3c.gif)

---

# Event delegation
Using propagation & the event object