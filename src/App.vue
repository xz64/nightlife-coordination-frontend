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
              :id="location.id"
              :name="location.name"
              :amGoing="location.amGoing"
              :numGoing="location.numGoing"
              :description="location.description"
              @register="onRegister($event)"
              @unregister="onUnregister($event)"
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
      onRegister(id) {
        LocationService.register(id)
          .then(() => {
            const location = this.getLocation(id);
            location.numGoing += 1;
            location.amGoing = true;
          }, Function.prototype);
      },
      onUnregister(id) {
        LocationService.unregister(id)
          .then(() => {
            const location = this.getLocation(id);
            location.numGoing -= 1;
            location.amGoing = false;
          }, Function.prototype);
      },
      getLocation(id) {
        for (let i = 0; i < this.locations.length; i += 1) {
          if (this.locations[i].id === id) {
            return this.locations[i];
          }
        }
        return null;
      },
    },
    components: {
      'app-header': Header,
      'location-input': LocationInput,
      'location-listing': LocationListing,
    },
  };
</script>
