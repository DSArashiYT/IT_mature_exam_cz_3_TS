declare const brand: unique symbol
type BrandType<T, K> = T & { [brand]: K }