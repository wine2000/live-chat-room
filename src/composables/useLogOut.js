import { auth } from "@/firebase/config";
import { ref } from "vue";
let error = ref("null")
let signOut = (async () => {
    try {
        await auth.signOut();
        console.log("you're successflly logged out.");
    } catch (err) {
        error.value = err.message;
        console.log(error.value);
    }
})
let useLogOut = () => {
    return { error, signOut }
}
export default  useLogOut ;