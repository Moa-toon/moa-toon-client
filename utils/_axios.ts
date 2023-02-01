import axios, { AxiosInstance } from 'axios';
import getConfig from 'next/config';

interface IAxios {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body: {
        status: number;
        message: string;
        result?: any;
        errorCode?: string;
    };
}

const defHeader: any = {};

const _request = (): AxiosInstance => {
    const request = axios.create({
        timeout: 5000,
        headers: defHeader,
        baseURL: getConfig().publicRuntimeConfig.API
    });

    request.interceptors.response.use(
        (response) => {
            return response.data;
        },
        async (error) => {}
    );
    return request;
};

export const _axios = async (method: IAxios['method'], url: string, body?: any): Promise<IAxios['body']> => {
    switch (method) {
        case 'GET':
            return await _request().get(url);
        case 'POST':
            return await _request().post(url, body ?? {});
        case 'DELETE':
            return await _request().delete(url);
        case 'PATCH':
            return await _request().patch(url, body ?? {});
        case 'PUT':
            return await _request().put(url, body ?? {});
        default:
            throw new Error('_aixos() method error');
    }
};
