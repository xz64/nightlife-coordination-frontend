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
          <location-input
            :is-loading="isLoading"
            @locationEntered="onInput($event)"
          >
          </location-input>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <ul>
            <location-listing
              v-for="location in locations"
              :key="location.id"
              :name="location.name"
              :amGoing="location.amGoing"
              :numGoing="1"
              :description="location.description"
            ></location-listing>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Header from './Header.vue';
  import LocationInput from './LocationInput.vue';
  import LocationListing from './LocationListing.vue';
  import LocationService from './LocationService';

  export default {
    data() {
      return {
        isLoading: false,
        locations: [],
      };
    },
    methods: {
      onInput(location) {
        this.isLoading = true;
        LocationService.getLocations(location)
          .then((response) => {
            this.locations = response.data;
            this.isLoading = false;
          })
          .catch(() => {
            this.isLoading = false;
          });
      },
    },
    components: {
      'app-header': Header,
      'location-input': LocationInput,
      'location-listing': LocationListing,
    },
  };
</script>
