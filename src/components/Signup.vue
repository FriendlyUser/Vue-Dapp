<template>
  <section id='signup'>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Sign up</div>
          <span class="grey--text">Prerequestites</span>
        </div>
      </v-card-title>

       <v-card-text>
        <ul>
          <li>Metamask --- Turns your normal chrome/firefox browser into an ethereum browser</li>
          <li>Ether --- New metamask accounts come with ether by default, but otherwise go to ropsten test faucet.</li>
        </ul>

      <div class="form">
        <div class="entry">
          <button @click="signup" name="signup">Sign up</button>
          <input name="pseudo" v-model="form.pseudo">
          <label for="pseudo">Pseudo</label>
        </div>
      </div>

      </v-card-text>

      <v-card-actions>
          <v-btn flat color="orange" href="https://metamask.io/" target="_blank">Metamask</v-btn>
          <v-btn flat color="purple" href="https://faucet.metamask.io/" target="_blank">Ropsten Test Faucet</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
      </v-card-actions>
       <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
      </v-slide-y-transition>

    </v-card>
    </v-flex>
    </v-layout>

    <br />
   </section>
</template>

<script>
  import Users from '@/js/users'

  export default {
    name: 'signup',
    data () {
      return {
        form: {
          pseudo: undefined
        },
        show: false
      }
    },
    beforeCreate: function () {
      Users.init()
    },
    methods: {
      signup: function () {
        let self = this
        if (typeof this.form.pseudo !== 'undefined' && this.form.pseudo !== '') {
          Users.create(this.form.pseudo).then(tx => {
            console.log(tx)
            self.$router.push('/')
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  #signup {
    text-align: center;
    
    .form {
      display: flex;
      flex-direction: column;
      margin: auto;
      
      .entry {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        
        label {
          margin-right: 20px
        }
        
        button {
          margin-left: 20px
        }  
        
      }
        
    }
    
  }

</style>
