<script setup>

</script>

<template>
  <nav>
    <div class="nav__logo">
      <h1>Antonio Reyna</h1>
    </div>
    <div class="nav__links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#awards">Awards</a>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--color-text);
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .nav__logo {
    font-size: 2rem;
  }

  .nav__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .nav__links > * {
    margin: 1rem;
  }

  a {
    color: var(--color-text);
  }

  a:hover {
    color: var(--color-heading);
  }

  @media screen and (max-width: 768px) {
    nav {
      flex-direction: column;
    }
  }
</style>