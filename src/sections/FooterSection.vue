<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <footer class="footer">
    <div class="social-icons">
      <a href="https://github.com/fwcheesecake">
        <font-awesome-icon icon="fa-brands fa-github" size="3x"></font-awesome-icon>
      </a>
      <a href="https://www.linkedin.com/in/antoniore102001/">
        <font-awesome-icon icon="fa-brands fa-linkedin" size="3x"></font-awesome-icon>
      </a>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    color-scheme: only dark;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    padding: 2rem;
  }

  .social-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .social-icons > * {
    margin: 1rem;
  }

  a {
    color: var(--color-text);
  }

  a:hover {
    color: var(--color-heading);
  }

  @media screen and (max-width: 768px) {
    .social-icons {
      flex-direction: column;
    }
  }
</style>