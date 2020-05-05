<template>
  <div class="root">
    <div class="container has-text-centered">
      <h1 class="title is-1 mb-0">Adopt a Pet!</h1>
      <div id="notification-class" class="notification mt-1 ml-2 mr-2" v-bind:class="{'is-success': notifySuccess, 'is-danger': !notifySuccess}" v-if="notify">
        <button class="delete" @click="hideNotification()"></button>
        <p v-if="notifySuccess">Your event submitted successfully!</p>
        <p v-if="!notifySuccess">Something went wrong!</p>
      </div>
      <div class="columns mt-2">
        <div class="column is-6">
          <img src="../assets/logo-trans.png" style="height: 100px">
          <h1 class="title is-6 mb-0 text-primary mt-1">Take me home!</h1><br>
          <h1 class="title is-4 mb-1 mt-0">Giving your pet for adoption</h1>

          <div class="content conditions">
            <h1 class="title is-5 mb-1 mt-2">Why you should adopt a pet?</h1>
            <p>
              <ul>
                <li>If you're trying to save a life.</li>
                <li>And you're going to get a great animal.</li>
                <li>And it's going to cost you less.</li>
                <li>Because of the bragging rights.</li>
                <li>Since all pets are good for your health, but adopts give an extra boost.</li>
                <li>Since it allows more than only one animal to adopt.</li>
                <li>If you're going to change the entire life of a homeless animal.</li>
              </ul>
            </p>

            <h1 class="title is-5 mb-1 mt-2">Love your pets even more...</h1>
            <ul>
              <li>Pets are going to bring out the best of you.</li>
              <li>They help you to grow your emotional intelligence.</li>
              <li>Now you're going to have more friends.</li>
              <li>They are improving your confidence.</li>
              <li>They're making you calmer.</li>
              <li>They're bringing order to your life.</li>
              <li>And help you develop a stronger, healthier relationship.</li>
            </ul>
          </div>
          <h1 class="title is-4 mb-1 mt-0">OOOO <strong>Woof!</strong></h1>
          <img src="https://us.v-cdn.net/6030983/uploads/editor/vd/6ecsgpebmivm.gif">
        </div>
        <div class="column is-6 has-text-left">
          <ValidationObserver  v-slot="{ handleSubmit, reset }">
            <form @submit.prevent="handleSubmit(submitData)" @reset.prevent="reset">
              <div class="field">
                <label class="label">Owner's Name</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Owner's Name"
                      v-model="formData.name"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
                <div class="field">
                <label class="label">Owner's Email</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Owner's Email"
                      v-model="formData.orgname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Pet's Name</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Pet's Name"
                      v-model="formData.orgname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
                <div class="field">
                <label class="label">Pet's Sex</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Pet's Sex"
                      v-model="formData.orgname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
                <div class="field">
                <label class="label">Pet's Age</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Pet's Age"
                      v-model="formData.orgname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
               <div class="field">
                <label class="label">Pet's Breed</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Pet's Breed"
                      v-model="formData.orgname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
                <div class="field">
                <label class="label">Pet's Size</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Pet's Size"
                      v-model="formData.orgname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
                <div class="field">
                <label class="label">Pet's Color</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Pet's Color"
                      v-model="formData.orgname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label mb-0">Owner's Contact Number</label>
                <span class="mt-0 error-block text-black">With the country code (Eg: 9477711188) </span>
                <div class="control">
                  <ValidationProvider
                    rules="required|numeric"
                    v-slot="{ errors }"
                  >
                    <input
                      class="input"
                      type="text"
                      placeholder="With the country code (Eg: 9477711188)"
                      v-model="formData.contactno"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Start Date</label>
                <div class="control">
                  <ValidationProvider :rules="{ regex: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/ }" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Start Date (DD-MM-YYY)"
                      v-model="formData.startdate"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Location</label>
                <div class="control">
                  <div class="select" required>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <select v-model="formData.location">
                        <option value="">Select a district</option>
                        <option value="Country Wide">Country Wide</option>
                        <option value="Ampara">Ampara</option>
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
              </div>
              <div class="field">
                <label class="label">Short Description</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <textarea
                      class="textarea"
                      placeholder="A brief description about the pet"
                      v-model="formData.shortdes"
                      required
                    ></textarea>
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="field">
                <label class="label">Detailed Description</label>
                <div class="control">
                  <ValidationProvider rules="required|min:250" v-slot="{ errors }">
                    <textarea
                      class="textarea"
                      placeholder="The detailed full description about the pet"
                      v-model="formData.fulldes"
                      required
                    ></textarea>
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>  
              <div class="field">
                <label class="label mb-0">Tags</label>
                <span class="mt-0 error-block text-black">Max 3 tags. Hit enter to confirm a tag</span>
                <vue-tags-input
                  v-model="tag"
                  :tags="tags"
                  @tags-changed="newTags => tags = newTags"
                  :autocomplete-items="filteredItems"
                />
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <input
                        type="checkbox"
                        v-model="terms"
                        value="terms"
                        required
                      />
                      I hereby agree to the <a href="#">terms and conditions</a>
                      <span class="error-block">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </label>
                </div>
              </div>
              <div class="field is-grouped mb-3">
                <div class="control">
                  <button class="button is-link" type="submit">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-link is-light" type="reset">Cancel</button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';
