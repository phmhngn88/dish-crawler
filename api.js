import fetch from 'node-fetch';

const get = {
  async getRecipes(page) {
    const res = await fetch(
      `https://www.cooky.vn/directory/search?q=null&st=2&lv=&cs=&cm=&dt=&igt=&oc=&p=&crs=&page=${page}&pageSize=12&append=true&video=false`
    );
    const { recipes } = await res.json();
    return recipes;
  },

  async getRecipeDetail(recipeId) {
    const res = await fetch(
      `https://marketapi.cooky.vn/recipe/v1.3/detail?checksum=1df0dec7934f8d91fdee2506755d2154&id=${recipeId}`
    );
    const { data: recipes } = await res.json();
    return recipes;
  },

  async getRecipeCategories(
    page,
    { courseId, cookingMethodId, purposeId, occasionId, dishTypeId }
  ) {
    const res = await fetch(
      `https://www.cooky.vn/directory/search?q=null&st=2&lv=&cs=&cm=${cookingMethodId}&dt${dishTypeId}=&igt=&oc${occasionId}=&p=${purposeId}&crs=${courseId}&page=${page}&pageSize=12&append=true&video=false`
    );
    const { recipes } = await res.json();
    return recipes;
  },

  //   async getRecipesCrs(page, courseId) {
  //     return this.getRecipeCategories(page, { courseId });
  //   },
};

export default get;
