import crawlers from './crawlers.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

const {
  crawlAll,
  crawlCourse,
  crawlPurpose,
  crawlCookingMethod,
  crawlDishType,
  crawlOccasion,
} = crawlers;

const COURSE = {
  categoryGroupName: 'Courses',
  categories: {
    1: 'mon-khai-vi',
    2: 'mon-trang-mieng',
    3: 'mon-chay',
    4: 'mon-chinh',
    5: 'mon-an-sang',
    6: 'mon-nhanh-va-de',
    7: 'thuc-uong',
    8: 'banh-banh-ngot',
    9: 'mon-an-cho-tre',
    10: 'mau-nhau',
  },
};
const COOKING_METHODS = {
  categoryGroupName: 'CookingMethods',
  categories: {
    33: 'luoc-hap',
    34: 'chien-xao-xot-rang',
    35: 'hap-om-kho-ram',
    36: 'quay-nuong',
    37: 'ngam-u-muoi',
    38: 'ep-vat-xay',
    39: 'tron-cuon',
  },
};
const PURPOSES = {
  categoryGroupName: 'Purposes',
  categories: {
    5: 'giam-can',
    6: 'cho-phai-manh',
    9: 'an-chay',
    12: 'phu-nu-sau-khi-sinh',
    13: 'phu-nu-mang-thai',
    14: 'tre-duoi-1-tuoi',
    15: 'cho-suc-khoe',
    17: 'cho-tre-em',
    18: 'cho-tim-mach',
    19: 'cho-phai-nu',
    21: 'tang-can',
  },
};
const DISH_TYPES = {
  categoryGroupName: 'DishTypes',
  categories: {
    122: 'snacks',
    123: 'cupcake-muffin',
    124: 'pasta-spaghetti',
    125: 'mien-hu-tieu',
    126: 'bun-mi-pho',
    127: 'do-uong',
    128: 'nuong-quay',
    129: 'ngheu-so-oc',
    130: 'rang-xao',
    131: 'mon-chien',
    132: 'mon-cuon',
    133: 'chung-hap',
    135: 'muoi-chua-ngam-chua',
    136: 'kho-rim',
    137: 'u-len-men',
    138: 'mon-luoc',
    139: 'thach-rau-cau',
    140: 'sua-chua',
    104: 'salad',
    105: 'nuoc-cham-sot',
    106: 'canh',
    107: 'lau',
    108: 'nom-goi',
    109: 'soup-chao',
    110: 'nem-cha',
    111: 'chay',
    112: 'xoi',
    113: 'banh-man',
    114: 'banh-ngot',
    115: 'sinh-to-nuoc-ep',
    117: 'cocktail-mocktail',
    118: 'kem',
    119: 'che',
    120: 'mut-keo',
    121: 'do-song',
  },
};
const OCCASIONS = {
  categoryGroupName: 'Occasions',
  categories: {
    1: 'giang-sinh',
    2: 'tet',
    3: 'sinh-nhat',
    4: 'le-tinh-nhan',
    5: 'ngay-phu-nu',
    7: 'com-gia-dinh',
    8: 'le-hoi-cuoi',
    9: 'mua-an-chay',
    10: 'ngay-thuong',
    11: 'trung-thu',
    12: 'halloween',
  },
};

const select = prompt(`
1: All, \n
2: Course, \n
3: Cooking Method, \n
4: Dish Type, \n
5: Occasion, \n
6: Purpose, \n
Enter a number: 
`);
switch (select) {
  case '1':
    crawlAll();
    break;
  case '2':
    crawlCourse(COURSE);
    break;
  case '3':
    crawlCookingMethod(COOKING_METHODS);
    break;
  case '4':
    crawlDishType(DISH_TYPES);
    break;
  case '5':
    crawlOccasion(OCCASIONS);
    break;
  case '6':
    crawlPurpose(PURPOSES);
    break;
  default:
    break;
}
