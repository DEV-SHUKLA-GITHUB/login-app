<template>
    <div class="w-screen h-full flex">
        <div class="h-screen w-2/5 bg-primaryBackground justify-center items-center flex flex-col">
            <img class="w-32 mt-16 h-32" src="../assets/mainlogo.png" alt="logo">
            <div class="flex w-full" >
                <div class=" w-1/5">
                    <img class="mt-64 w-96" src="../assets/pose.png" alt="pose">
                </div>
                <div class="mt-32  pl-4 w-4/5 text-base">
                    <h1 class="text-white font-black text-left">Welcome back!</h1>
                    <p class=" mb-8 text-white pt-1 font-normal text-left ">Sign In to find opportunities that match your interests. We have both part-time and full-time roles that can be done online and in-person.</p>
                    <img  src="../assets/slider.png" alt="slider">
                    <p class="text-left mt-12 text-white">Please contact us at +91-9380644532 if you need any assistance.</p>
                </div>
            </div>
        </div>
        <div class="flex h-screen w-3/5 items-center justify-center flex-col " id="formvalidation">
            <div class="text-left w-96 h-64 ">
                <h1 class=" text-black font-bold">Sign In to WisdomCircle</h1>
                <span>Don't have an accout? Sign Up</span>
                    <input class=" mt-4 border-black-200 border-2" autocomplete="off" 
                        placeholder="arkomaini@gmail.com" type="text">
                    <input class=" mt-4 border-black-200 border-2" autocomplete="off" placeholder="......." type="password">
                    <button class="block bg-yellow-500 w-56 mt-4 h-8" type="submit">Sign In</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
    name: 'loginPage',
};
</script>
i
