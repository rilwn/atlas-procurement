import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Branch } from '@/types/index';

export const useProcurementStore = defineStore('procurement', () => {
  const selectedBranch = ref<Branch>({ id: 'main', name: 'Main Branch' });
  const isBranchDropdownOpen = ref(false);
  const isMenuOpen = ref(false);

  const branches: Branch[] = [
    { id: 'lagos-branch', name: 'Main Branch' },
    { id: 'fct-branch', name: 'Abuja Branch' },
    { id: 'gmb-branch', name: 'Gombe Branch' },
    { id: 'kd-branch', name: 'Kaduna Branch' },
  ];

  function selectBranch(branch: Branch) {
    selectedBranch.value = branch;
    isBranchDropdownOpen.value = false;
  }

  function toggleBranchDropdown() {
    isBranchDropdownOpen.value = !isBranchDropdownOpen.value;
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }

  return {
    selectedBranch,
    isBranchDropdownOpen,
    isMenuOpen,
    branches,
    selectBranch,
    toggleBranchDropdown,
    toggleMenu,
  };
});
