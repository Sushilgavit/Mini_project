namespace Product.Models
{
    public class Product
    {
        public int Id { get; set; }
        public String? Category {  get; set; }
        public String? Name { get; set; }
        public Double? Price { get; set; } 
        public int? MinQty { get; set; }
    }
}
