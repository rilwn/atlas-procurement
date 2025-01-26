<template>
  <header
    class="flex flex-wrap gap-10 justify-between px-3 w-full bg-white border-b border-gray-300 border-opacity-10 min-h-[48px] max-md:max-w-full"
  >
    <div class="flex gap-6 items-center min-w-[240px]">
      <button
        @click="store.toggleMenu"
        class="flex items-center justify-center cursor-pointer w-8 h-8 hover:bg-gray-300 rounded-full transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 9.01C8 8.451 8.443 8 9.01 8H10.99C11.549 8 12 8.443 12 9.01V10.99C12 11.549 11.557 12 10.99 12H9.01C8.451 12 8 11.557 8 10.99V9.01ZM8 15.01C8 14.452 8.443 14 9.01 14H10.99C11.548 14 12 14.443 12 15.01V16.99C12 17.549 11.557 18 10.99 18H9.01C8.451 18 8 17.557 8 16.99V15.01ZM14 9.01C14 8.452 14.443 8 15.01 8H16.99C17.548 8 18 8.443 18 9.01V10.99C18 11.549 17.557 12 16.99 12H15.01C14.451 12 14 11.557 14 10.99V9.01ZM14 15.01C14 14.452 14.443 14 15.01 14H16.99C17.548 14 18 14.443 18 15.01V16.99C18 17.548 17.557 18 16.99 18H15.01C14.452 18 14 17.557 14 16.99V15.01ZM20 9.01C20 8.452 20.443 8 21.01 8H22.99C23.548 8 24 8.443 24 9.01V10.99C24 11.549 23.557 12 22.99 12H21.01C20.451 12 20 11.557 20 10.99V9.01ZM20 15.01C20 14.452 20.443 14 21.01 14H22.99C23.548 14 24 14.443 24 15.01V16.99C24 17.548 23.557 18 22.99 18H21.01C20.452 18 20 17.557 20 16.99V15.01ZM8 21.01C8 20.452 8.443 20 9.01 20H10.99C11.548 20 12 20.443 12 21.01V22.99C12 23.549 11.557 24 10.99 24H9.01C8.451 24 8 23.557 8 22.99V21.01ZM14 21.01C14 20.452 14.443 20 15.01 20H16.99C17.548 20 18 20.443 18 21.01V22.99C18 23.548 17.557 24 16.99 24H15.01C14.452 24 14 23.557 14 22.99V21.01ZM20 21.01C20 20.452 20.443 20 21.01 20H22.99C23.548 20 24 20.443 24 21.01V22.99C24 23.548 23.557 24 22.99 24H21.01C20.452 24 20 23.557 20 22.99V21.01Z"
            fill="#44546F"
          />
        </svg>
      </button>

      <img
        src="@/assets/logo/logo.svg"
        alt="Atlas Logo"
        class="h-8 w-auto object-contain cursor-pointer"
        @click="Home"
      />

      <div class="relative">
        <button
          @click="store.toggleBranchDropdown"
          class="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm text-blue-950 bg-gray-100 bg-opacity-10 rounded hover:bg-opacity-20 transition-colors"
          :aria-expanded="store.isBranchDropdownOpen"
          aria-haspopup="true"
        >
          <span>{{ store.selectedBranch.name }}</span>
          <svg
            class="w-4 h-4 transition-transform"
            :class="{ 'rotate-180': store.isBranchDropdownOpen }"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          v-if="store.isBranchDropdownOpen"
          class="absolute z-50 w-48 mt-2 bg-white rounded-md shadow-lg py-1"
          role="menu"
        >
          <button
            v-for="branch in store.branches"
            :key="branch.id"
            @click="store.selectBranch(branch)"
            class="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {{ branch.name }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex gap-3 items-center my-auto">
      <div class="relative flex gap-2 items-center self-stretch my-auto">
        <button
          class="relative cursor-pointer"
          @click="toggleNotifications"
          aria-label="Notifications"
        >
          <svg
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 611.999 611.999"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <g>
                    <path
                      d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"
                    ></path>
                    <path
                      d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span
            v-if="unreadNotifications"
            class="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center"
          >
            {{ unreadNotifications }}
          </span>
        </button>
      </div>
      <div class="flex gap-2 items-center self-stretch my-auto">
        <button class="relative cursor-pointer">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.998 15.513C8.998 12.475 12.139 10.003 16 10.003C19.861 10.003 23.002 12.475 23.002 15.513C23.002 18.552 19.861 21.023 16 21.023C12.139 21.023 8.998 18.552 8.998 15.513ZM23.838 23.284V23.282C23.838 23.282 22.274 21.022 23.071 20.166L23.034 20.186C24.261 18.902 25 17.279 25 15.513C25 11.371 20.963 8 16 8C11.037 8 7 11.37 7 15.513C7 19.656 11.037 23.027 16 23.027C17.42 23.027 18.76 22.742 19.957 22.251C20.96 23.273 22.244 23.823 23.197 23.97L23.199 23.967C23.2515 23.9867 23.3069 23.9979 23.363 24C23.448 24 23.5317 23.9789 23.6067 23.9386C23.6816 23.8984 23.7453 23.8402 23.7923 23.7693C23.8392 23.6984 23.8679 23.6169 23.8757 23.5323C23.8835 23.4476 23.8712 23.3623 23.838 23.284Z"
              fill="#44546F"
            />
            <path
              d="M20 13H12C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15H20C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13Z"
              fill="#44546F"
            />
            <path
              d="M15 16H12C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16Z"
              fill="#44546F"
            />
          </svg>
        </button>
      </div>
      <button class="relative w-8 h-8 cursor-pointer" aria-label="Profile">
        <img
          src="@/assets/images/profile.png"
          alt=""
          class="w-full h-full rounded-full"
        />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useProcurementStore } from '@/stores/procurementStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const Home = () => {
  router.push({ name: 'Dashboard' });
};

const store = useProcurementStore();

const unreadNotifications = ref(3);

const toggleNotifications = () => {
  unreadNotifications.value = 0;
};
</script>
