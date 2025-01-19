<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="signup">
    <input
      type="text"
      placeholder="display name"
      v-model="displayName"
      required
    />
    <input type="email" placeholder="email" v-model="email" required />
    <input type="password" placeholder="password" v-model="password" required />
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { createApp, ref } from "vue";
import useSignup from "@/composables/useSignup.js";


export default {
  setup(props,context) {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createAccount } = useSignup();
    let signup = async () => {
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (res) {
        console.log(res.user);
        context.emit("enterChatRoom");
      } 
    };
    return { displayName, email, password, signup, error };
  },
};
</script>
<style>
</style>