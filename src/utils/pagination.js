const Pagination = (products, currentPage) => {
  const productsPerPage = 6;
  const pages = Math.ceil(products.length / productsPerPage);
  const firstIndex = (currentPage - 1) * productsPerPage;
  const lastIndex = currentPage * productsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  return {
    pages,
    currentProducts,
  };
};

export default Pagination;
