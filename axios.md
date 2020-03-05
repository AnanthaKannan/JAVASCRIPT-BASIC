[axios article](https://blog.logrocket.com/axios-or-fetch-api/)

### Why better then Fetch
* Axiox automaticaly convert data into JSON
* Backward compatibility (support old browser)
* can Set response timeout easily
* 

#### POST
```js
const options = {
  url: 'http://localhost/test.htm',
  method: 'POST',
  timeout: 4000, // optional   
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {
    a: 10,
    b: 20
  }
};

axios(options)
  .then(response => {
    console.log(response.status);
  });
```

#### GET
```js
  axios.get('https://api.github.com/users/iliakan'), 
```

#### DELETE
```js
axios.delete(URL, {
  headers: {
    Authorization: authorizationToken
  },
  data: {
    source: source
  }
});
```

#### Simultaneous requests axious
```js
axios.all([
  axios.get('https://api.github.com/users/iliakan'), 
  axios.get('https://api.github.com/users/taylorotwell')
])
.then(axios.spread((obj1, obj2) => {
  // Both requests are now complete
  console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
  console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
}));
```

#### Simultaneous requests fetch
```js
Promise.all([
  fetch('https://api.github.com/users/iliakan'),
  fetch('https://api.github.com/users/taylorotwell')
])
.then(async([res1, res2]) => {
  const a = await res1.json();
  const b = await res2.json();
  console.log(a.login + ' has ' + a.public_repos + ' public repos on GitHub');
  console.log(b.login + ' has ' + b.public_repos + ' public repos on GitHub');
})
.catch(error => {
  console.log(error);
});
```