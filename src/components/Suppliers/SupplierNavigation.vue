<template>
  <div
    class="flex flex-wrap gap-10 justify-between items-center px-6 py-2 w-full max-md:px-5 max-md:max-w-full"
  >
    <button
      class="flex cursor-pointer justify-center items-center self-stretch my-auto text-xs tracking-tight leading-none text-center whitespace-nowrap rounded font-[590] min-h-[24px] text-black hover:text-blue-600"
      aria-label="Go back"
      @click="goBack"
    >
      <div class="flex gap-1 justify-center items-center self-stretch my-auto">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.00494 10.995L13.5979 6.402C13.6895 6.30854 13.7987 6.23417 13.9192 6.18318C14.0397 6.13219 14.1692 6.1056 14.3 6.10494C14.4309 6.10428 14.5605 6.12956 14.6816 6.17933C14.8026 6.2291 14.9125 6.30237 15.0051 6.39489C15.0976 6.48742 15.1708 6.59737 15.2206 6.71838C15.2704 6.8394 15.2957 6.96908 15.295 7.09993C15.2943 7.23078 15.2677 7.3602 15.2168 7.4807C15.1658 7.60121 15.0914 7.71041 14.9979 7.802L11.0979 11.702L14.9979 15.602C15.1805 15.7883 15.2822 16.0391 15.2809 16.2999C15.2795 16.5608 15.1753 16.8105 14.9909 16.995C14.8065 17.1794 14.5567 17.2836 14.2959 17.2849C14.035 17.2862 13.7842 17.1846 13.5979 17.002L9.00494 12.41C8.81747 12.2225 8.71216 11.9682 8.71216 11.703C8.71216 11.4378 8.81747 11.1835 9.00494 10.996V10.995Z"
            fill="#44546F"
          />
        </svg>
        <span class="self-stretch my-auto">Back</span>
      </div>
    </button>
    <div
      class="self-stretch my-auto text-xs font-semibold leading-none uppercase text-blue-950"
    >
      Supplier's Dashboard
    </div>
    <div class="flex gap-2 items-start self-stretch my-auto">
      <button
        class="flex cursor-pointer items-center px-2 text-xs font-medium leading-none text-center text-white whitespace-nowrap bg-blue-600 rounded-md border-2 border-solid border-gray-300 border-opacity-10 min-h-[32px]"
        aria-label="Edit"
      >
        <div
          class="flex gap-1 justify-center items-center self-stretch my-auto"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.01977 19.23C3.98666 19.392 3.99423 19.5597 4.04181 19.718C4.08939 19.8764 4.17549 20.0205 4.29241 20.1374C4.40932 20.2543 4.5534 20.3404 4.71175 20.388C4.8701 20.4355 5.03777 20.4431 5.19977 20.41L9.00977 19.63L4.79977 15.42L4.01977 19.23ZM19.8438 6.707L17.7238 4.585C17.5379 4.39908 17.3171 4.2517 17.0741 4.15131C16.8311 4.05092 16.5707 3.9995 16.3078 4C15.7958 4 15.2838 4.195 14.8928 4.585L5.13577 14.343L10.0858 19.293L19.8428 9.535C20.2177 9.15995 20.4283 8.65133 20.4283 8.121C20.4283 7.59068 20.2177 7.08206 19.8428 6.707H19.8438Z"
              fill="white"
            />
          </svg>
          <span class="self-stretch my-auto">Edit</span>
        </div>
      </button>
      <button
        class="flex cursor-pointer justify-center items-center px-1 w-8 h-8 rounded bg-gray-100 bg-opacity-10 min-h-[32px] hover:bg-gray-300"
        aria-label="Additional options"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
            fill="#44546F"
          />
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            fill="#44546F"
          />
          <path
            d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
            fill="#44546F"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.push({ name: 'Dashboard' });
};
</script>