/* eslint-disable no-unused-vars */
import { listingsRef } from '../firebase'
import axios from 'axios'
/* eslint-disable no-unused-vars */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { extend } from 'vee-validate'

import { required, email, numeric, min, regex } from 'vee-validate/dist/rules'
extend('email', {
  ...email,
  message: 'Please enter a valid email address!'
})
extend('required', {
  ...required,
  message: 'This field is required!'
})
extend('numeric', {
  ...numeric,
  message: 'Must be a number!'
})
extend('min',{
  ...min,
  message: "Minimun 250 characters required!"
})
extend('regex',{
  ...regex,
  message: "Please enter a valid type!"
})

export default {
  name: 'SearchPage',
  components: {
    ValidationProvider,
    ValidationObserver,
    VueTagsInput,
  },
  data () {
    return {
      tag: '',
      tags: [],
      terms: '',
      notify: false,
      notifySuccess: false,
      autocompleteItems: [{
        text: 'SriLanka',
      }, {
        text: 'Volunteering',
      }, {
        text: 'Github',
      }, {
        text: 'Agriculture',
      }, {
        text: 'Animals',
      }],
      formData: {
        name: '',
        location: '',
        shortdes: '',
        fulldes: '',
        orgname: '',
        startdate: '',
        selection: '',
        role: '',
        email: '',
        contactno: '',
        imgurl: '',
        ctags: {
          t1: '',
          t2: '',
          t3: ''
        }
      }
    }
  },
  methods: {
    submitData: function () {
      if (!this.formData.imgurl) {
        this.formData.imgurl =
          'https://wizardly-visvesvaraya-500b32.netlify.app/favicon.png'
      }
      try{
        this.formData.ctags.t1 = this.tags[0].text
      }catch{
        this.formData.ctags.t1 = ''
      }
      try{
        this.formData.ctags.t2 = this.tags[1].text
      }catch{
        this.formData.ctags.t2 = ''
      }
      try{
        this.formData.ctags.t3 = this.tags[2].text
      }catch{
        this.formData.ctags.t3 = ''
      }

      //Push into Firebase
      listingsRef.push(this.formData, function (error) {
        if (error) {
          alert('Something went wrong!')
        }else{
          console.log("Firebase Successful")
        }
      })

      //Send Whatsapp Message
      axios.post("https://us-central1-volunteer-me-9b8b3.cloudfunctions.net/sendWhatsapp", {
          to: "+"+this.formData.contactno,
          message: "Your listing "+this.formData.name+" has been added successfully!\nThank you for using VolunteerME!"
      }).then(callback => {
          console.log("Successfully sent whatsapp message")
          this.notify = true
          this.notifySuccess = true
          this.formData = {name: '',location: '',shortdes: '',fulldes: '',orgname: '',startdate: '',selection: '',role: '',email: '',contactno: '',imgurl: '',ctags: {t1: '',t2: '',t3: ''}}
          window.scrollTo(0,0);
      }).catch(error =>{
          console.log(error)
          this.notify = true
          this.notifySuccess = false
      })
    },
    hideNotification: function (){
      this.notify = false
    }
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1
      })
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/style.css');
</style>
