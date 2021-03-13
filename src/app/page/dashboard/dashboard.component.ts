import { Component, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { PlayerService } from '../../service/player.service';
import { TeamService } from '../../service/team.service';
import { ManagerService } from '../../service/manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
combinatedSubscription: Subscription = new Subscription();
  constructor(
    private playerService:PlayerService,
    private teamService:TeamService,
    private managerService:ManagerService,
  ) { }

  pcount:number=0;
  mcount:number=0;
  tcount:number=0;
  pavg:number=0;
  mavg:number=0;
  pszum:number=0;
  mszum:number=0;


  ngOnInit(): void {
    this.combinatedSubscription = combineLatest([
      this.playerService.PlayList$,
      this.managerService.list$,
      this.playerService.getAllsum(),
      this.managerService.getAllsum(),
      this.teamService.teamList$,
      this.teamService.getAllsum(),

    ]).subscribe(
      data => {
        this.pcount =(data[0].filter(o => o.id >0).length);
        this.mcount = (data[1].filter( o => o.id>0).length);
        this.tcount = (data[4].filter( o => o.id>0).length);
         this.pszum=(data[2].map(item=>item.age).reduce((a,b)=>a+b));
         this.mszum=(data[3].map(item=>item.age).reduce((a,b)=>a+b));
         this.pavg=parseInt(''+this.pszum*100/this.pcount)/100;
         this.mavg=parseInt(''+this.mszum*100/this.mcount)/100;
        
        // this.cards[2].content = String(data[2].filter(o => o.status !== 'paid').length);
        // this.cards[3].content = String(data[3].filter(o => o.status !== 'paid').
        // map(item=>item.amount).reduce((a,b)=>a+b));
       
      


        // const allOrders: number = data[2].length;
        // const newOrders: number = data[2].filter( o=> o.status === 'new').length;
        // const shippedOrders: number = data[2].filter( o=> o.status === 'shipped').length;
        // const paidOrders: number = data[2].filter( o=> o.status === 'paid').length;
        // this.orderChartData[0].data = [allOrders, newOrders, shippedOrders, paidOrders];

        // const allProducts: number = data[0].length;
        // const newProducts: number = data[0].filter(pr => pr.featured === true).length;
        // const activeProducts: number = data[0].filter(pr => pr.active === true).length;
        // this.productsChartData[0].data = [allProducts, newProducts,activeProducts];

        // const allCustomers: number = data[1].length;
        // const activeCustomers: number = data[1].filter(cu => cu.active === true).length;
        // const nonActiveCustomers: number = data[1].filter(cu => cu.active === false).length;
        // this.customersChartData[0].data = [allCustomers, activeCustomers, nonActiveCustomers];
      }
    );

    this.playerService.getAll();
    this.managerService.getAll();
    //this.teamService.getAll();
    this.playerService.getAllsum();

    this.managerService.getAllsum();


  }

}
