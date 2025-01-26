<template>
  <div class="flex flex-col w-full max-md:max-w-full">
    <div
      class="flex flex-wrap gap-8 items-start px-6 py-4 w-full bg-gray-50 max-md:px-5 max-md:max-w-full"
    >
      <div
        class="flex justify-center items-center px-0.5 w-10 h-10 bg-white rounded"
      >
        <img
          loading="lazy"
          src="@/assets/images/supplier-brand.png"
          alt="Supplier brand"
          class="object-contain self-stretch my-auto w-9 rounded aspect-square"
        />
      </div>
      <div
        class="flex flex-col pr-10 text-xs tracking-tight leading-none font-[590] w-[209px]"
      >
        <div class="text-[token('color.text')]">Supplier Info</div>
        <div
          class="flex flex-col justify-center self-start mt-2 text-[token('color.text.subtle')]"
        >
          <div class="flex gap-1 items-center self-start">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.66667 7.33333H4V10.6667H2.66667V7.33333ZM3.03733 2.592C3.20067 2.26533 3.63333 2 4.004 2H11.9953C12.366 2 12.7993 2.26533 12.962 2.592L14 4.66667H2L3.03733 2.592ZM2 4.66667H14V5.33333H2V4.66667ZM12 7.33333H13.3333V10.6667H12V7.33333ZM2 5.33333C2.09333 6.08533 2.72933 6.66667 3.5 6.66667C4.27067 6.66667 4.90667 6.08533 5 5.33333H2ZM5 5.33333C5.09333 6.08533 5.72933 6.66667 6.5 6.66667C7.27067 6.66667 7.90667 6.08533 8 5.33333H5ZM8 5.33333C8.09333 6.08533 8.72933 6.66667 9.5 6.66667C10.2707 6.66667 10.9067 6.08533 11 5.33333H8ZM11 5.33333C11.0933 6.08533 11.7293 6.66667 12.5 6.66667C13.2707 6.66667 13.9067 6.08533 14 5.33333H11ZM2.66667 10.6667H13.3333V12.6633C13.3342 13.0168 13.1947 13.3562 12.9454 13.6069C12.6961 13.8575 12.3575 13.9989 12.004 14H3.996C3.82089 13.9997 3.64754 13.9649 3.4859 13.8976C3.32426 13.8302 3.17749 13.7316 3.05401 13.6075C2.93052 13.4833 2.83275 13.336 2.76628 13.174C2.69982 13.012 2.66596 12.8384 2.66667 12.6633V10.6667Z"
                fill="#091E42"
                fill-opacity="0.31"
              />
            </svg>
            <div class="self-stretch my-auto">Fidson Healthcare</div>
          </div>
          <div class="flex gap-1 items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 14C6.48 14 4 8.20933 4 6C4 4.93913 4.42143 3.92172 5.17157 3.17157C5.92172 2.42143 6.93913 2 8 2C9.06087 2 10.0783 2.42143 10.8284 3.17157C11.5786 3.92172 12 4.93913 12 6C12 8.20933 9.52 14 8 14ZM8 8C8.25494 8 8.50738 7.94979 8.74292 7.85223C8.97845 7.75466 9.19246 7.61167 9.37273 7.4314C9.553 7.25113 9.696 7.03712 9.79356 6.80158C9.89112 6.56605 9.94133 6.31361 9.94133 6.05867C9.94133 5.80373 9.89112 5.55128 9.79356 5.31575C9.696 5.08022 9.553 4.86621 9.37273 4.68594C9.19246 4.50567 8.97845 4.36267 8.74292 4.26511C8.50738 4.16755 8.25494 4.11733 8 4.11733C7.48513 4.11733 6.99134 4.32187 6.62727 4.68594C6.2632 5.05001 6.05867 5.54379 6.05867 6.05867C6.05867 6.57354 6.2632 7.06733 6.62727 7.4314C6.99134 7.79547 7.48513 8 8 8Z"
                fill="#091E42"
                fill-opacity="0.31"
              />
            </svg>
            <div class="self-stretch my-auto">4, Road 56, Lagos, Nigeria</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col pr-10 text-xs tracking-tight leading-none font-[590] w-[178px]"
      >
        <div class="text-[token('color.text')]">Contact Info</div>
        <div
          class="flex flex-col justify-center self-start mt-2 text-[token('color.text.subtle')]"
        >
          <div class="flex gap-1 items-center whitespace-nowrap">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33333 4.66666V11.3333H12.6667V4.66666H3.33333ZM12.6667 3.33333C13.4 3.33333 14 3.93333 14 4.66666V11.3333C14 12.0667 13.4 12.6667 12.6667 12.6667H3.33333C2.6 12.6667 2 12.0667 2 11.3333V4.66666C2 3.93333 2.6 3.33333 3.33333 3.33333H12.6667Z"
                fill="#091E42"
                fill-opacity="0.31"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.66533 4.33333H2.08267C2.182 4.62666 2.34867 4.90266 2.58267 5.13666L6.504 9.05733C6.69698 9.25048 6.92614 9.4037 7.17837 9.50824C7.4306 9.61278 7.70096 9.66659 7.974 9.66659C8.24704 9.66659 8.5174 9.61278 8.76963 9.50824C9.02186 9.4037 9.25102 9.25048 9.444 9.05733L13.3653 5.13666C13.5987 4.90266 13.7653 4.62666 13.8647 4.33333H12.2827L8.50133 8.11466C8.43206 8.18398 8.3498 8.23898 8.25926 8.27649C8.16872 8.31401 8.07167 8.33333 7.97367 8.33333C7.87566 8.33333 7.77862 8.31401 7.68808 8.27649C7.59754 8.23898 7.51528 8.18398 7.446 8.11466L3.66533 4.33333Z"
                fill="#091E42"
                fill-opacity="0.31"
              />
            </svg>
            <div class="self-stretch my-auto">musa@example.com</div>
          </div>
          <div class="flex gap-1 items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66659 1.33333C3.93021 1.33333 3.33325 1.93028 3.33325 2.66666V13.3333C3.33325 14.0697 3.93021 14.6667 4.66659 14.6667H11.3333C12.0696 14.6667 12.6666 14.0697 12.6666 13.3333V2.66666C12.6666 1.93028 12.0696 1.33333 11.3333 1.33333H4.66659ZM11.3333 2.66666H4.66659V11.3333H11.3333V2.66666ZM9.33325 12.6667H6.66659V13.3333H9.33325V12.6667Z"
                fill="#091E42"
                fill-opacity="0.31"
              />
            </svg>
            <div class="self-stretch my-auto">+234 801 234 5678</div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col pr-10 text-xs tracking-tight leading-none font-[590]"
      >
        <div class="text-[token('color.text')]">Bank Info</div>
        <div
          class="flex flex-col justify-center self-start mt-2 text-[token('color.text.subtle')]"
        >
          <div class="flex gap-1 items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.66667 7.33333H4V10.6667H2.66667V7.33333ZM3.03733 2.592C3.20067 2.26533 3.63333 2 4.004 2H11.9953C12.366 2 12.7993 2.26533 12.962 2.592L14 4.66667H2L3.03733 2.592ZM2 4.66667H14V5.33333H2V4.66667ZM12 7.33333H13.3333V10.6667H12V7.33333ZM2 5.33333C2.09333 6.08533 2.72933 6.66667 3.5 6.66667C4.27067 6.66667 4.90667 6.08533 5 5.33333H2ZM5 5.33333C5.09333 6.08533 5.72933 6.66667 6.5 6.66667C7.27067 6.66667 7.90667 6.08533 8 5.33333H5ZM8 5.33333C8.09333 6.08533 8.72933 6.66667 9.5 6.66667C10.2707 6.66667 10.9067 6.08533 11 5.33333H8ZM11 5.33333C11.0933 6.08533 11.7293 6.66667 12.5 6.66667C13.2707 6.66667 13.9067 6.08533 14 5.33333H11ZM2.66667 10.6667H13.3333V12.6633C13.3342 13.0168 13.1947 13.3562 12.9454 13.6069C12.6961 13.8575 12.3575 13.9989 12.004 14H3.996C3.82089 13.9997 3.64754 13.9649 3.4859 13.8976C3.32426 13.8302 3.17749 13.7316 3.05401 13.6075C2.93052 13.4833 2.83275 13.336 2.76628 13.174C2.69982 13.012 2.66596 12.8384 2.66667 12.6633V10.6667Z"
                fill="#091E42"
                fill-opacity="0.31"
              />
            </svg>
            <div class="self-stretch my-auto">First Bank Plc</div>
          </div>
          <div class="flex gap-1 items-center self-start whitespace-nowrap">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66659 1.33333C3.93021 1.33333 3.33325 1.93028 3.33325 2.66666V13.3333C3.33325 14.0697 3.93021 14.6667 4.66659 14.6667H11.3333C12.0696 14.6667 12.6666 14.0697 12.6666 13.3333V2.66666C12.6666 1.93028 12.0696 1.33333 11.3333 1.33333H4.66659ZM11.3333 2.66666H4.66659V11.3333H11.3333V2.66666ZM9.33325 12.6667H6.66659V13.3333H9.33325V12.6667Z"
                fill="#091E42"
                fill-opacity="0.31"
              />
            </svg>
            <div class="self-stretch my-auto">-----</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex gap-4 items-center px-6 py-2 w-full bg-gray-50 max-md:px-5 max-md:max-w-full"
    >
      <div
        class="flex flex-wrap bg-white gap-6 items-center self-stretch py-4 pr-6 pl-4 my-auto rounded border border-solid border-gray-300 min-w-[240px] max-md:pr-5 max-md:max-w-full"
      >
        <!-- Purchase Order Section -->
        <div class="flex flex-col self-stretch my-auto w-[123px]">
          <div class="flex gap-5 items-center w-full">
            <div
              class="self-stretch my-auto text-xs font-medium leading-none text-slate-500"
            >
              Purchase Order
            </div>
            <div
              class="self-stretch p-1 my-auto text-xs font-bold text-center whitespace-nowrap rounded bg-gray-100 bg-opacity-10 min-h-[20px] text-[token('color.text')]"
            >
              {{ stats.purchaseOrders.count }}
            </div>
          </div>
          <div class="mt-2 text-xs font-semibold text-[token('color.text')]">
            ₦{{ formatNumber(stats.purchaseOrders.total) }}
          </div>
        </div>

        <!-- Vertical Divider -->
        <div
          class="flex flex-col justify-center self-stretch my-auto w-px rounded min-h-[40px]"
        >
          <div
            class="flex flex-1 w-full rounded-sm bg-gray-300 bg-opacity-10 min-h-[41px]"
          ></div>
        </div>

        <!-- Invoices Section -->
        <div
          class="flex flex-col self-stretch my-auto whitespace-nowrap w-[84px]"
        >
          <div class="flex gap-5 items-center w-full">
            <div
              class="self-stretch my-auto text-xs font-medium leading-none text-slate-500"
            >
              Invoices
            </div>
            <div
              class="self-stretch p-1 my-auto text-xs font-bold text-center rounded bg-gray-100 bg-opacity-10 min-h-[20px] text-[token('color.text')]"
            >
              {{ stats.invoices.count }}
            </div>
          </div>
          <div class="mt-2 text-xs font-semibold text-[token('color.text')]">
            ₦{{ formatNumber(stats.invoices.total) }}
          </div>
        </div>

        <!-- Vertical Divider -->
        <div
          class="flex flex-col justify-center self-stretch my-auto w-px rounded min-h-[40px]"
        >
          <div
            class="flex flex-1 w-full rounded-sm bg-gray-300 bg-opacity-10 min-h-[41px]"
          ></div>
        </div>

        <!-- Payments Section -->
        <div
          class="flex flex-col self-stretch my-auto whitespace-nowrap w-[93px]"
        >
          <div class="flex gap-5 items-center w-full">
            <div
              class="self-stretch my-auto text-xs font-medium leading-none text-slate-500"
            >
              Payments
            </div>
            <div
              class="self-stretch p-1 my-auto text-xs font-bold text-center rounded bg-gray-100 bg-opacity-10 min-h-[20px] text-[token('color.text')]"
            >
              {{ stats.payments.count }}
            </div>
          </div>
          <div class="mt-2 text-xs font-semibold text-[token('color.text')]">
            ₦{{ formatNumber(stats.payments.total) }}
          </div>
        </div>

        <!-- Vertical Divider -->
        <div
          class="flex flex-col justify-center self-stretch my-auto w-px rounded min-h-[40px]"
        >
          <div
            class="flex flex-1 w-full rounded-sm bg-gray-300 bg-opacity-10 min-h-[41px]"
          ></div>
        </div>

        <!-- Purchase Qty Section -->
        <div class="flex flex-col self-stretch my-auto w-[70px]">
          <div
            class="gap-5 self-stretch w-full text-xs font-medium leading-none text-slate-500"
          >
            Purchase Qty
          </div>
          <div class="mt-2 text-xs font-semibold text-[token('color.text')]">
            {{ stats.purchaseQty }}
          </div>
        </div>

        <!-- Vertical Divider -->
        <div
          class="flex flex-col justify-center self-stretch my-auto w-px rounded min-h-[40px]"
        >
          <div
            class="flex flex-1 w-full rounded-sm bg-gray-300 bg-opacity-10 min-h-[41px]"
          ></div>
        </div>

        <!-- Returns Section -->
        <div
          class="flex flex-col self-stretch my-auto whitespace-nowrap w-[41px]"
        >
          <div
            class="gap-5 self-stretch w-full text-xs font-medium leading-none text-slate-500"
          >
            Returns
          </div>
          <div class="mt-2 text-xs font-semibold text-[token('color.text')]">
            {{ stats.returns }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { SupplierStats } from '@/types/index';

export default defineComponent({
  name: 'SupplierStats',
  props: {
    stats: {
      type: Object as PropType<SupplierStats>,
      required: true,
    },
  },
  methods: {
    formatNumber(num: number): string {
      return num.toLocaleString();
    },
  },
});
</script>
