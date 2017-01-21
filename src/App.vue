<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <app-header></app-header>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third">
          <location-input></location-input>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Header from './Header.vue';
  import LocationInput from './LocationInput.vue';

  export default {
    components: {
      'app-header': Header,
      'location-input': LocationInput,
    },
  };
</script>
