<template>
  <div
    class="flex flex-wrap gap-10 justify-between items-center px-6 py-4 w-full max-md:px-5 max-md:max-w-full"
  >
    <div
      class="self-stretch my-auto text-xs font-semibold leading-none text-center uppercase text-blue-950"
    >
      Purchase Order
    </div>
    <div
      class="flex flex-wrap gap-2 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full"
    >
      <div
        class="flex justify-center items-center self-stretch px-2 my-auto text-xs font-medium leading-none text-center rounded-md bg-gray-100 bg-opacity-10 min-h-[32px] text-blue-950"
      >
        <select
          id="select"
          class="w-full px-2 py-1 text-xs bg-transparent border-none focus:outline-none focus:ring-0"
        >
          <option value="page1" selected>Page 1/6</option>
          <option value="page2">Page 2/6</option>
          <option value="page3">Page 3/6</option>
          <option value="page4">Page 4/6</option>
          <option value="page5">Page 5/6</option>
          <option value="page6">Page 6/6</option>
        </select>
      </div>
      <div class="relative">
        <label for="searchInput" class="sr-only">Search</label>
        <input
          type="search"
          id="searchInput"
          class="flex relative items-start self-stretch pr-2 pl-10 my-auto text-xs font-medium leading-none whitespace-nowrap bg-white rounded-md border-2 border-solid border-gray-300 border-opacity-10 min-h-[32px] text-slate-500 w-[180px] max-md:pl-5"
          placeholder="Search"
          aria-label="Search orders"
        />
        <img
          loading="lazy"
          src="@/assets/images/search.png"
          alt=""
          class="object-contain absolute bottom-1.5 left-2.5 z-0 shrink-0 self-start w-5 h-5 aspect-square"
        />
      </div>
      <button
        class="flex cursor-pointer items-center self-stretch px-2 my-auto text-xs font-medium leading-none text-center whitespace-nowrap bg-white rounded-md border-2 border-solid border-gray-300 border-opacity-10 min-h-[32px] text-blue-950"
        aria-label="Filter"
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
              d="M6.99999 13H17L18 11H5.99999L6.99999 13ZM3.99299 6C3.44499 6 3.20299 6.405 3.44699 6.895L3.99999 8H20L20.553 6.895C20.8 6.4 20.555 6 20.007 6H3.99299ZM10.778 17.556C10.8509 17.6861 10.9561 17.7953 11.0834 17.8731C11.2107 17.9508 11.3559 17.9945 11.505 18H12.495C12.774 18 13.1 17.8 13.222 17.556L14 16H9.99999L10.778 17.556Z"
              fill="#44546F"
            />
          </svg>
          <span class="self-stretch my-auto">Filter</span>
        </div>
      </button>
      <button
        class="flex cursor-pointer items-center self-stretch px-2 my-auto text-xs font-medium leading-none text-center bg-white rounded-md border-2 border-solid border-gray-300 border-opacity-10 min-h-[32px] text-blue-950"
        aria-label="Sort"
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
              d="M8.25 5V18M8.25 18L5 14.75M8.25 18L11.5 14.75M16.375 18V5M16.375 5L13.125 8.25M16.375 5L19.625 8.25"
              stroke="#44546F"
              stroke-width="1.625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="self-stretch my-auto">Sort by</span>
        </div>
      </button>
      <div class="flex gap-1 items-start self-stretch my-auto">
        <button
          class="flex cursor-pointer justify-center items-center px-1 w-8 h-8 bg-indigo-50 rounded min-h-[32px]"
          aria-label="Grid view"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.00002 18C3.00002 18.552 3.44502 19 3.99302 19H20.007C20.138 18.9999 20.2676 18.9739 20.3885 18.9235C20.5094 18.8731 20.6191 18.7993 20.7114 18.7064C20.8036 18.6135 20.8766 18.5032 20.9262 18.382C20.9757 18.2608 21.0008 18.131 21 18V17H3.00002V18ZM3.00002 11H21V9H3.00002V11ZM3.00002 7H21V6C21 5.448 20.555 5 20.007 5H3.99302C3.86206 5.00013 3.73242 5.02613 3.61155 5.07652C3.49067 5.12691 3.38095 5.20068 3.28867 5.29361C3.1964 5.38653 3.12339 5.49678 3.07386 5.618C3.02432 5.73923 2.99923 5.86905 3.00002 6V7ZM3.00002 15H21V13H3.00002V15Z"
              fill="#0C66E4"
            />
          </svg>
        </button>
        <button
          class="flex cursor-pointer justify-center items-center px-1 w-8 rounded min-h-[32px]"
          aria-label="List view"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3H4C3.44772 3 3 3.44772 3 4V10C3 10.5523 3.44772 11 4 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3Z"
              fill="#44546F"
            />
            <path
              d="M10 13H4C3.44772 13 3 13.4477 3 14V20C3 20.5523 3.44772 21 4 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13Z"
              fill="#44546F"
            />
            <path
              d="M20 3H14C13.4477 3 13 3.44772 13 4V10C13 10.5523 13.4477 11 14 11H20C20.5523 11 21 10.5523 21 10V4C21 3.44772 20.5523 3 20 3Z"
              fill="#44546F"
            />
            <path
              d="M20 13H14C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V14C21 13.4477 20.5523 13 20 13Z"
              fill="#44546F"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SupplierTableControls',
});
</script>
