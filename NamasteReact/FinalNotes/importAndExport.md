# Export and Import in React
- Two types of export/import in React

1. Default export/import
   export default Header;
   import Header from "./components/Header"

2. Named export/import
    export first;
    export second;
    import {first, second } from '..';

3. * as Export: allows you to export all named exports from a module as properties of an object
    import * as Header from "./components/Header";
    use Header.Logo, Header.var1, Header.fun()

# Can we use default export with named export ?
  - yes      
  import Header, {Logo} from "./components/Header";