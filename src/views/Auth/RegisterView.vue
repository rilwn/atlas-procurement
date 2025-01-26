<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="h-10 mr-2" src="@/assets/logo/logo.svg" alt="logo" />
      </div>
      <form @submit.prevent="handleSubmit" aria-labelledby="signin-title">
        <div
          class="flex flex-col justify-center p-8 max-w-full bg-white rounded-2xl w-[380px] max-md:px-5"
        >
          <div class="flex flex-col w-full">
            <div class="flex flex-col w-full">
              <div
                class="text-xs font-semibold leading-none uppercase text-slate-500"
              >
                Procurement
              </div>
              <h1
                id="signin-title"
                class="mt-1 text-2xl font-medium leading-none text-blue-950"
              >
                Create an account
              </h1>
            </div>
            <div class="flex flex-col mt-6 w-full">
              <div class="flex items-start w-full whitespace-nowrap">
                <div
                  class="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]"
                >
                  <label
                    for="phone"
                    class="pb-1 w-full text-xs font-medium leading-none text-slate-600"
                  >
                    Phone
                  </label>
                  <div
                    class="flex gap-1.5 items-center p-2 w-full text-sm leading-none bg-white rounded-lg border-2 border-blue-500 border-solid text-blue-950"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_10_1659)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 6H20V18H4V6Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.665 6H20V18H14.665V6ZM4 6H9.3325V18H4V6Z"
                          fill="#008753"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10_1659">
                          <rect
                            width="16"
                            height="12"
                            fill="white"
                            transform="translate(4 6)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div
                      class="flex flex-1 shrink items-center self-stretch my-auto basis-0 min-h-[20px] min-w-[240px]"
                    >
                      <input
                        type="tel"
                        id="phone"
                        v-model="phone"
                        class="w-full bg-transparent border-none focus:outline-none"
                        placeholder="+234"
                        aria-label="Phone number"
                        autofocus
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 w-full whitespace-nowrap">
                <label
                  for="name"
                  class="pb-1 w-full text-xs font-medium leading-none text-slate-600"
                  >Name</label
                >
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    required="Ryan Dalh"
                    class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="flex items-start mt-4 w-full whitespace-nowrap">
                <div
                  class="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]"
                >
                  <label
                    for="password"
                    class="pb-1 w-full text-xs font-medium leading-none text-slate-600"
                  >
                    Password
                  </label>
                  <div
                    class="flex gap-1.5 items-center p-2 w-full text-sm leading-none bg-white rounded-lg border-2 border-solid border-gray-200 border-opacity-10 text-slate-500"
                  >
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      id="password"
                      v-model="password"
                      class="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none focus:outline-none"
                      aria-label="Password"
                      placeholder="********"
                    />
                    <button
                      type="button"
                      @click="togglePassword"
                      class="focus:outline-none cursor-pointer"
                      aria-label="Toggle password visibility"
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
                          d="M12 18C7.464 18 4.001 13.74 4.001 12C4.001 9.999 7.46 6 12.001 6C16.377 6 19.999 9.973 19.999 12C19.999 13.74 16.537 18 12.001 18H12ZM12.001 4C6.48 4 2 8.841 2 12C2 15.086 6.576 20 12 20C17.423 20 22 15.086 22 12C22 8.841 17.52 4 12 4"
                          fill="#091E42"
                          fill-opacity="0.31"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.977 13.984C10.874 13.984 9.977 13.087 9.977 11.984C9.977 10.881 10.874 9.984 11.977 9.984C13.081 9.984 13.977 10.881 13.977 11.984C13.977 13.087 13.081 13.984 11.977 13.984ZM11.977 7.984C9.771 7.984 7.977 9.778 7.977 11.984C7.977 14.19 9.771 15.984 11.977 15.984C14.184 15.984 15.977 14.19 15.977 11.984C15.977 9.778 14.184 7.984 11.977 7.984Z"
                          fill="#091E42"
                          fill-opacity="0.31"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex gap-1 self-start mt-4">
                <div class="flex overflow-hidden items-start w-8 h-full">
                  <label class="flex flex-col justify-center px-1 py-2 w-8">
                    <input
                      type="checkbox"
                      v-model="keepSignedIn"
                      id="keepSignedIn"
                      class="w-full h-[18px] bg-white rounded border-solid border-[3px] border-sky-950 border-opacity-10"
                    />
                  </label>
                </div>
                <label
                  class="my-auto text-xs font-medium leading-none text-slate-600 cursor-pointer"
                  for="keepSignedIn"
                >
                  Agree to the terms & conditions
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="flex justify-center items-center px-20 mt-6 w-full text-xs font-medium leading-none text-center text-white whitespace-nowrap bg-blue-600 rounded-md min-h-[32px] max-md:px-5"
            >
              Register
            </button>
            <div
              class="flex flex-col justify-center py-px mt-6 w-full rounded min-h-[2px]"
            >
              <div
                class="flex flex-1 w-full rounded-sm bg-gray-300 bg-opacity-10 min-h-[1px]"
              ></div>
            </div>
            <button
              type="button"
              @click="Login"
              class="flex justify-center items-center px-3 mt-6 w-full text-sm font-medium leading-none text-center rounded-lg min-h-[32px] text-slate-600 cursor-pointer hover:text-blue-600"
            >
              Already have an account?
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Refs for form inputs and state
const name = ref('');
const phone = ref('');
const password = ref('');
const keepSignedIn = ref(false);
const showPassword = ref(false);

// Router instance
const router = useRouter();

// Form submission logic
const handleSubmit = () => {
  // Add your form submission logic here
  console.log('Name:', name.value);
  console.log('Phone:', phone.value);
  console.log('Password:', password.value);
  console.log('Keep Signed In:', keepSignedIn.value);
};

// Toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

// Navigate to Login page
const Login = () => {
  router.push({ name: 'Login' });
};
</script>
