<a  href="">
<center>
<img src="https://furgetmenot.netlify.app/img/logo-trans.e1698e73.png">
</center>
</a>
 
# Furgetmenot: Adopt, Rescue, Love until the end of time!

[![Vue version](https://img.shields.io/badge/Vue-v2-brightgreen)]()
[![Vue version](https://img.shields.io/badge/Licence-MIT-orange)]()
[![Netlify Status](https://api.netlify.com/api/v1/badges/53a46d7e-6fd6-41a9-89b9-ffef8a157371/deploy-status)](https://app.netlify.com/sites/furgetmenot/deploys)

## About

Do you value your pet like a family member? You do, of course. That is why you are here! And we are delighted that you've chosen us! <br><br>
You can meet your next best friend and save a pet through animal adoption.
Last year over 6,000,000 dogs & cats were killed on US roads. Countless variety of animals have got injured on the road worldwide, and are struggling to survive every single day. So this is the major reason we are here for them. We are a community of animal lovers and pet advocates.
We aim to provide everybody with exposure at reasonable rates to good quality, natural remedies.<br><br>
Sharing your life with a pet may be a rewarding activity, but it also requires taking control of your capabilities for life.
The ownership of a pet has so many benefits. If you have this partner everywhere you are, your social life would boost, keep you healthy, involved and without tension.
When you love a companion you feel better.
Taking care of a pet can provide a sense of purpose and fulfillment, and even lessen the loneliness of all age groups.
With an active dog, you can go out for a walk, or even go to a dog park to get to know people. Research suggests that the development of the stress hormone can be decreased by petting a dog. Your pet will always be there for you, so you would never be afraid.
Along with psychological, mental and physical rewards, animals deliver unconditional affection.<br><br>
We see you as part of our extended family as you are a member of <strong>FurgetMeNot</strong>.



# Set up


### Requirements

- [Vue.js](https://vuejs.org/v2/guide/installation.html)
- A Firebase account - [sign up](https://console.firebase.google.com/)


### Local development

After the above requirements have been met: 
<br><br>

<b>1. Clone this repository and `cd` into it</b>

```bash
git clone https://github.com/Suvink/volunteer-me.git
cd furgetmenot
```
<br>

<b>2. Install dependencies</b>

```bash
npm install
```
<br>

<b>3. Setup Firebase Project</b>

Goto your <a href="">Firebase Console </a>and create a new project in Firebase Console. Then register a new web app.
Copy the **config data** from the config file which will look like this.
```
apiKey: "firebase-api-key",
authDomain: "firebase-auth-domain",
databaseURL: "firebase-db-url",
projectId: "firebase-project-id",
storageBucket: "firebase-storage-bucket",
messagingSenderId: "firebase-messaging-id",
appId: "firebase-app-id"
```
<br>

<b>4. Setup Firebase Configuration</b>

Rename the `sample.env.txt` file into `.env` and add your previously copied Firebase configuration details there. (Replace the `######` marks with relevant details.)
<br>
<br>

<b>5. Setup Firebase Realtime Database</b>

Goto `Database` section in your Firebase Console and create a **Realtime Database**. Import `database.json` file in the `src` folder into Firebase Database. It will create dummy data for you to test.
<br>
<br>

<b>7. Run the project </b>

```bash
npm run serve
```
<br>



## Contributing

This project is open source and welcomes contributions. 

<b>Bug Reports</b><br>

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; make sure that the code in the repository is
_definitely_ responsible for the issue.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report.

<b>Feature requests</b><br>

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the Roots developers of the merits of this feature. Please
provide as much detail and context as possible.

<b>Feature requests</b><br>

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code), otherwise you risk spending a lot of
time working on something that the developers might not want to merge into the
project.

Please adhere to the coding conventions used throughout the project (indentation,
comments, etc.).

If you want to work on an existing issue, please leave a comment so we can assign the task to you.


## Contributors

<table>
    <tr>
        <td align="center"><a href="https://github.com/Suvink"><img src="https://avatars0.githubusercontent.com/u/10671497?s=460&u=2688fb382fbc91bc1874b4e233e6e58191d017c9&v=4"
                    width="80px;" alt="Suvin Nimnaka" /><br /><sub><b>Suvin Nimnaka</b></sub></a><br />
        </td>
        <td align="center"><a href="https://github.com/Sewvandiii"><img
                    src="https://avatars0.githubusercontent.com/u/61576355?s=460&u=09001c20e83270ee3afd81a692f4b865f61441eb&v=4" width="80px;"
                    alt="Sewvandi Promodya" /><br /><sub><b>Sewvandi Promodya</b></sub></a>
        </td>
        <td align="center"><a href="https://twitter.com/Muthuuuuuuu"><img
                    src="https://pbs.twimg.com/profile_images/1244731690192257025/SlZR1VTp_400x400.jpg" width="80px;"
                    alt="Manakal Muthukumara" /><br /><sub><b>Manakal Muthukumara</b></sub></a><br />
        </td>
</table>

<br>

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.
