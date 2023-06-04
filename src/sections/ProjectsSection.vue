<script setup>

import ProjectItem from "@/components/ProjectItem.vue";
</script>

<template>
  <section class="projects">
    <h2>Projects</h2>
    <project-item title="Formal language calculator"
                  description="A formal languages calculator using Java Swing that can perform union, intersection, difference, symmetric difference, product, power, complement, Kleene closure, and positive closure operations and designed and implemented the user interface using Java Swing to provide a user  experience similar to a terminal.">
      <img
          src="@/assets/img/project_fallback.png"
          alt="Formal language calculator"
          class="project__img">
    </project-item>
    <project-item title="EnvQ"
                  description="Led a team of 10 people to develop an app to display air quality index in my city using Flutter. The project involved task planning, testing, documentation, and development, all managed through GitHub projects, issues, and pull requests.">
      <img
          src="@/assets/img/project_fallback.png"
          alt="Environmental quality app"
          class="project__img">
    </project-item>
    <project-item title="Professor evaluation system"
                  description="Designed and developed the backend architecture using PHP, implemented API integration in the frontend (Angular), allowing for seamless communication between the server and client-side and collaborated with a team of 3 developers and a professor in charge of the teacher evaluation to ensure project success">
      <img
          src="@/assets/img/project_fallback.png"
          alt="Professor evaluation system"
          class="project__img">
    </project-item>
  </section>
</template>

<style scoped>
.projects {
  color-scheme: only dark;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>