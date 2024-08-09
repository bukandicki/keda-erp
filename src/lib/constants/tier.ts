export type TIER_TYPE = {
  name: string;
  description: string;
  slug: string;
  price: number;
  popular: boolean;
  benefits: {
    can_record_incoming_items: boolean;
    can_record_outgoing_items: boolean;
    can_record_profits: boolean;
    can_analyze_sales_with_charts: boolean;
    has_24_7_support: boolean;
    can_export_data_to_excel: boolean;
    can_use_ai_prediction: boolean;
  }
}

export const TIER_LISTS: Array<TIER_TYPE> = [
  {
    name: "Basic",
    description: "Ideal for small businesses or startups that need essential tools to manage incoming and outgoing items, as well as track profits.",
    slug: "basic",
    price: 2300,
    popular: false,
    benefits: {
      can_record_incoming_items: true,
      can_record_outgoing_items: true,
      can_record_profits: true,
      can_analyze_sales_with_charts: false,
      has_24_7_support: false,
      can_export_data_to_excel: false,
      can_use_ai_prediction: false,
    }
  },
  {
    name: "Business",
    description: "Perfect for growing businesses that require more advanced features like sales analysis and 24/7 support to optimize their operations.",
    slug: "business",
    price: 5800,
    popular: true,
    benefits: {
      can_record_incoming_items: true,
      can_record_outgoing_items: true,
      can_record_profits: true,
      can_analyze_sales_with_charts: true,
      has_24_7_support: true,
      can_export_data_to_excel: false,
      can_use_ai_prediction: false,
    }
  },
  {
    name: "Entrepreneur",
    description: "Designed for established businesses or entrepreneurs seeking comprehensive tools including advanced sales analysis, data export, AI-driven predictions, and round-the-clock support.",
    slug: "entrepreneur",
    price: 8000,
    popular: false,
    benefits: {
      can_record_incoming_items: true,
      can_record_outgoing_items: true,
      can_record_profits: true,
      can_analyze_sales_with_charts: true,
      has_24_7_support: true,
      can_export_data_to_excel: true,
      can_use_ai_prediction: true,
    }
  }
];
