<script setup>
import NavBar from "@/components/NavBar.vue";
import IntroSection from "@/sections/IntroSection.vue";
import AboutSection from "@/sections/AboutSection.vue";
import ProjectsSection from "@/sections/ProjectsSection.vue";
import SkillsSection from "@/sections/SkillsSection.vue";
import AwardsSection from "@/sections/AwardsSection.vue";
import FooterSection from "@/sections/FooterSection.vue";
</script>

<template>
  <header>
    <nav-bar></nav-bar>
  </header>
  <main>
    <intro-section id="intro"></intro-section>
    <about-section id="about"></about-section>
    <projects-section id="projects"></projects-section>
    <skills-section id="skills"></skills-section>
    <awards-section id="awards"></awards-section>
  </main>
  <footer-section id="footer"></footer-section>
</template>

<style scoped>
</style>
