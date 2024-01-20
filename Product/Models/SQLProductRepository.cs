using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
namespace Product.Models
{
    public class SQLProductRepository:IProductRepository
    {
        
       private readonly AppDbContext context;

            public SQLProductRepository(AppDbContext context)
            {
                this.context = context;
            }
            public async Task<ActionResult<Product>> Add(Product product)
            {
                context.Products.Add(product);
                await context.SaveChangesAsync();
                return product;
            }


        public async Task<Product> Delete(int Id)
            {
                Product product = context.Products.Find(Id);
                if (product != null)
                {
                    context.Products.Remove(product);
                    await context.SaveChangesAsync();
                }
                return product;
            }
            public async Task<ActionResult<IEnumerable<Product>?>> GetAllProducts()
            {
                if (context.Products == null)
                {
                    return null;
                }
                return await context.Products.ToListAsync();

            }
            
            public async Task<ActionResult<Product>?> GetProduct(int Id)
            {
                if (context.Products == null)
                {
                    return null;
                }
                var employee = await context.Products.FindAsync(Id);

                if (employee == null)
                {
                    return null;
                }

                return employee;
            }

            public async Task<Product?> Update(int id, Product product)
            {
                if (id != product.Id)
                {
                    return null;
                }

                context.Entry(product).State = EntityState.Modified;

                try
                {
                    await context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProductExists(id))
                    {
                        return null;
                    }
                    else
                    {
                        throw;
                    }
                }
                return null;

            }

       

        

        private bool ProductExists(int id)
            {
                return (context.Products?.Any(e => e.Id == id)).GetValueOrDefault();
            }

        

        
    }
}




