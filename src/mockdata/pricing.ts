
interface Feature {
  purchase: boolean;
  name: string;
}

interface PricingPlan {
  plan: string;
  price: number;
  features: Feature[];
}

interface PricingData extends Array<PricingPlan> {}

const pricingData:PricingData = [
    {
        plan:"FREE",
        price:0,
        features:[
            {
                purchase:true,
                name:"Quickly analyze deals"
            },
            {
                purchase:false,
                name:"Analyze market rental estimates"
            },
            {
                purchase:false,
                name:"Save property analysis"
            },
             {
                purchase:false,
                name:"Generate Reports"
            }
        ]
    },
     {
        plan:"PREMIUM",
        price:10,
        features:[
            {
                purchase:true,
                name:"Quickly analyze deals"
            },
            {
                purchase:true,
                name:"Analyze market rental estimates"
            },
            {
                purchase:true,
                name:"Save property analysis"
            },
             {
                purchase:false,
                name:"Generate Reports"
            }
        ]
    },
     {
        plan:"ULTRA",
        price:0,
        features:[
            {
                purchase:true,
                name:"Quickly analyze deals"
            },
            {
                purchase:true,
                name:"Analyze market rental estimates"
            },
            {
                purchase:true,
                name:"Save property analysis"
            },
             {
                purchase:true,
                name:"Generate Reports"
            }
        ]
    }
]  


export default pricingData;