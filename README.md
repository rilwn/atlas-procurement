# Atlas Procurement

### Remedial Health - Frontend Assessment Task

```sh
Directory structure:
└── rilwn-atlas-procurement/
    ├── README.md
    ├── env.d.ts
    ├── index.html
    ├── package.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── tsconfig.vitest.json
    ├── vite.config.ts
    ├── vitest.config.ts
    ├── .env.example
    ├── .eslintignore
    ├── .eslintrc.cjs
    ├── .prettierrc.json
    ├── public/
    └── src/
        ├── App.vue
        ├── main.ts
        ├── assets/
        │   ├── images/
        │   └── logo/
        ├── components/
        │   ├── AppLogo.vue
        │   ├── AuthLogo.vue
        │   ├── Dashboard/
        │   │   ├── DashboardStatsCard.vue
        │   │   ├── MetricCard.vue
        │   │   ├── MetricsGrid.vue
        │   │   ├── ProcurementHeader.vue
        │   │   ├── ProcurementNav.vue
        │   │   ├── ProcurementTitle.vue
        │   │   ├── ShelfLifeAnalysis.vue
        │   │   ├── StorageSpace.vue
        │   │   ├── StorageSpaceAnalysis.vue
        │   │   ├── TopPerformers.vue
        │   │   └── TopPerformersSection.vue
        │   └── Suppliers/
        │       ├── SupplierNavigation.vue
        │       ├── SupplierOrdersTable.vue
        │       ├── SupplierStatistics.vue
        │       ├── SupplierTableControls.vue
        │       └── SupplierTabs.vue
        ├── composables/
        │   ├── data.ts
        │   └── useSupplierOrders.ts
        ├── layouts/
        │   ├── BlankLayout.vue
        │   ├── DefaultLayout.vue
        │   └── RecursiveLayout.vue
        ├── plugins/
        │   └── axios.ts
        ├── router/
        │   ├── index.ts
        │   ├── private.ts
        │   ├── public.ts
        │   ├── modules/
        │   │   ├── all-suppliers.ts
        │   │   ├── dashboard.ts
        │   │   ├── payments.ts
        │   │   ├── product-request.ts
        │   │   ├── purchase-order.ts
        │   │   ├── suppliers-dashbopard.ts
        │   │   └── suppliers-return.ts
        │   └── private/
        │       └── recursive.ts
        ├── scss/
        │   ├── _global.scss
        │   ├── _mixins.scss
        │   ├── _utils.scss
        │   ├── _variables.scss
        │   ├── style.scss
        │   └── pages/
        │       ├── _auth.scss
        │       └── _dashboards.scss
        ├── stores/
        │   ├── index.ts
        │   └── procurementStore.ts
        ├── styles/
        │   ├── global.css
        │   ├── index.css
        │   └── variables.scss
        ├── types/
        │   ├── index.ts
        │   └── shims-vue.d.ts
        └── views/
            ├── Auth/
            │   ├── LoginView.vue
            │   └── RegisterView.vue
            ├── Dashboard/
            │   ├── DashboardView.vue
            │   ├── PaymentsView.vue
            │   ├── ProductRequestsView.vue
            │   ├── PurchaseOrdersView.vue
            │   ├── SupplierReturnsView.vue
            │   └── SuppliersView.vue
            ├── Pages/
            │   ├── Error404Page.vue
            │   └── NotFound.vue
            └── Suppliers/
                └── DashboardView.vue
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
