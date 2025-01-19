<template>
  <textarea
   placeholder="text message and hit enter to send"
   v-model="message"
   @keypress.enter="handleSubmit"
    ></textarea>
</template>

<script>
import { auth } from '@/firebase/config';
import getUser from '@/composables/getUser';
import {timestamp} from "../firebase/config"
import { ref } from 'vue';
import useCollection from "../composables/useCollection"


export default {
setup(){
    let message=ref("");
    let {user}=getUser();
    let {error,addDoc}=useCollection("messages");

    let handleSubmit=async()=>{
         let chat={
            message:message.value,
            name:user.value.displayName,
            created_at:timestamp()
         }
         console.log(chat)
         await addDoc(chat);
         message.value=""
    }
    return{handleSubmit,message};
}
}
</script>

<style>
form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>