# prop drilling

- before understanding the context api lets discuss the problem with props(context api is kind of solution of that problem)
- suppose we have card component in our application and we have homepage then a admin dashborad and on admin dashboard we have three more compo one is left side navbar and a page right side to this navbar in this page we have to more compo top and bottom.
- Note for better understanding see .drawio.svg file in same folder
- in digram we clearly see that we hae to pass username from home to dashboard to mainpage of dashborad and then topcomponent where we are using it. this is also know as prop drilling
- we pass the username to home dashboard main page thgough they dont need it.
- so to solve this problem the idea of context api come
- in context api we create a seprate file for it and we can direclty use that file whenever we requires

```
{
    username:"tinku"
}
```

# differce between redux and context api

- if project is small or not complex and not too much state mgmt work then we have to use context api
- one disadvantage of redux is redux will aplly on all the componenets
- we can customize the context api where to use
- other than above point we have to use redux

# context api
