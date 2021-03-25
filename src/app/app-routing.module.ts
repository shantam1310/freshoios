import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "detail-page",
    loadChildren: () =>
      import("./pages/detail-page/detail-page.module").then(
        (m) => m.DetailPagePageModule
      ),
  },
  {
    path: "list-page",
    loadChildren: () =>
      import("./pages/list-page/list-page.module").then(
        (m) => m.ListPagePageModule
      ),
  },
  {
    path: "checkout-page",
    loadChildren: () =>
      import("./pages/checkout-page/checkout-page.module").then(
        (m) => m.CheckoutPagePageModule
      ),
  },
  {
    path: "herb-list-page",
    loadChildren: () =>
      import("./pages/herb-list-page/herb-list-page.module").then(
        (m) => m.HerbListPagePageModule
      ),
  },
  {
    path: "fruits-list-page",
    loadChildren: () =>
      import("./pages/fruits-list-page/fruits-list-page.module").then(
        (m) => m.FruitsListPagePageModule
      ),
  },
  {
    path: "frozen-list-page",
    loadChildren: () =>
      import("./pages/frozen-list-page/frozen-list-page.module").then(
        (m) => m.FrozenListPagePageModule
      ),
  },
  {
    path: "diary-list-page",
    loadChildren: () =>
      import("./pages/diary-list-page/diary-list-page.module").then(
        (m) => m.DiaryListPagePageModule
      ),
  },
  {
    path: "seasonal-list-page",
    loadChildren: () =>
      import("./pages/seasonal-list-page/seasonal-list-page.module").then(
        (m) => m.SeasonalListPagePageModule
      ),
  },
  {
    path: "innersurjan",
    loadChildren: () =>
      import("./pages/innersurjan/innersurjan.module").then(
        (m) => m.InnersurjanPageModule
      ),
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'exotic-list',
    loadChildren: () => import('./pages/exotic-list/exotic-list.module').then( m => m.ExoticListPageModule)
  },
  {
    path: 'exotic-detail',
    loadChildren: () => import('./pages/exotic-detail/exotic-detail.module').then( m => m.ExoticDetailPageModule)
  },
  {
    path: 'exotic-vegetable-list',
    loadChildren: () => import('./pages/exotic-vegetable-list/exotic-vegetable-list.module').then( m => m.ExoticVegetableListPageModule)
  },
  {
    path: 'exotic-vegetable-detail',
    loadChildren: () => import('./pages/exotic-vegetable-detail/exotic-vegetable-detail.module').then( m => m.ExoticVegetableDetailPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./pages/thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'termsand-condition',
    loadChildren: () => import('./pages/termsand-condition/termsand-condition.module').then( m => m.TermsandConditionPageModule)
  },
  {
    path: 'return-and-refund',
    loadChildren: () => import('./pages/return-and-refund/return-and-refund.module').then( m => m.ReturnAndRefundPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'view-all',
    loadChildren: () => import('./pages/view-all/view-all.module').then( m => m.ViewAllPageModule)
  },
  {
    path: 'coupon-pop-over',
    loadChildren: () => import('./pages/coupon-pop-over/coupon-pop-over.module').then( m => m.CouponPopOverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
