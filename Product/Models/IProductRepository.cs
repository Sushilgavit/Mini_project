using Microsoft.AspNetCore.Mvc;

namespace Product.Models
{
    public interface IProductRepository
    {
        
            Task<ActionResult<Product>?> GetProduct(int Id);
            Task<ActionResult<IEnumerable<Product>>> GetAllProducts();
            Task<ActionResult<Product>> Add(Product product);
            Task<Product> Update(int id, Product productChanges);
            Task<Product> Delete(int Id);
        


    }
}
