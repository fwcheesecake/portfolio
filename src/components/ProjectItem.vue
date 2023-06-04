<script setup>
const props = defineProps({
  title: String,
  description: String,
  img: String,
  link: String,
});
</script>

<template>
  <div class="project">
    <slot class="project__img"></slot>
    <div class="project__content">
      <h3 class="project__title">{{props.title}}</h3>
      <p class="project__description">{{props.description}}</p>
    </div>
    <a :href="props.link? props.link : 'https://github.com/fwcheesecake'" class="source">view source</a>
  </div>
</template>

<style scoped>
.project {
  color-scheme: only dark;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
}

.project__img {
  width: 100%;
  max-width: 300px;
  height: 300px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border: 10px solid var(--color-border);
}

.project__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 600px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-right: 2rem;
}

.project__title {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
}

.project__description {
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
}

.source {
  font-size: 0.8rem;
  color: var(--color-text);
  text-decoration: none;
}

.source:hover {
  color: var(--color-heading);
}

@media screen and (max-width: 768px) {
  .project {
    flex-direction: column;
    align-items: center;
  }

  .project__img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    margin-bottom: 2rem;
  }

  .project__content {
    max-width: 100%;
    width: 100%;
    margin-right: 0;
  }

  .source {
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  .source:hover {
    color: var(--color-heading);
  }
}
</style>