<script setup>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

</script>

<template>
  <div class="about">
    <h2>About Me</h2>
    <div class="about__container">
      <p class="about__description">
        I am a computer systems engineering student at the Instituto Tecnológico Superior
        de el Mante. I am passionate about solving any kind of problems and learning new
        things. Throughout my career I have learned about many topics such as: web development,
        databases, operating systems, multiplatform development, and more. I have also participated
        in many programming contests, where I have learned a lot about algorithms and data structures.
      </p>
      <kinesis-container class="about__photo">
        <kinesis-element class="about__photo-img"></kinesis-element>
        <kinesis-element class="about__photo_bg"></kinesis-element>
      </kinesis-container>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.about__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
}

.about__description {
  width: 100%;
  max-width: 600px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-right: 2rem;
}

.about__photo {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.about__photo-img {
  position: absolute;
  width: 95%;
  height: 95%;
  left: 2.5%;
  top: 2.5%;
  background-image: url('../assets/img/me.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
  z-index: 2;
}

.about__photo_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-border);
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
}

@media (max-width: 768px) {
  .about__container {
    flex-direction: column;
  }

  .about__description {
    margin-right: 0;
    margin-bottom: 2rem;
  }
}
</style>