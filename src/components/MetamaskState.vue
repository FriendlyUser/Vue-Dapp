<template>
  <div class='metamask-info'>
  <v-toolbar-items>
    <v-btn flat v-if="isInjected" id="has-metamask"><i aria-hidden="true" class="fa fa-check"></i> Metamask installed</v-btn>
    <v-btn flat v-else id="no-metamask"><i aria-hidden="true" class="fa fa-times"></i> Metamask not found</v-btn>
    <v-btn flat v-if="isInjected" > Network: {{ network }}</v-btn>
    <v-btn flat v-if="isInjected"> Account: {{ coinbase.substr(0, 6) + '...' }}</v-btn>
    <v-btn flat v-if="isInjected"> {{ ethBalance }} Eth</v-btn>
  </v-toolbar-items>
  </div>
</template>

<script>
import {NETWORKS} from '../util/constants/networks'
import {mapState} from 'vuex'
export default {
  name: 'metamask-state',
  computed: mapState({
    isInjected: state => state.web3.isInjected,
    network: state => NETWORKS[state.web3.networkId],
    coinbase: state => state.web3.coinbase,
    balance: state => state.web3.balance,
    ethBalance: state => {
      if (state.web3.web3Instance !== null) return state.web3.web3Instance().fromWei(state.web3.balance, 'ether')
    }
  })
}
</script>

<style scoped>
.metamask-info {
  text-align:center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}</style>