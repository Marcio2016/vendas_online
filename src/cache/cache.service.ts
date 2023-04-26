import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {


    constructor(       
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ){}

    async getCache<T>(key: string, requestCache: () => Promise<T>): Promise<T> {

        const allData: T = await this.cacheManager.get(key)
        
        if(allData) {
            return allData;
        }

        const object: T = await requestCache();

        await this.cacheManager.set(key, object);

        return object;
    }
}

