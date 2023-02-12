export interface IQueryStore {
    query: IQuery;
    SET_QUERY: (queryString: IQuery) => void;
    RESET_QUERY: () => void;
}

export interface IQuery {
    page?: number;
    take?: number;
    type?: string;
    platform?: string;
    updateDay: string;
    genres?: string;
    tags?: string;
    keyword?: string;
    sortBy?: string;
}
