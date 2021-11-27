import get from './api.js';
import writeToFile from './file.js';
import categoryFormatter from './helper.js';
import fs, { existsSync } from 'fs';

const { getRecipeDetail, getRecipes, getRecipeCategories } = get;

const crawlers = {
  async crawlAll() {
    let page = 1;
    while (true) {
      const recipes = await getRecipes(page);

      if (recipes.length === 0) return;

      for (let recipe of recipes) {
        // write recipe to recipes.json
        const content = recipe;

        writeToFile(content, `./recipes-${Math.ceil(page / 100)}.json`);
        // write recipe detail to recipeDetails.json
        const recipeDetail = await getRecipeDetail(recipe.Id);
        writeToFile(recipeDetail, `recipeDetail-${Math.ceil(page / 100)}.json`);
      }
      page++;
      console.log(recipes[0].Id);
    }
  },
  async crawlCourse(categoryObj) {
    const { categoryGroupName, categories } = categoryObj;

    for (const categoryId in categories) {
      const dir = `.\\${categoryGroupName}\\${categories[categoryId]}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      let page = 2;
      while (true) {
        const recipes = await getRecipeCategories(page, {
          courseId: categoryId,
        });

        if (recipes.length === 0) break;

        for (let recipe of recipes) {
          // write recipe to recipes.json
          const content = categoryFormatter(
            recipe,
            categoryGroupName,
            categoryId,
            categories[categoryId]
          );
          writeToFile(content, `${dir}/recipes-${Math.ceil(page / 100)}.json`);
        }
        page++;
        console.log(recipes[0].Id);
      }
    }
  },
  async crawlCookingMethod(categoryObj) {
    const { categoryGroupName, categories } = categoryObj;

    for (const categoryId in categories) {
      const dir = `.\\${categoryGroupName}\\${categories[categoryId]}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      let page = 2;
      while (true) {
        const recipes = await getRecipeCategories(page, {
          cookingMethodId: categoryId,
        });

        if (recipes.length === 0) break;

        for (let recipe of recipes) {
          // write recipe to recipes.json
          const content = categoryFormatter(
            recipe,
            categoryGroupName,
            categoryId,
            categories[categoryId]
          );
          writeToFile(content, `${dir}/recipes-${Math.ceil(page / 100)}.json`);
        }
        page++;
        console.log(recipes[0].Id);
      }
    }
  },
  async crawlPurpose(categoryObj) {
    const { categoryGroupName, categories } = categoryObj;

    for (const categoryId in categories) {
      const dir = `.\\${categoryGroupName}\\${categories[categoryId]}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      let page = 2;
      while (true) {
        const recipes = await getRecipeCategories(page, {
          purposeId: categoryId,
        });

        if (recipes.length === 0) break;

        for (let recipe of recipes) {
          // write recipe to recipes.json
          const content = categoryFormatter(
            recipe,
            categoryGroupName,
            categoryId,
            categories[categoryId]
          );
          writeToFile(content, `${dir}/recipes-${Math.ceil(page / 100)}.json`);
        }
        page++;
        console.log(recipes[0].Id);
      }
    }
  },
  async crawlOccasion(categoryObj) {
    const { categoryGroupName, categories } = categoryObj;

    for (const categoryId in categories) {
      const dir = `.\\${categoryGroupName}\\${categories[categoryId]}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      let page = 2;
      while (true) {
        const recipes = await getRecipeCategories(page, {
          occasionId: categoryId,
        });

        if (recipes.length === 0) break;

        for (let recipe of recipes) {
          // write recipe to recipes.json
          const content = categoryFormatter(
            recipe,
            categoryGroupName,
            categoryId,
            categories[categoryId]
          );
          writeToFile(content, `${dir}/recipes-${Math.ceil(page / 100)}.json`);
        }
        page++;
        console.log(recipes[0].Id);
      }
    }
  },
  async crawlDishType(categoryObj) {
    const { categoryGroupName, categories } = categoryObj;

    for (const categoryId in categories) {
      const dir = `.\\${categoryGroupName}\\${categories[categoryId]}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      let page = 2;
      while (true) {
        const recipes = await getRecipeCategories(page, {
          occasionId: categoryId,
        });

        if (recipes.length === 0) break;

        for (let recipe of recipes) {
          // write recipe to recipes.json
          const content = categoryFormatter(
            recipe,
            categoryGroupName,
            categoryId,
            categories[categoryId]
          );
          writeToFile(content, `${dir}/recipes-${Math.ceil(page / 100)}.json`);
        }
        page++;
        console.log(recipes[0].Id);
      }
    }
  },
};

export default crawlers;
