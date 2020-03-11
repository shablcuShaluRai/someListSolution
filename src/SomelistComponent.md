
## Solution with state

## Problem: 1

   ### While rendering the component, will throw referenceError:
  
   ```
    Must call super constructor in derived class before accessing 'this' or returning from derived constructor
   ```

## Solution: 1

    1 - Need to add super keyword.

    ### Add super keyword

       a. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

       b.  By calling the super() method in the constructor method, component will have access of this keyword. so this.state will not throw any error.

       ```
       constructor(props){
         super(props) {
           this.state = {
             items: this.props.items
           }
         }
       }

       ```

### Remove constructor
    we can  update state without constructor as following

```
    state = {
    items: this.props.items
  }

  ```
## Problem : 2

  ### should not assign props value to state in the constructor

    constructor (props) {
        super(props) {
        this.state = { items: props.items }
        }
      }

  The danger is that if the props on the component are changed without the component being ‘refreshed’, the new prop value will never be displayed because the constructor function (or getInitialState) will never update the current state of the component. The initialization of state from props only runs when the component is first created.

### Solution: 2

   State should define an intial state then update the state once props has changed.

   To update the state, lifecycle methods will be usefull. To update the state , static getDerivedStateFromProps lifecyle method. In this methods, if any changes will happen in the state and props then

    static getDerivedStateFromProps(nextProps, state) {
        if(nextProps.item !== state.items) {
            return { items: nextProps.items}
        } else {
            return null
        }
        }

# Solution Without State

## Problem: 1

   ### While rendering the component, will throw referenceError:
  
   ```
    Must call super constructor in derived class before accessing 'this' or returning from derived constructor
   ```

## Solution: 1

 no need to define state in the component

## Problem: 2

 ###  shouldComponentUpdate lifecycle method

 If we are not using state then will get `TypeError: Cannot read property 'items' of null`, because state of items is not available.

## Solution: 2

Removed the shouldComponentUpdate lifecycle method.because we have not defined state of items.


## Problem: 3

 component should not return this.state.items

## solution: 3 

Return this.props.items instead of this.state.items

```
{this.props.items.map((item, i) => this.renderElement(item, i))}

```

## problem: 4
Fixed height
```
<ul style={{ backgroundColor: 'red', height: 100 }}>{...}</ul>

```

## solution: 4

We should not give fixed value of height. If content will increase then background color will remain same.

so removed the height properties.

```
<ul style={{ backgroundColor: 'red'}}>{...}</ul>

```

## problem: 5

 Each child in a list should have a unique "key" prop.

## solution: 5

  ### Need to add keys 

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

Keys should be in string format

```
  renderElement (item, index) {
    return <li key={`item_ ${index}`}onClick={() => this.handleClick(index)}>{item.title}</li>
  }
```

## problem: 6

while clicking on items of list, we will get following error:

TypeError: this.props.onClick is not a function


## solution: 6


We need to pass onClick funtion as a props from parent component to child component.

I have defined handleClick function and assigning that function to onClick and passing as props to child Component.   


```
    handleClick = (index) => alert(`You have clicked on ${index} items of the list` )
    
```
## problem: 7

 user is not able to know that item is clickable.

 ## solution: 7

 Added cursor pointer in the inline style, so when cursor will hover on the item then it will change in pointer form.

 ```
  <ul style={{ backgroundColor: 'red', cursor: "pointer"}}></ul>
 ```

## Note: Functional component solution is also added