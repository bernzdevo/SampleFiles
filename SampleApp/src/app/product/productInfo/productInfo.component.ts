import { 
    Component, 
    Input, 
    Output,
    EventEmitter,OnInit,OnChanges,SimpleChanges 
} from "@angular/core";


@Component({
    selector:'product-info',
    templateUrl:'productInfo.component.html',
    styleUrls:['productInfo.component.css']
})
export class ProductInfoComponent implements OnInit,OnChanges{
    id:number=5;
    @Input() prodInfo:any[];
    
    @Input() SomeString:string;

    ngOnInit(){
        this.SomeString = "Value from Product Info Component";
    }
    ngOnChanges(changes:SimpleChanges){
        console.log("Previous: "+changes.SomeString.previousValue);
        console.log("Current: "+changes.SomeString.currentValue);
    }


    @Output() OnMessageBack: EventEmitter<any>= 
    new EventEmitter<any>();


    sendMessage(){
        this.OnMessageBack.emit("This message is from ProductInfo");
    }
}