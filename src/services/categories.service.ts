import { Category } from "../entities";
import { TCategoryCreateRequest } from "../interfaces/categories.interface";
import { categoriesRepo } from "../repositories";

export const createCategoryService = async (
  payload: TCategoryCreateRequest
): Promise<Category> => {
  const newCategory: Category = categoriesRepo.create(payload);
  await categoriesRepo.save(newCategory);
  return newCategory;
};

export const retrieveCategoriesService = async (): Promise<Category[]> => {
    const categories: Category[] = await categoriesRepo.find();
    return categories;
};

export const retrieveRealEstatesByCategoryService = async (category: Category): Promise<Category> => {
    const categorie: Category = (await categoriesRepo.findOne({
        where: {
            id: category.id,
        },
        relations: {
            realEstate: true
        }
    }))!

    return categorie;
};
