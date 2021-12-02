using AutoMapper;
using michangarrito_back.DTOs;

namespace michangarrito_back.Utilities
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<Product, ProductDTO>().ReverseMap();
            });

            return mappingConfig;
            
        }
    }
}
