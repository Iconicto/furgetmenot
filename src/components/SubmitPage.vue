<template>
  <div class="root">
    <div class="container has-text-centered">
      <h1 class="title is-1 mb-0">Submit an oppotunity</h1>
      <div id="notification-class" class="notification mt-1 ml-2 mr-2" v-bind:class="{'is-success': notifySuccess, 'is-danger': !notifySuccess}" v-if="notify">
        <button class="delete" @click="hideNotification()"></button>
        <p v-if="notifySuccess">Your event submitted successfully!</p>
        <p v-if="!notifySuccess">Something went wrong!</p>
      </div>
      <div class="columns mt-2">
        <div class="column is-6">
          <img src="../assets/logo-trans.png" style="height: 100px">
          <h1 class="title is-6 mb-0 text-primary mt-1">Take me home!</h1>
          <h1 class="title is-4 mb-1 mt-0">Giving your pet for adoption</h1>

          <div class="content conditions">
            <h1 class="title is-5 mb-1 mt-2">What can you submit?</h1>
            <p>
              <ul>
                <li>To submit an oppotunity, you have to be the organizer or a representative of the organization that is hosting the event.</li>
                <li>You can submit almost any oppotunity as long as they don't involve in anything illegal.<br>(Eg: Submitting an oppotunity that is
                    only applicable for a certain race)
                </li>
                <li>If the volunteering tasks involved with a certain risk, please be kind enought to mention them in the description.</li>
              </ul>
            </p>

            <h1 class="title is-5 mb-1 mt-2">Types of submissions</h1>
            <ul>
              <li>Open-Source software projects</li>
              <li>Animal welfare projects</li>
              <li>Environmantal preservation projects</li>
              <li>Social projects</li>
              <li>Projects on helping differently abled</li>
              <li>Community based entertainment projects</li>
              <li>Etc *wink</li>
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
                      v-model="formData.ownername"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="field">
                <label class="label">Owner's Email</label>
                <div class="control">
                  <ValidationProvider
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <input
                      class="input"
                      type="text"
                      placeholder="Owner's Email"
                      v-model="formData.email"
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
                      v-model="formData.phone"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="field">
                <label class="label">Location</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Location"
                      v-model="formData.location"
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
                      placeholder="It never hurts to name a pet isnt it?"
                      v-model="formData.petname"
                      required
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="field">
                <label class="label">Pet's Breed</label>
                <div class="control">
                  <ValidationProvider rules="" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Pet's Breed [Optional]"
                      v-model="formData.breed"
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="field">
                <label class="label">Pet's Age</label>
                <div class="control">
                  <ValidationProvider rules="" v-slot="{ errors }">
                    <input
                      class="input"
                      type="text"
                      placeholder="Pet's age approximately"
                      v-model="formData.age"
                    />
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="field">
                <label class="label">Gender</label>
                <div class="control">
                  <div class="select" required>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <select v-model="formData.gender">
                        <option value="">Select a gender</option>
                        <option value="Male">Male</option>
                        <option value="Femail">Female</option>
                      </select>
                      <h1 class="error-block mb-1">{{ errors[0] }}</h1>
                    </ValidationProvider>
                  </div>
                </div>
              </div>

              <div class="field">
                <label class="label">Vaccine Status</label>
                <div class="control">
                  <div class="select" required>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <select v-model="formData.vaccined">
                        <option value="">Select an option</option>
                        <option value="Male">Vaccined</option>
                        <option value="Femail">Not Vaccined</option>
                      </select>
                      <h1 class="error-block mb-1">{{ errors[0] }}</h1>
                    </ValidationProvider>
                  </div>
                </div>
              </div>

              <div class="mb-1">
                <label class="label">Upload an image of your pet</label>
                <div class="upload-preview" v-if="imguploaded">
                  <img class="upload-img" v-bind:src="imguploadurl">
                </div>
                <div class="file has-name is-boxed mb-1">
                  <label class="file-label full-width">
                    <input class="file-input" type="file" ref="file" accept="image/*" v-on:change="handleFileUpload()">
                    <span class="file-cta full-width">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">
                        Choose an image…
                      </span>
                    </span>
                    <span class="file-name-box full-width">
                      {{ imgname }}
                    </span>
                  </label>
                </div>
                <progress :class="uploadPercentage == 100? 'progress is-success is-small': 'progress is-danger is-small'" :value.prop="uploadPercentage" 
                  max="100" v-if="imguploaded">
                </progress>
              </div>

              <div class="field">
                <label class="label">A short Description about the pet</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <textarea
                      class="textarea"
                      placeholder="A brief description about the project"
                      v-model="formData.des"
                      required
                    ></textarea>
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>

              <div class="field">
                <label class="label">Any special remarks you would like to add</label>
                <div class="control">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <textarea
                      class="textarea"
                      placeholder="Remarks such as allergies, steralized, etc."
                      v-model="formData.remarks"
                      required
                    ></textarea>
                    <span class="error-block">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
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
/* eslint-disable */ 
/* eslint-disable no-unused-vars */
import { listingsRef, storageRef, firebase } from '../firebase'
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
  },
  data () {
    return {
      file: '',
      imgfile: '',
      imguploaded: false,
      imguploadurl: '',
      imgname: 'Waiting for image upload',
      uploadPercentage: 0,
      terms: '',
      notify: false,
      notifySuccess: false,
      formData: {
        petname : '',
        breed : '',
        gender: '',
        age: '',
        des: '',
        vaccined: '',
        remarks: '',
        location: '',
        ownername: '',
        phone: '',
        email: '',
        photo: ''
      }
    }
  },
  methods: {
    handleFileUpload(){

      //Show Preview
        this.file = this.$refs.file.files[0]
        let reader  = new FileReader()

        reader.addEventListener("load", function () {
        this.imguploaded = true;
        this.imguploadurl = reader.result;
        }
        .bind(this), false)

        if( this.file ){
          if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
            reader.readAsDataURL( this.file );
          }
        }
        if(!this.formData.ownername){
          this.filename = Math.random()*431+this.file.name;
        }else{
          this.filename = this.formData.ownername+this.file.name;
        }
        

        //Upload to Firebase Storage and grab a link
        let metadata = {
          contentTyle: "image/jpeg"
        }

        let this_state = this;

        let uploadTask = storageRef.child('pets/' + this.filename).put(this.file, metadata)
        uploadTask.on('state_changed',
          function(snapshot) {

            this_state.uploadPercentage = 2;
            this_state.uploadPercentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + this_state.uploadPercentage + '% done');

            switch (snapshot.state) {
              case 'paused': // or 'paused'
                console.log('Upload is paused');
                break;
              case 'running': // or 'running'
                console.log('Upload is running');
                break;
            }
          }, function(error) {
            
          switch (error.code) {
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              break;
            case 'storage/unknown':
              break;
          }
        }, function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('File available at', downloadURL);
            this_state.formData.photo = downloadURL;
            this_state.imgname = downloadURL;
          });
        });
    },

    submitData: function () {
      if (!this.formData.imgurl) {
        this.formData.imgurl =
          'https://wizardly-visvesvaraya-500b32.netlify.app/favicon.png'
      }
      

      // //Push into Firebase
      // listingsRef.push(this.formData, function (error) {
      //   if (error) {
      //     alert('Something went wrong!')
      //   }else{
      //     console.log("Firebase Successful")
      //   }
      // })

      // //Send Whatsapp Message
      // axios.post("https://us-central1-volunteer-me-9b8b3.cloudfunctions.net/sendWhatsapp", {
      //     to: "+"+this.formData.contactno,
      //     message: "Your listing "+this.formData.name+" has been added successfully!\nThank you for using VolunteerME!"
      // }).then(callback => {
      //     console.log("Successfully sent whatsapp message")
      //     this.notify = true
      //     this.notifySuccess = true
      //     this.formData = {name: '',location: '',shortdes: '',fulldes: '',orgname: '',startdate: '',selection: '',role: '',email: '',contactno: '',imgurl: '',ctags: {t1: '',t2: '',t3: ''}}
      //     window.scrollTo(0,0);
      // }).catch(error =>{
      //     console.log(error)
      //     this.notify = true
      //     this.notifySuccess = false
      // })
    },
    hideNotification: function (){
      this.notify = false
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/style.css');
</style>
