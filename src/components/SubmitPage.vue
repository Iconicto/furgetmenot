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
                <label class="label">Address</label>
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
                <label class="label">Country</label>
                <div class="control">
                  <div class="select" required>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                      <select v-model="formData.country">
                        <option value="">Select your country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Åland Islands">Åland Islands</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'ivoire">Cote D'ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">French Southern Territories</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-bissau">Guinea-bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                        <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                        <option value="Korea, Republic of">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                        <option value="Moldova, Republic of">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                        <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                        <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-leste">Timor-leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                        <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                      <span class="error-block">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
              </div>

              <div class="field mt-">
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
                        <option value="Female">Female</option>
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
                        <option value="Dont Know">Don't Know</option>
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
                <progress v-bind:class="{'progress is-success is-small': uploadPercentage == 100, 'progress is-success is-small': !uploadPercentage != 100}" :value.prop="uploadPercentage" 
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
                  <ValidationProvider rules="" v-slot="{ errors }">
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
import { petsRef, storageRef, firebase } from '../firebase'
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
        photo: '',
        country: ''
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

      //Blank Data handling
      if (!this.formData.photo) {
        this.formData.photo =
          'https://furgetmenot.suvink.me/fallback.png'
      }
      if(!this.formData.breed){
        this.formData.breed = "Not Specified."
      }
      if(!this.formData.age){
        this.formData.age = "Not Specified."
      }
      if(!this.formData.remarks){
        this.formData.remarks = "Not Specified."
      }
      
      //Push into Firebase
      let this_state = this;
      petsRef.push(this.formData, function (error) {
        if (error) {
          alert('Something went wrong!')
          this_state.notify = true
          this_state.notifySuccess = false
          
        }else{
          console.log("Firebase Successful")
          this_state.notify = true
          this_state.notifySuccess = true
          this_state.formData = {
            petname : '',breed : '',gender: '',age: '',des: '',vaccined: '',remarks: '',location: '',ownername: '',phone: '',email: '',photo: '',country: ''
          }
          window.scrollTo(0,0);
        }
      })

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
