import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductModel } from 'src/__base-code__/entity/product.entity';
import { GiftService } from 'src/account/gift/gift.service';
import { ImageService } from 'src/common/image/image.service';
import { MarketService } from 'src/market/market.service';
import { ProductService } from 'src/market/product/product.service';
import { StoreService } from 'src/market/store/store.service';
import { MockProductModel } from '../entity/product.mock';
import { DataService } from 'src/common/data/data.service';

export const providers = [
  GiftService,
  ImageService,
  MarketService,
  ProductService,
  StoreService,
  DataService,
  {
    provide: getRepositoryToken(ProductModel),
    useClass: MockProductModel,
  },
];
