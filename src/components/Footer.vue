<template>
  <v-footer
    dark
    height="auto"
    inset
    app
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Simple Dapp, that uses truffle, metamask, deployed on ropsten test net, with the front end on surge.sh, this is mostly a learning project for me, and the source code is available at <a href="https://github.com/FriendlyUser/Vue-Dapp" style="color: #FFFFFF">Vue-Dapp</a>. In addition, I got into blockchain devleopment for my third co-op term at the university of victoria.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>David Li</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  import 'font-awesome/css/font-awesome.css'
  export default {
    data: () => ({
      icons: [
        'fa-facebook',
        'fa-twitter',
        'fa-google-plus',
        'fa-linkedin',
        'fa-instagram'
      ]
    })
  }
</script>