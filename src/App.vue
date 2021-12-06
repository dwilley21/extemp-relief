<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/FAQ">FAQ</router-link> 
      <router-link to="/shop">Shop</router-link> 
      <router-link to="/testimonials">Testimonials</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  justify-content: space-evenly;
  margin: 20px; 
  text-decoration: none; 
}
#nav a:hover{
  color: blue; 
}

#nav a.router-link-exact-active {
  color: blue;
}
</style>
