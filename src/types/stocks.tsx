export interface Eod {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adj_high?: any;
    adj_low?: any;
    adj_close: number;
    adj_open?: any;
    adj_volume?: any;
    split_factor: number;
    dividend: number;
    symbol: string;
    exchange: string;
    date: Date;
}

export interface StockData {
    country?: any;
    eod: Eod[];
    has_eod: boolean;
    has_intraday: boolean;
    name: string;
    symbol: string;
} 