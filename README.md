# react-theme-eclipse
Implement in your React App a theme component easily

![gif](/how_looks_like.gif)


![example](/example.png)

# Important!

To use this component you need to have installed *sass*

# Clone repository

~~~
git clone https://github.com/marceb1296/react-theme-eclipse.git
~~~

# Workdir

The Theme component by default takes *theme.scss* from *css* dir
  
example:
~~~
├── css
│   └── themes.scss
├── other react dirs...
~~~

As all we know, there isnt a specific way to manage a project, so i decide upload the files directly, however, if you put your css files into a _css_ dir, and put your components into a _components_ dir, you dont have to do anything else, on the other hand, if you put your css files in other dir, you must edit *themes.js* at the second line

~~~
themes.js

1   import React, { useState, useEffect } from 'react';
2   import "dir/to/your/ccs/files/themes.scss";
~~~

# How it works

### Note

Dont forget to move _moon.png_ and _sun.png_ to your _public_ dir

1. ### import component

~~~
YourComponent.js

1   import Theme from "dir/where/you/save/themes";
~~~

2. ### How to use it

Attributes:

_Required attributes *_

- ligthColor => Color to set when theme is ligth, default = white
- darkColor => Color to set when theme is dark, default = black
- position  => Position where component will be displayed [ start, center, end ] default = end
- dispatch * => Dispatch function [ useReducer | react-redux ]


~~~
return (
  ...
  <Theme position="start" dispatch={dispatch}/>
  ...
)
~~~

3. ### Reducer values

Theme component set into reducer function with "SET THEME" *type* and value from payload

~~~
themes.js

...      
dispatch({
  type: 'SET THEME',
  payload: 'dark' // 'ligth'
})
...
~~~

So, your Reducer function should looks like this

~~~

const initialState = {theme: localStorage.getItem("theme") || "white"};

function reducer(state, action) {

  const {type, payload} = action

  switch (type) {
    ...
    case 'SET THEME':
      localStorage.setItem("theme", payload)
      return {theme: payload};
    ...
  }

}
~~~


