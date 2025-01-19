import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null)

let createAccount = async (email, password,displayName) => {
    try {
        let res = await auth.createUserWithEmailAndPassword(
            email,
            password,
        );        
        if (!res) {
            throw new Error("Could not create new user");
        }
        await res.user.updateProfile({displayName})
        console.log(res.user)
        return res

    } catch (err) {
        error.value = err.message;
    }

       
}
let useSignup = (() => {
    return { error, createAccount }
})
export default useSignup;