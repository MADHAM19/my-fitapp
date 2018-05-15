import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const exercises = [
        {
          id: 10,
          Abbr_en: 'WB',
          Short_name_en: '(wall-balls)',
          Short_name_ru: 'броски медицинского мяча в стену',
          Description_en: '',
          Description_ru: 'броски медицинского мяча в стену',
          Img_id: 100
        },
        {
          id: 6,
          Abbr_en: 'RD',
          Short_name_en: '(ring-dips)',
          Short_name_ru: 'Отжимания на кольцах',
          Description_en: '',
          Description_ru: 'Отжимания на кольцах (Ring Dips) – функциональное упражнение, пришедшее в кроссфит из спортивной'+
          ' гимнастики. Данное упражнение требует неплохого уровня физической подготовки, для большинства новичков'+
          ' техника выполнения отжиманий на гимнастических кольцах покажется сложной – лучше начинать с брусьев.',
          Img_id: 105
        },
        {
          id: 9,
          Abbr_en: 'AMRAP',
          Short_name_en: '(As Many Reps as Possible)',
          Short_name_ru: 'максимальное количество раундов на время',
          Description_en: 'As Many Reps (sometimes Rounds) as Possible',
          Description_ru: 'закончить максимальное количество раундов за отведенный промежуток времени',
          Img_id: 102
        }
        ,
        {
          id: 22,
          Abbr_en: 'AFAP',
          Short_name_en: '(as fast as possible)',
          Short_name_ru: 'выполнить комплекс как можно быстрее',
          Description_en: '',
          Description_ru: 'выполнить комплекс как можно быстрее',
          Img_id: 103
        }
        ,
        // {
        //   id: 15, Abbr_en: '', Short_name_en: '',
        //   Description_en: '',
        //   Description_ru: '',
        //   Img_id: 104
        // }
        // ,
        // {
        //   id: 1, Abbr_en: '', Short_name_en: '',
        //   Description_en: '',
        //   Description_ru: '',
        //   Img_id: 105
        // }
        // ,
      ]
      ;
    return {exercises};
  }
}
