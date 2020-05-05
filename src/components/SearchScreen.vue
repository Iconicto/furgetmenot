<template>
  <div class="root">
    <div class="container has-text-centered">
      <div class="columns">
        <!-- Filters -->
        <div class="column is-2"></div>

        <!-- Main -->
        <div class="column is-8">
          <div class="search-block mt-2">

            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(search)">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
<<<<<<< HEAD
                      I want to Adopt
=======
                      I'm looking for a pet in
>>>>>>> 7579fc221e54e3c10c3631ce1e6096dc371afa49
                    </a>
                  </p>
                  <div class="control is-expanded">
                    <div class="select is-fullwidth">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <select name="country" v-model="searchData.keyword">
                          <option value="">Search</option>
                          <option value="Ampara">Ampara</option>
                          <option value="Country Wide">Country Wide</option>
                          <option value="Anuradhapura">Anuradhapura</option>
                          <option value="Badulla">Badulla</option>
                          <option value="Batticaloa">Batticaloa</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Galle">Galle</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Hambantota">Hambantota</option>
                          <option value="Jaffna">Jaffna</option>
                          <option value="Kalutara">Kalutara</option>
                          <option value="Kandy">Kandy</option>
                          <option value="Kegalle">Kegalle</option>
                          <option value="Kilinochchi">Kilinochchi</option>
                          <option value="Kurunegala">Kurunegala</option>
                          <option value="Mannar">Mannar</option>
                          <option value="Matale">Matale</option>
                          <option value="Matara">Matara</option>
                          <option value="Monaragala">Monaragala</option>
                          <option value="Mullativu">Mullativu</option>
                          <option value="Nuwara Eliya">Nuwara Eliya</option>
                          <option value="Polonnaruwa">Polonnaruwa</option>
                          <option value="Puttalam">Puttalam</option>
                          <option value="Rathnapura">Rathnapura</option>
                          <option value="Trincomalee">Trincomalee</option>
                          <option value="Vavuniya">Vavuniya</option>
                        </select>
                        <h1 class="error-block mb-1">{{ errors[0] }}</h1>
                    </ValidationProvider>
                    </div>
                  </div>
                  <div class="control">
                    <button type="submit" class="button is-primary">Search</button>
                  </div>
                </div>
              </form>
            </ValidationObserver>

          </div>

          <div class="results mt-2">
            <ResultCard
              v-for="(pet, index) in pets"
              v-bind:key="index"
              :name="pet.petname"
              :location="pet.location"
              :description="pet.des"
              :imgurl="pet.photo"
              :fullData = "pet"
            />
            <center v-if="searchFail">
              <img class="searchfail-img" src="../assets/searchfail.gif">
              <h1 class="title is-3 mb-0">Sorry! We couldn't find any pets in {{ this.searchData.keyword}} :(</h1>
              <h1 class="title is-6 mt-1 searchfail">Try a different area and see!</h1>
            </center>
          </div>
        </div>
        <div class="column is-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { petsRef } from '../firebase'
/* eslint-disable no-unused-vars */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { extend } from 'vee-validate'

import { required } from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: 'Please select a district to search!'
})

export default {
  data () {
    return {
      searchFail: false,
      pets: [],
      searchData: {
        keyword: ""
      }
    }
  },
  name: 'SearchScreen',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  firebase: {
    pets: petsRef
  },
  methods: {
    search () {
      petsRef.orderByChild('location').equalTo(this.searchData.keyword).on('value',  (snapshot)=>{
        if(!snapshot.val()){
          this.searchFail = true
        }else{
          this.searchFail = false
        }
        this.pets= snapshot.val()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('../assets/css/style.css');
</style>
