<template>
  <div class="container mt-2" v-if="$route.params.fullData">
    <div class="columns">
      <div class="column is-2"></div>
      <div class="column is-8">

        <div class="box titlebox">
          <article class="media media-mobile">
            <div class="media-left self-align-center">
              <center>
                <figure class="image is-128x128">
                  <img src="https://thumbs.gfycat.com/VictoriousSoggyGlassfrog-max-1mb.gif" alt="Image">
                </figure>
              </center>
            </div>
            <div class="media-content self-align-center">
              <div class="content">
                <h1 class="title is-4 has-text-centered mb-0 media-name">{{ $route.params.fullData.petname }} needs a home!</h1>
                <h1 class="title is-6 has-text-centered mt-1 media-by">Submitted By {{ $route.params.fullData.ownername }}</h1>
              </div>
            </div>
          </article>
        </div>

        <section>
          <center>
          <img class="petimage" :src="$route.params.fullData.photo">
        </center>
          <div class="details">

            <h1 class="title is-4 mt-2">About {{ $route.params.fullData.petname }}</h1>
            <p class="details-fuldes">
              {{ $route.params.fullData.des }}
            </p>

            <h1 class="title is-4 mt-2 mb-0">Owned by:</h1>
            <h1 class="titie is-6">{{ $route.params.fullData.ownername }}</h1>

            <h1 class="title is-4 mt-2 mb-0">Breed</h1>
            <p>{{ $route.params.fullData.breed }}</p>

            <h1 class="title is-4 mt-2 mb-0">Gender</h1>
            <p>{{ $route.params.fullData.gender }}</p>

            <h1 class="title is-4 mt-2 mb-0">Age</h1>
            <p>{{ $route.params.fullData.age }}</p>

            <h1 class="title is-4 mt-2 mb-0">Vaccined?</h1>
            <p>{{ $route.params.fullData.vaccined }}</p>

            <h1 class="title is-4 mt-2">Special Notes</h1>
            <p class="details-fuldes">
              {{ $route.params.fullData.remarks }}
            </p>

            <h1 class="title is-4 mt-2">How can you adopt?</h1>
            <p class="details-fuldes">
              Please contact the owner with following details.
            </p>
            <div class="oploc mt-1">
                    <i class="fas fa-phone-alt mt-0 inline oploc"></i>
                    <h1 class="title is-6 inline ml-1 oploc">+{{ $route.params.fullData.phone }}</h1>
            </div>
            <div class="oploc mt-1">
                    <i class="fas fa-envelope mt-0 inline oploc"></i>
                    <h1 class="title is-6 inline ml-1 oploc">{{ $route.params.fullData.email }}</h1>
            </div>

          </div>
        </section>
      </div>
      <div class="column is-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsPage',
}
</script>

<style>
@import url('../assets/css/style.css');
</style>