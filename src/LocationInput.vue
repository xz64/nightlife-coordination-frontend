<template>
  <div>
    <label class="label">Location</label>
    <p class="control" :class="{ 'is-loading': isLoading }">
      <input
        v-model="searchText"
        class="input"
        type="text"
        placeholder="Enter at least 3 characters"
        @input="search"
      >
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      initialValue: String,
      isLoading: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    data() {
      return {
        searchText: this.initialValue,
        timeout: null,
      };
    },
    methods: {
      search(event) {
        if (event.target.value.length < 3) {
          return;
        }
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
        this.timeout = setTimeout(() => {
          this.$emit('locationEntered', event.target.value);
        }, 1000);
      },
    },
  };
</script>
