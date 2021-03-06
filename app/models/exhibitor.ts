import ModelBase from 'open-event-frontend/models/base';
import { attr, belongsTo } from '@ember-data/model';

export interface SocialLink {
  name: string;
  link: string;
  is_custom: boolean;
}

export default class Exhibitor extends ModelBase.extend() {
  @attr() name!: string;
  @attr() description!: string;
  @attr() url!: string;
  @attr({ defaultValue: 'pending' }) status!: string;
  @attr() logoUrl!: string;
  @attr() bannerUrl!: string;
  @attr() thumbnailImageUrl!: string;
  @attr() videoUrl!: string;
  @attr() slidesUrl!: string;
  @attr() contactEmail!: string;
  @attr() contactLink!: string;
  @attr() position!: number;
  @attr() socialLinks!: SocialLink[]

  @belongsTo('event') event!: Event;

  get image() {
    return this.thumbnailImageUrl || this.bannerUrl || '/images/placeholders/Other.jpg';
  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'exhibitor': Exhibitor;
  }
}
