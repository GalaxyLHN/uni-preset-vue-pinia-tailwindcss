<template>
  <view class="min-h-screen bg-gray-100 flex flex-col items-center pt-20 px-4">
    <view class="w-full max-w-sm bg-white rounded-3xl p-6 shadow-xl shadow-blue-100">
      
      <text class="block text-xl font-bold text-gray-800 mb-2">计数器</text>

      <view class="bg-blue-50 rounded-2xl p-8 flex flex-col items-center">
        <text class="text-xs text-blue-400 font-medium tracking-widest uppercase">当前计数</text>
        <text class="text-6xl font-black text-blue-600 my-2">{{ counter.count }}</text>
      </view>

      <button 
        @click="counter.increment"
        class="mt-6 w-full py-4 bg-blue-600 rounded-2xl text-white font-bold active:scale-95 transition-transform"
      >
        增加数值
      </button>
      
    </view>
  </view>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter';
const counter = useCounterStore();
</script>