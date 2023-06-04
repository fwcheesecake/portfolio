<script setup>

</script>

<template>
<section class="skills">
  <h2>Skills</h2>
  <div class="skills__content">
    <div class="skills__content__item">
      <h3>Programming languages</h3>
      <ul>
        <li>Java</li>
        <li>C/C++</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>PHP</li>
      </ul>
    </div>
    <div class="skills__content__item">
      <h3>Frameworks</h3>
      <ul>
        <li>React</li>
        <li>Vue</li>
        <li>Flutter</li>
        <li>Java Swing</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Bootstrap</li>
      </ul>
    </div>
    <div class="skills__content__item">
      <h3>Tools</h3>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>GraphQL</li>
        <li>Postman</li>
        <li>PostgreSQL</li>
        <li>Prisma</li>
      </ul>
    </div>
  </div>
</section>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.skills {
  color-scheme: only dark;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  background-image: radial-gradient(rgba(158, 158, 158, 0.47) 0.5px, transparent 0.5px), radial-gradient(rgba(158, 158, 158, 0.47) 0.5px, transparent 0.5px);
  background-size: 100px 100px;
  background-position: 0 0, 50px 50px;
  background-color: rgba(71, 212, 255, 0);
}
.skills__content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
}
.skills__content__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  font-size: 1.2rem;
  line-height: 1.5rem;
}
.skills__content__item h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
}
.skills__content__item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.skills__content__item ul li {
  margin-bottom: 0.5rem;
}

@media screen and (max-width: 768px) {
  .skills__content {
    flex-direction: column;
    align-items: center;
  }
  .skills__content__item {
    margin-bottom: 2rem;
  }
}
</style>