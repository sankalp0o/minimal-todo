# DOM Enlightenment
22nd July 2016
Sankalp Agarwal
Geekskool

---

# Understanding DOM
#### Dom is an interface for accessing and manipulating HTML document and elements
HTML code  = > tree

---
# 
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
![tree structure](http://javascript.info/files/tutorial/browser/dom/simpledom2.png)

---

# Type of Nodes
* DOCUMENT_NODE   (e.g. window.document)
* HTML\*ELEMENT_NODE   (e.g. body, a, p, script, style, html, etc)
* TEXT_NODE   (e.g. text characters in an html document)
* DOCUMENT_TYPE_NODE   (e.g. !DOCTYPE html)
etc

---

# Node as Objects

### Every DOM node is an instance of a DOM Object (aka interface)
Therefore, 	they have properties and methods
```javascript
appendChild()
innerHTML
```
### DOM objects inherit from other DOM objects
Eg. h1 => HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

---

# Document Object
window.document is an instance of the Document object
It is the root of the DOM tree.
```javascript
document.body
document.title
```
---

# HTML*Element Object

#### All elements in an HTML document have unique constructors of the type HTML*Element
Example
* button => HTMLButtonElement
* a => HTMLAnchorElement
* body => HTMLBodyElement
* table => HTMLTableElement

---

# HTML*Element > HTMLElement > Element > Node
```javascript
createElement()
tagName
children
setAttribute()
classList()
attributes
```
---

# Text Object 
#### All text in an HTML document
#### Including whitespaces
```javascript
textContent
splitText()
appendData()
deleteData()
insertData()
replaceData()
subStringData()
normalize()
data
```
---

# Things you can do with the DOM

---

# 1. Selecting nodes
```javascript
getElementById()
activeElement
querySelector() // select with CSS selector syntax
```
---

# 2. Traversing the DOM
```javascript
parentNode
firstChild
lastChild
nextSibling
previousSibling
```
---

# 3. Creating nodes
```javascript
createElement()
createTextNode()
```
---

# 4. Inserting & removing nodes
```javascript
appendChild()
insertBefore()
cloneNode()
removeChild()
replaceChild()
```
---

# 5. Modifying content
```javascript
innerHTML
outerHTML
textContent
innerText, outerText
appendData()
deleteData()
```
---

# 6. Working with Node collections
Select multiple nodes from a tree 
Live lists(mostly)
Not real arrays (have length property)

```javascript
querySelectorAll()
getElementsByTagName()
getElementsByClassName()
children
document.images
childNodes
```
---

# 7. Working with attributes
```javascript
getAttribute()
setAttribute()
removeAttribute()
hasAttribute()
attributes  //get a list of all attributes
```
Eg. set id using attributes

---

# 8. Working with classes
```javascript
____.classList
classList.add()
classList.remove()
classList.toggle()
classList.contains()
```
---

# 9 Working with styles

###### Inline style property - used to get, set, remove
```javascript
_____.style.backgroundColor = 'red';
```

###### CSSStyleSheet & CSSStyleRule objects
```javascript
document.styleSheets; //list of CSSStyleSheets
document.styleSheets[0].cssRules //list of CSSStyleRules
styleSheet.insertRule('p{color:red}', 1);
```

---

# 10.  Listening to events

---


#  addEventListener()
```javascript 
____.addEventListener('click', handlerFunc, false);
```
available on elements, window, document
removeEventListener()

---

# Type of events
* Interface events (load, error, resize, scroll...)
* Focus (focus, blur, focusIn...)
* Input (change, submit...)
* Mouse (click, moueDown, mouseEnter...)
* Keyboard (keyUp, keyDown, keyPress)
* touch (touchstart, touchmove,...)

---

# event object
callback function gets this default parameter
can be used to get data about the event

---

# event Propagation

### Capture phase & Bubble phase

![event chain](http://javascript.info/files/tutorial/browser/events/event-order-w3c.gif)

---

# That's all folks