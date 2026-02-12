import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    const increment = () => {
        count.value++;
    }

    return { count, increment };
}, {
    persist: {
        storage: {
            getItem: (key) => uni.getStorageSync(key),
            setItem: (key, value) => uni.setStorageSync(key, value),
        },
    },
});
