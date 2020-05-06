# App Challenges

##### Need to get a search term from the user

##### Need to use the search term to make a request to an outside API and fetch data

##### Need to take the fetched images and show them on the screen in a list

## Event Handlers

###### onCLick

```javascript
  onInputClick() {
    console.log('Cars was clicked');
  }

```

###### onChange

```javascript
  onInputChange(event) {
    console.log(event.target.value);
  }
```

###### onSubmit

```javascript
<input
  placeholder="Search..."
  type="text"
  onChange={this.onInputChange}
  onClick={this.onInputClick}
/>
```
