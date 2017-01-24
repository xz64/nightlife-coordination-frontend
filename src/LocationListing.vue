<template>
  <li class="nc-listing">
    <article class="media">
      <!-- image -->
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="http:///placehold.it/64x64">
        </p>
      </figure>
      
      <!-- location info -->
      <div class="media-content">
        <strong>{{ name }}</strong>
        <p>{{ description }}</p>
        <nav class="level">
          <div class="level-left">
            <div class="level-item">{{ numGoing }} Going</div>
            <div class="level-item">
              <a @click.prevent="handleGoAction">{{ amGoing ? 'I\'m not going' : 'I\'m going' }}</a>
            </div>
          </div>
        </nav>
      </div>
    </article>
  </li>
</template>

<script>
  export default {
    props: {
      id: String,
      name: String,
      description: String,
      amGoing: Boolean,
      numGoing: Number,
    },
    methods: {
      handleGoAction() {
        if (this.amGoing) {
          this.$emit('unregister', this.id);
        } else {
          this.$emit('register', this.id);
        }
      },
    },
  };
</script>
