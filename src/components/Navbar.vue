<template>
  <nav v-if="user">
    <div>
      <p>Hi {{ user.displayName }}</p>
      <p class="email">logged in as {{ user.email }}</p>
    </div>
    <button @click="LogOut">LogOut</button>
  </nav>
</template>
<script>
import useLogOut from "../composables/useLogOut";
import getUser from "../composables/getUser.js";

export default {
  setup() {
    let { user } = getUser();
    let { error, signOut } = useLogOut();
    let LogOut = async () => {
      let res = await signOut();
      if (res) {
        console.log(res);
      }
      console.log(user.displayName)
    };
    return { LogOut, error, user };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>