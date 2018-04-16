//Analytics data model

export interface Analytics{
  manufacturer: string;
  market_name: string;
  codename: string;
  model: string;
  usage_statistics: Array<session_infos>;
}

export interface session_infos{
  building_id:number;
  purchases: purchases [];
}

export interface purchases{
  item_id: number;
  item_category_id: number;
  cost: number;
}
