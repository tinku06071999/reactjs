## props

- basically makes code reusable
- or make componenet
- bsically if we have a card componenet and we know this componenet is used multiple pages in different-2 form. then why not we create seprate componnet for it or function in that we ass values accordingly and get card componenet
- here comes the scene of component folder
- now we create a card compenent now we can import this in app.jsx and we can use it as many time as we want.as given below

```jascript
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card />
    <Card />
    </>
  )
}
```

but in above example we use the same card and the inner content is same but we want different -2 content in both (if there are multiple card compenent like in e-commerce app) then
there comes the concept of props.

## passing values in components

### 2 methods

- using props in componenets function

```
function card(props){
    <h1>props.property</h1>
}
```

- passing objects or directly

```
function card({username}){
    <h1>username</>
}
```

## passing objects from app.jsx

- we cant pass object direclty but we can create a seprate object and then pass them.
  for example we cant pass the myArr and myObject in the given below way

```
<Card channel="tinkuverms" myArr[1,2,3]/>

or
<Card channel="tinkuverms" myObject{name:"tinku"}/>

```

- we can pass multiple objects
- we can pass string as a object

```
<Card channel="tinkuverms"/>
```

- all these thing should be pass with a variable name that is used in componenet function

- passing objects

```
function App() {
  let myObj ={
    username:"tinku",
    age:22
  }


  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card channel="tinkuverms" someObj = {myObj} />
    </>
  )
```

- passing array

```
function App() {
  let myArr =[1,2,3];


  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card channel="tinkuverms" someArr = {myArr} />
    </>
  )
```

- below is example how we can use oue passed obj in card or component

```
<h1 className="text-lg font-semibold text-white">{props.someObj.username}</h1>
```

## now lets an another syntax of props

- using destructuring

```
function card({someobj, somearr}){
    <h1>props.property</h1>
}
```

## default values of props in case if forgot to pass the props

```
function card ({username , btnText = "default text"})
```
