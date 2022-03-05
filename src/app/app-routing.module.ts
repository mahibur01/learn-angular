import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';

import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

{
  path: 'product/:id', 
  component: ProductComponent
},


{
  path: 'loan-types', 
  component: LoanTypesComponent
},



{
  path: 'product', 
  component: ProductComponent
},


{
  path: 'clients', 
  component: ClientsComponent,
  canActivate: [AuthGuard]

},

{
 path: 'search', 
 component: SearchComponent
},

{
  path: 'product/:productId/photo/:photoId', 
  component: ProductComponent
},

{ path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },

// {path: "**", component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
