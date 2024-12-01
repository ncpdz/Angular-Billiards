import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RootComponent } from './components/root/root.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsHotComponent } from './components/products-hot/products-hot.component'; 
import { NewCuesComponent } from './components/new-cues/new-cues.component';
import { StoreComponent } from './components/store/store.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { Modal1Component } from './admin/modal1/modal1.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { canActivateLogin } from './canActive';
import { UsershttpComponent } from './admin/usershttp/usershttp.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './admin/admin.guard';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      // { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'products-hot', component: ProductsHotComponent },  
      { path: 'new-cues', component: NewCuesComponent },
      { path: 'store', component: StoreComponent },
      { path: 'checkout', component: CheckoutComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: DashboardComponent},
      { path: 'admin-products', component: AdminProductsComponent },
      { path: 'admin-users', component: AdminUsersComponent },
      { path: 'admin-category', component: AdminCategoryComponent },
      { path: 'admin-order', component: AdminOrderComponent },
      { path: 'users', component: UsershttpComponent },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];
