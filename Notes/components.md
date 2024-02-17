# Functional components

```
function FunComponent(){
    return(
        <h1>This is my functionla component</h1>
    )
}

export default FunComponent;
```

- now we can simply use this by importing it where we want to use it by using <FunComponent />

# meaning of export default function

- export means we are exporting this componenet or function in another componennet
- default is used when we only exporting the single function like in FunComponenet we have only one function but when we have the multiple function then we just use below syntax

```
expot function funName(){}
```

then importig syntax will be

```
import {funComponent} from './xyz';

```

# class components

```
import React, {Component} from 'react';

class ClassComponent extends Component{

}
```

- here class is keyword
- ClassComponent name of class component
- extends keyword that means we are extend our base class to ClassComponent(child). and the base class is {Component} which import at top in code from react.
- basiccaly we are inhert the Component class of react by using extend word
- this is the class compnent
- now writign class code
- we have to use render() method before return anytihng in class components

```
import React ,{Component} from 'react';

class classcomponent extends Component {
    render(){
        return(
            <h1>This is my class based component</h1>
        )
    }
}

```

## Note the expoting and importing method for class based component is same as in functional componenets.
