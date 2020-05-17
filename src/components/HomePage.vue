<template>
  <div class="root">
    <div class="container has-text-centered">

        <section class="welcome">
          <div class="columns mt-2 welcome-bar">
            <div class="column is-6 animated fadeIn">
              <img src="https://thumbs.gfycat.com/GroundedPresentAstrangiacoral-small.gif">
            </div>
            <div class="column is-6">
              <h1 class="title is-1 mb-0 animated fadeInUp">Pets are human too!</h1><br><br>
              <img src="../assets/logo-trans.png" width="400">
              <h1 class="title is-6 mb-0 text-primary mt-1">Adopt, Rescue, Love until the end of time!</h1>
            </div>
          </div>
        </section>

        <section class="join mt-4">
          <h1 class="title is-4">Want to make the world a better place? Join hands with us!</h1>
          <div class="is-grouped">
            <router-link to="/search">
              <button class="button is-link ml-1 mr-1 find-btn"><i class="fas fa-search home-icon"></i> I want to adopt!</button>
            </router-link>
            <router-link to="/add">
              <button class="button is-warning ml-1 mr-1" type="submit"><i class="fas fa-plus home-icon"></i> I want to give</button>
            </router-link>
          </div>
        </section>

        <section class="about mt-4">
          <div class="columns about">
            <div class="column is-6">
              <img src="https://media.giphy.com/media/1ehSSye8m1bJm/giphy.gif">
              <h1 class="title is-1">About Us</h1>
            </div>
            <div class="column is-6">
              <p class="about-des">
                Do you value your pet like a family member?   You do, of course. That is why you are here! And we are delighted that you've chosen us! <br><br>
                You can meet your next best friend and save a pet through animal adoption. 
                Last year over 6,000,000 dogs & cats were killed on US roads. Countless variety of animals have got injured on the road worldwide, and are struggling to survive every single day. So this is the major reason we are here for them. We are a community of animal lovers and pet advocates. 
                We aim to provide everybody with exposure at reasonable rates to good quality, natural remedies.<br><br>
                Sharing your life with a pet may be a rewarding activity, but it also requires taking control of your capabilities for life.
                The ownership of a pet has so many benefits. If you have this partner everywhere you are, your social life would boost, keep you healthy, involved and without tension. 
                When you love a companion you feel better.
                Taking care of a pet can provide a sense of purpose and fulfillment, and even lessen the loneliness of all age groups.
                With an active dog, you can go out for a walk, or even go to a dog park to get to know people. Research suggests that the development of the stress hormone can  be decreased by petting a dog. Your pet will always be there for you, so you would never be afraid.
                Along with psychological, mental and physical rewards, animals deliver unconditional affection.<br><br>
                We see you as part of our extended family as you are a member of <strong>FurgetMeNot</strong>. 
              </p>
            </div>
          </div>
        </section>

        <section class="mt-4">
          <h1 class="title is-3 mb-1">Save the paws of the world!</h1>
          <h1 class="title is-6 mt-0 mb-2">
            Sometimes the little things take up the most room in your heart. Spay it forward!
          </h1>
          <nav class="level mt-3">
            <div class="level-item has-text-centered">
              <div>
                <img class="level-gh" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style="height: 100px">
                <center>
                  <a href="" target="__blank">
                    <button class="button is-black mt-1"><i class="fab fa-github home-icon"></i> View on Github</button>
                  </a>
                </center>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <img class="level-gh" src="https://image.flaticon.com/icons/svg/1108/1108905.svg" style="height: 100px">
                <center>
                  <a href="mailto:hello@suvink.me">
                    <button class="button is-info level-email mt-1"><i class="fas fa-envelope home-icon"></i> Email Us</button>
                  </a>
                </center>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <img class="level-dev" src="https://res.cloudinary.com/practicaldev/image/fetch/c_scale,fl_progressive,q_auto,w_190/f_auto/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/rainbowdev.svg" style="height: 100px">
                <center>
                  <a href="" target="__blank">
                    <button class="button is-warning mt-1 btn-dev"><i class="fab fa-dev home-icon"></i> View on Dev Community</button>
                  </a>
                </center>
              </div>
            </div>
          </nav>
        </section>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomePage',
}
</script>


<style scoped>
@import url('../assets/css/style.css');
</style>
