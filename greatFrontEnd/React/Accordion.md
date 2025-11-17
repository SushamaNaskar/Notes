# Accordion

## Option 1

- Format the data as an array of objects

```
[{
heading:"HTML",
context:"some text"
}]
```

- Call a seperate component for each object

<DisplayContent heading={heading} context={context}>

- Keep an state isOpen for each object in DisplayContent
  [isOpen,setIsOpen]=useState(false);

## Option 2

- Format the data as an array of objects and each object contains id

```
[{
id:"HTML",
heading:"HTML",
context:"some text"
}]
```

- state to contain list of id which are open
  const [openSections, setOpenSections] = useState(
  new Set(),
  );

- When clicked on a button check if it's present in openSections

  1. if present delete
  2. if not present add

- use hidden property to display the content

# chevron icon

```
<span
   aria-hidden={true}
   className={['accordion-icon',
              isExpanded && 'accordion-icon--rotated',
              ].filter(Boolean)
             .join(' ')}
/>

.accordion-icon {
  border: solid currentcolor;
  border-width: 0 2px 2px 0;
  display: inline-block;
  height: 8px;
  pointer-events: none;
  transform: translateY(-2px) rotate(45deg);
  width: 8px;
}

.accordion-icon--rotated {
  transform: translateY(2px) rotate(-135deg);
}


```

# border: solid currentcolor;

```
<div className="title">
fkfkf
<span>kkk</span>
</div>
```

