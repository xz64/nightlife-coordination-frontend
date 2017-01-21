<template>
  <div>
    <label class="label">Location</label>
    <p class="control">
      <input class="input" type="text" placeholder="Enter at least 3 characters" @input="search">
      {{ searchText }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchText: '',
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
        }, 1000);
      },
    },
  };
</script>
