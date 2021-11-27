const categoryFormatter = (
  recipe,
  categoryGroupName,
  categoryId,
  categoryName
) => {
  const { Id } = recipe;
  return {
    Id,
    [`${categoryGroupName}`]: [
      {
        [`${categoryGroupName.substring(0, categoryGroupName.length - 1)}Id`]:
          categoryId,
        [`${categoryGroupName.substring(0, categoryGroupName.length - 1)}Name`]:
          categoryName,
      },
    ],
  };
};

export default categoryFormatter;
