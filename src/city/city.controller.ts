import { CityService } from './city.service';
import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';

@Controller('city')
export class CityController {

    constructor(
        private readonly CityService: CityService
    ){}

    @Get('/:stateId')
    async getAllCitiesByStateId(@Param('stateId') stateId: number): Promise<CityEntity[]> {
        return this.CityService.getAllCitiesByStateId(stateId);
    }    

}
