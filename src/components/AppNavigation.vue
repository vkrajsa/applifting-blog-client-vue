<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid" role="navigation">
      <router-link to="/articles" class="nav-link">Recent Articles</router-link>
      <router-link to="/my-articles" class="nav-link">My Articles</router-link>
      <router-link to="/add-article" class="nav-link">Create Article</router-link>
      <router-link to="/login" class="nav-link ms-auto">Login</router-link>
      <button class="btn btn-primary">Log-out</button>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
