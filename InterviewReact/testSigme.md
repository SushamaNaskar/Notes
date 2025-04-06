# vs folder struture
```
import React, { useState } from 'react';

// Folder component that will render a single folder and its contents
const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginLeft: '20px' }}>
      <div onClick={toggleOpen} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
        {isOpen ? '[-]' : '[+]'} {name}
      </div>
      {isOpen && (
        <div style={{ marginLeft: '20px' }}>
          {children.map((child, index) => (
            <FileSystemNode key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

// File component that will render individual files
const File = ({ name }) => {
  return <div>{name}</div>;
};

// Main component to render the folder structure
const FileSystemNode = ({ name, type, children }) => {
  if (type === 'folder') {
    return <Folder name={name} children={children} />;
  } else if (type === 'file') {
    return <File name={name} />;
  } else {
    return null;
  }
};

// Sample file structure data
const fileStructure = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'Header.js', type: 'file' },
          { name: 'Footer.js', type: 'file' },
        ],
      },
      {
        name: 'App.js',
        type: 'file',
      },
    ],
  },
  {
    name: 'public',
    type: 'folder',
    children: [
      {
        name: 'index.html',
        type: 'file',
      },
    ],
  },
  {
    name: 'package.json',
    type: 'file',
  },
  {
    name: 'README.md',
    type: 'file',
  },
];

// Main App Component
const App = () => {
  return (
    <div>
      <h1>Folder Structure</h1>
      {fileStructure.map((item, index) => (
        <FileSystemNode key={index} {...item} />
      ))}
    </div>
  );
};

export default App;
```

# user action log

const actions = [
  { userId: 1, action: 'login' },
  { userId: 2, action: 'login' },
  { userId: 3, action: 'login' },
  { userId: 1, action: 'logout' }
];

```
const result = {};


actions.forEach(({ userId, action }) => {

  if (!result[userId]) {
    result[userId] = { action: [], count: 0 };
  }

 
  if (!result[userId].action.includes(action)) {
    result[userId].action.push(action);
  }


  result[userId].count += 1;
});

console.log(result);

{
    1:{action:['login','logout'],count:2},
    2:{action:['login'],count:1},
    3:{action:['login'],count:1},
}

```