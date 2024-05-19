import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('Drawing 20 watss of power from Power Service');
    this.powerService.supplyPower(10);

    return 'data!';
  }
}
